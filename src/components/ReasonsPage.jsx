import { useState } from 'react'
import './css/reasons.css'
import masonImg from '../assets/mason_gradient_bg.png'
import crumpledImg from '../assets/transp-crumpled.png'
import uncrumpledImg from '../assets/transp-uncrumpled.png'

const reasons = [
  'You\'re always so thoughtful. I\'ll never be able to give gifts like you, or plan like you, or think of others like you.',
  'You\'re forgiving. You put up with me through my worst, and always think of my best. Thank you for that.',
  'You\'re weird. I love being silly with you and watching lego ninjago and making poo jokes.',
  'You\'re self aware. I love that you\'re always willing to change, and see the other perspective on things I hope I can be like that to you.',
  'You treat others with kindness and respect, and you are always nice to people. I love that about you.',
]

/* randomised positions & rotations so the balls look natural inside the jar */
const ballStyles = [
  { bottom: '18%', left: '14%', rotate: '-12deg' },
  { bottom: '29%', left: '42%', rotate: '8deg' },
  { bottom: '16%', left: '60%', rotate: '-5deg' },
  { bottom: '40%', left: '18%', rotate: '14deg' },
  { bottom: '45%', left: '54%', rotate: '-9deg' },
]

function CrumpledBall({ style, onClick }) {
  return (
    <button className="crumpled-ball" style={style} onClick={onClick}>
      <img src={crumpledImg} alt="Crumpled paper ball" draggable={false} />
    </button>
  )
}

function UncrumpledOverlay({ text, onClose }) {
  return (
    <div className="uncrumpled-backdrop" onClick={onClose} role="presentation">
      <div className="uncrumpled-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn uncrumpled-close" onClick={onClose}>
          x
        </button>
        <img
          className="uncrumpled-img"
          src={uncrumpledImg}
          alt="Uncrumpled paper"
          draggable={false}
        />
        <p className="uncrumpled-text">{text}</p>
      </div>
    </div>
  )
}

export default function ReasonsPage() {
  const [remaining, setRemaining] = useState(() =>
    reasons.map((text, i) => ({ id: i, text }))
  )
  const [openReason, setOpenReason] = useState(null)

  const handleBallClick = (ball) => {
    setOpenReason(ball)
  }

  const handleClose = () => {
    setRemaining((prev) => prev.filter((b) => b.id !== openReason.id))
    setOpenReason(null)
  }

  return (
    <div className="reasons-page">
      <a href="/memory-timeline.html" className="back-link">
        ← Back
      </a>

      <h1 className="reasons-title">Reasons I Love You 💌</h1>

      <p className="reasons-subtitle">
        Click a paper ball to read a reason&nbsp;💕
      </p>

      <div className="jar-wrapper">
        <img className="jar-img" src={masonImg} alt="Mason jar" draggable={false} />

        {/* Balls inside the jar */}
        <div className="jar-balls">
          {remaining.map((ball) => (
            <CrumpledBall
              key={ball.id}
              style={ballStyles[ball.id]}
              onClick={() => handleBallClick(ball)}
            />
          ))}
        </div>
      </div>

      {remaining.length === 0 && (
        <p className="reasons-done">
          You found them all! I love you so much 🥺💗
        </p>
      )}

      {openReason && (
        <UncrumpledOverlay text={openReason.text} onClose={handleClose} />
      )}
    </div>
  )
}
