import { useState } from "react";

export default function MovingButton({ step = 10000 }) {
  const [x, setX] = useState(0);
  const [msg, setMsg] = useState("No");
  const [fontSize, setFontSize] = useState(18);
  
  const handleClick = () => {
    setX(prev => prev + step);
    setMsg(prev => (prev === "No" ? "😡" : "No"));
    setFontSize(prev => prev + 30);
  }

  return (
    <button
      className="btn btn-no"
      onClick={handleClick}
      style={{
        transform: `translateX(${x}px)`,
        transition: "transform 20000ms ease",
        fontSize: `${fontSize}px`,
      }}
    >
      {msg}
    </button>
  );
}
