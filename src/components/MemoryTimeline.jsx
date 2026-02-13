import { useState } from 'react'
import './css/memoryTimeline.css'
import pumpkinImg from '../assets/pumpkin_left_v3.png'

const memories = [
  {
    image: pumpkinImg,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula, mi eget laoreet varius, libero erat pellentesque nulla.',
  },
  {
    image: pumpkinImg,
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.',
  },
  {
    image: pumpkinImg,
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    image: pumpkinImg,
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
  },
  {
    image: pumpkinImg,
    description:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
  },
  {
    image: pumpkinImg,
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.',
  },
]

export default function MemoryTimeline() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(null) // 'left' | 'right'
  const [animating, setAnimating] = useState(false)

  const goTo = (next, dir) => {
    if (animating || next === current) return
    setDirection(dir)
    setAnimating(true)
  }

  const handlePrev = () => {
    if (current === 0) return
    goTo(current - 1, 'left')
  }

  const handleNext = () => {
    if (current === memories.length - 1) return
    goTo(current + 1, 'right')
  }

  const handleAnimationEnd = () => {
    setCurrent((prev) => prev + (direction === 'right' ? 1 : -1))
    setDirection(null)
    setAnimating(false)
  }

  const exitClass = direction === 'right' ? 'slide-out-left' : direction === 'left' ? 'slide-out-right' : ''
  const enterClass = direction === 'right' ? 'slide-in-right' : direction === 'left' ? 'slide-in-left' : ''
  const nextIndex = direction === 'right' ? current + 1 : direction === 'left' ? current - 1 : current

  return (
    <div className="timeline-page">
      <a href="/" className="back-link">← Back</a>
      <h1 className="timeline-title">Our Memories Together 💕</h1>

      <div className="timeline-carousel">
        {/* Left arrow */}
        <button
          className="carousel-arrow carousel-arrow--left"
          onClick={handlePrev}
          disabled={current === 0}
          aria-label="Previous memory"
        >
          ‹
        </button>

        {/* Card viewport */}
        <div className="carousel-viewport">
          {/* Current card */}
          <div
            className={`memory-card ${animating ? exitClass : 'card-active'}`}
            onAnimationEnd={animating ? handleAnimationEnd : undefined}
          >
            <img
              className="memory-card__image"
              src={memories[current].image}
              alt={`Memory ${current + 1}`}
            />
            <div className="memory-card__text">
              <p>{memories[current].description}</p>
            </div>
          </div>

          {/* Incoming card (only while animating) */}
          {animating && (
            <div className={`memory-card ${enterClass}`}>
              <img
                className="memory-card__image"
                src={memories[nextIndex].image}
                alt={`Memory ${nextIndex + 1}`}
              />
              <div className="memory-card__text">
                <p>{memories[nextIndex].description}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right arrow */}
        <button
          className="carousel-arrow carousel-arrow--right"
          onClick={handleNext}
          disabled={current === memories.length - 1}
          aria-label="Next memory"
        >
          ›
        </button>
      </div>

      {/* Dots indicator */}
      <div className="carousel-dots">
        {memories.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
