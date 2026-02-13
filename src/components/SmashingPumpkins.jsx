import { useEffect, useState } from "react";

import nonSmashed from "../assets/pumpkin_left_v3.png";
import lightlySmashed from "../assets/pumpkin_middle_v3.png";
import smashed from "../assets/pumpkin_right_v3.png";
import './css/pumpkin.css'
// You can keep "transp" if you want, but you don't need it anymore.
// import transp from "../assets/transparent.png";

const frames = [nonSmashed, lightlySmashed, smashed];

export default function SmashingPumpkin({ onDone }) {
  const [idx, setIdx] = useState(0);
  const lastIdx = frames.length - 1;

  function handleClick() {
    setIdx((prev) => Math.min(prev + 1, lastIdx));
  }

  // When we reach the final smash frame, hide the overlay
  useEffect(() => {
    if (idx === lastIdx) {
      const t = setTimeout(() => {
        onDone?.(); // tell parent to hide this component
      }, 500); // small delay so user sees the final frame
      return () => clearTimeout(t);
    }
  }, [idx, lastIdx, onDone]);

  return (
    <div className="pumpkinOverlay">
      <img
        src={frames[idx]}
        className="smashTarget"
        onClick={handleClick}
        draggable={false}
        alt="smash pumpkin"
        style={{ width: 1000, userSelect: "none" }}
      />
    </div>
  );
}