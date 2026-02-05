import "./css/popup.css";

export default function Popup({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="backdrop" onClick={onClose} role="presentation">
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        {children}
        <button className="close-btn" onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
}
