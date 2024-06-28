import React from "react";
import "../styles/ErrorModal.css";

const ErrorModal = ({
  isOpen,
  onClose,
  errorMessage = "There was an error processing your request.",
}) => {
  if (!isOpen) return null;

  return (
    <div className="error-modal-overlay">
      <div className="error-modal-container">
        <div className="error-modal-background" aria-hidden="true"></div>
        <span className="error-modal-spacer" aria-hidden="true">
          &#8203;
        </span>
        <div
          className="error-modal-content"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="error-modal-icon-container">
              <svg
                className="error-modal-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="error-modal-header">
              <h3 className="error-modal-title" id="modal-headline">
                Error
              </h3>
              <div className="error-modal-message">
                <p>{errorMessage}</p>
              </div>
            </div>
          </div>
          <div className="error-modal-footer">
            <button className="error-modal-button" onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
