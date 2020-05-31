import React, { useState, useContext, createContext, useCallback } from 'react';
import PropTypes from 'prop-types';

export interface Toast {
  id: number;
  children: React.ReactNode;
}

interface ToastContext {
  addToast: (content: string) => void;
  removeToast: (id: number) => void;
  toasts: Toast[];
}

const ToastContext = createContext<ToastContext>({} as ToastContext);

let toastCount = 0;
export const ToastProvider: React.FC<any> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (content) => {
      const id = toastCount++;
      const newToast = { children: content, id };
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
};

ToastProvider.propTypes = {
  children: PropTypes.node,
};

export const useToast = () => {
  return useContext(ToastContext);
};
