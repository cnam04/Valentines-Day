import { useMemo, useState } from "react";
import "./css/popup.css";
import "./css/quizPopup.css";

export default function QuizPopup({ open, onQuizClose }) {
    const questions = useMemo(
        () => [
            {
                id: 1,
                question: "What restaurant did we go to on your first weekend upstate?",
                options: ["Grazery", "Garvan's", "Soy", "MOONBURGA"],
                correctAnswerIndex: 2,
            },
            {
                id: 2,
                question: "What is the first meal we ever cooked together?",
                options: ["Breakfast Wrap", "Honey Miso Chicken", "Cheesy Steak Pasta", "Coconut Curry with Salmon"],
                correctAnswerIndex: 3,
            },
            {
                id: 3,
                question: "What is Cole's favorite thing about you?",
                options: ["That you ", "qwodjnqd", "qwoidqodiwnd", "qwodn"],
                correctAnswerIndex: 2,
            },
            {
                id: 4,
                question: "ssjsjsjssienfwijfenfienfwjfnefjn",
                options: ["wqnfdqoidnwqodnq", "qwodjnqd", "qwoidqodiwnd", "qwodn"],
                correctAnswerIndex: 3,
            },
            {
                id: 5,
                question: "ssjsjsjssienfwijfenfienfwjfnefjn",
                options: ["wqnfdqoidnwqodnq", "qwodjnqd", "qwoidqodiwnd", "qwodn"],
                correctAnswerIndex: 0,
            },
        ],
        []
    );
    const [selections, setSelections] = useState(() => questions.map(() => null));
    const [checked, setChecked] = useState(false);

    if (!open) return null;

    const handleSelect = (questionIndex, optionIndex) => {
        setSelections((prev) => {
            const next = [...prev];
            next[questionIndex] = optionIndex;
            return next;
        });
    };

    const handleCheckQuiz = () => {
        setChecked(true);
    };

    const handleCardClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className="quiz-background" onClick={onQuizClose}>
            <div className="quiz-card" onClick={handleCardClick}>
                <button className="close-btn" onClick={onQuizClose}>
                    x
                </button>
                <h1>
                    <b>Relationship Quiz</b>
                </h1>

                <div className="quiz-questions">
                    {questions.map((item, questionIndex) => {
                        const selectedIndex = selections[questionIndex];
                        const hasSelection = selectedIndex !== null;
                        const isCorrect =
                            item.correctAnswerIndex !== null &&
                            selectedIndex === item.correctAnswerIndex;
                        const showResult = checked && hasSelection;
                        const questionClassName = showResult
                            ? isCorrect
                                ? "quiz-question correct"
                                : "quiz-question incorrect"
                            : "quiz-question";

                        return (
                            <div className={questionClassName} key={item.id}>
                                <h2 className="quiz-question-title">
                                    {item.question || `Question ${questionIndex + 1}`}
                                </h2>
                                <div className="quiz-options">
                                    {item.options.map((option, optionIndex) => (
                                        <label
                                            className="quiz-option"
                                            key={`${item.id}-${optionIndex}`}
                                        >
                                            <input
                                                type="radio"
                                                name={`question-${item.id}`}
                                                checked={selectedIndex === optionIndex}
                                                onChange={() =>
                                                    handleSelect(questionIndex, optionIndex)
                                                }
                                            />
                                            <span className="quiz-option-bubble" />
                                            <span className="quiz-option-text">
                                                {option || `Option ${optionIndex + 1}`}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                                {showResult && (
                                    <div
                                        className={
                                            isCorrect ? "quiz-result correct" : "quiz-result incorrect"
                                        }
                                    >
                                        {isCorrect ? "Correct <3" : "Incorrect :("}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <button className="quiz-check-btn" onClick={handleCheckQuiz}>
                    Check Quiz
                </button>
            </div>
        </div>
    );
}