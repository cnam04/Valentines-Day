import { useState } from "react";
import "./css/popup.css";
import QuizPopup from "./QuizPopup";



export default function Popup({ open, onClose, children }) {
  if (!open) return null;
  
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <div className="backdrop" onClick={onClose} role="presentation">
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        {children}
        <button className="close-btn" onClick={onClose}>
         x
        </button>
        <h2 style={{ margin: 0 }}>YAYYYY!!! I LOVE YOU 💖</h2>
          <p style={{ marginTop: 10 }}>
            You just made my day 😭✨
          </p>
          <p>Take this relationship quiz:</p>
        <button className = "quiz-btn" onClick={() => setQuizOpen(true)}> 
        Quiz
        </button>
      </div>
      <QuizPopup open={quizOpen} onQuizClose={()=> setQuizOpen(false)}></QuizPopup>
    </div>
  );
}
