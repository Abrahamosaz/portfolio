import React from "react";
import "../styles/SuccessModal.css";

const SuccessModal = ({
  isOpen,
  onClose,
  successMessage = "Your request has been processed successfully.",
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-background" aria-hidden="true"></div>
        <span className="modal-spacer" aria-hidden="true">
          &#8203;
        </span>
        <div
          className="modal-content"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="modal-icon-container">
              <svg
                className="modal-icon"
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="modal-header">
              <h3 className="modal-title" id="modal-headline">
                Success
              </h3>
              <div className="modal-message">
                <p>{successMessage}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="modal-button" onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
