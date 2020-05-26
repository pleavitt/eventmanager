import React, { useState, useContext, createContext, useCallback } from 'react';
import PropTypes from 'prop-types';

const ToastContext = createContext();

let toastCount = 0;
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(
    (content) => {
      const id = toastCount++;
      const newToast = { content, id };
      setToasts((prevToasts) => {
        return [...prevToasts, newToast];
      });
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id) => {
      setToasts((prevToasts) => {
        return prevToasts.filter((toast) => {
          return toast.id !== id;
        });
      });
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

ToastProvider.propTypes = {
  children: PropTypes.node,
};

export const useToast = () => {
  return useContext(ToastContext);
};
