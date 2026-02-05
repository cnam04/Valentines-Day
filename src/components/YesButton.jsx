export default function YesButton({ onYes }) {
  return (
    <button
      onClick={onYes}
      style={{
        padding: "14px 22px",
        borderRadius: 14,
        border: "none",
        fontSize: 18,
        cursor: "pointer",
      }}
    >
      YES
    </button>
  );
}
