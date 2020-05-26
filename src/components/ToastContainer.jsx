import React from 'react';
import PropTypes from 'prop-types';

import Toast from './Toast';
import { useToast } from './ToastContext';

export default function ToastContainer({ children }) {
  const { toasts } = useToast();

  if (toasts.length === 0) {
    return children;
  }

  return (
    <>
      {children}
      <div className="fixed inset-0 flex flex-col px-4 py-6 pointer-events-none sm:p-6 sm:items-end">
        {toasts.map(({ content, id }) => {
          return (
            <Toast key={id} toastId={id}>
              {content}
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
