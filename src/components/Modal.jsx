import PropTypes from "prop-types";

export default function Modal({ message, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-btn" onClick={onCancel}>
          &times;
        </button>
        <p>{message}</p>
        <div className="modal-actions" style={{ marginTop: "20px" }}>
          <button className="confirm-btn" onClick={onConfirm}>
            Confirm
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  message: PropTypes.string.isRequired, // 'message' must be a string and is required
  onConfirm: PropTypes.func.isRequired, // 'onConfirm' must be a function and is required
  onCancel: PropTypes.func.isRequired, // 'onCancel' must be a function and is required
};
