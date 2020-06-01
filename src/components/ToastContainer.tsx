import React from 'react';
import PropTypes from 'prop-types';

import Toast from './Toast';
import { useToast } from './ToastContext';

const ToastContainer: React.FC<any> = ({ children }) => {
  const { toasts } = useToast();

  if (toasts.length === 0) {
    return children;
  }

  return (
    <>
      {children}
      <div className="fixed inset-0 flex flex-col px-4 py-6 pointer-events-none sm:p-6 sm:items-end">
        {toasts.map(({ children, id }) => {
          return (
            <Toast key={id} id={id}>
              {children}
            </Toast>
          );
        })}
      </div>
    </>
  );
}
ToastContainer.propTypes = {
  children: PropTypes.node,
};

export default ToastContainer