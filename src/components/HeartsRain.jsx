import { useEffect, useRef, useState } from "react";
import "./css/hearts.css";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function HeartsRain({ active, durationMs = 7000, rateMs = 30 }) {
  const [hearts, setHearts] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (!active) return;

    const start = Date.now();

    const intervalId = setInterval(() => {
      const elapsed = Date.now() - start;
      if (elapsed > durationMs) {
        clearInterval(intervalId);
        return;
      }

      const id = idRef.current++;
      const left = rand(0, 100); // vw
      const size = rand(18, 52); // px
      const fall = rand(1.8, 4.2); // seconds
      const drift = rand(-60, 60); // px
      const rotate = rand(-40, 40); // deg

      const heart = {
        id,
        left,
        size,
        fall,
        drift,
        rotate,
        emoji: "💖",
      };

      setHearts((prev) => [...prev, heart]);

      // remove after animation finishes
      window.setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, Math.ceil(fall * 1000));
    }, rateMs);

    return () => clearInterval(intervalId);
  }, [active, durationMs, rateMs]);

  return (
    <div className="hearts-layer" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}vw`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.fall}s`,
            "--drift": `${h.drift}px`,
            "--rot": `${h.rotate}deg`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
