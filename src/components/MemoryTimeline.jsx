import { useState } from 'react'
import './css/memoryTimeline.css'
import './css/reasons.css'

import img0 from '../assets/memories/IMG_1029.png'
import img1 from '../assets/memories/IMG_5229.png'
import img2 from '../assets/memories/IMG_5311.png'
import img3 from '../assets/memories/IMG_5353.png'
import img4 from '../assets/memories/IMG_5575.png'
import img5 from '../assets/memories/IMG_5608.png'
import img6 from '../assets/memories/IMG_5651.png'
import img7 from '../assets/memories/IMG_5836.png'
import img8 from '../assets/memories/IMG_5861.png'
import img9 from '../assets/memories/IMG_6298.png'
import img10 from '../assets/memories/IMG_6307.png'
import img11 from '../assets/memories/IMG_6322.png'
import img12 from '../assets/memories/IMG_6377.png'
import img13 from '../assets/memories/IMG_6404.png'
import img14 from '../assets/memories/223194BA-80AB-4DF9-A4B0-6BC611FCFFDB_1_102_o.jpeg'
import final from '../assets/memories/final.png'

const memories = [
  {
    image: img0,
    description: 'I love to go to freaky weirdo parties with you <3',
  },
  {
    image: img1,
    description: 'Epic hiking/scrambling/backgammon/picnic date',
  },
  {
    image: img2,
    description: 'I had so much fun this day with you. It was so fun to show you bouldering outside for the first time :)',
  },
  {
    image: img3,
    description: 'It was so cute when you met Emi for the first time. Even though you weren\t expecting to... YASMINT',
  },
  {
    image: img4,
    description: 'Thanks for putting up with my stupidity :P. Having you there on my birthday was so special.',
  },
    {
    image: img5,
    description: 'I love eating good food and listening to good music with you. BEST. BIRTHDAY. EVER.',
  },
  {
    image: img6,
    description: 'I love our cuddles',
  },
  {
    image: img7,
    description: 'CHILIIIISSSSSSS',
  },
  {
    image: img8,
    description: 'Late night froyo runs.... PAST COLE ASKS FUTURE COLE AND YASEMIN IF WE CAN GET FROYO TN',
  },
  {
    image: img9,
    description: 'I love to travel the world and see its beauty with you',
  },
  {
    image: img10,
    description: 'You were eating here so I had to add this in hehe',
  },
  {
    image: img11,
    description: 'I love falling asleep with you. SORRYYYYYYY',
  },
  {
    image: img12,
    description: 'Thanks for standing outside with me when my car broke down....',
  },
  {
    image: img13,
    description: 'I love to be a biggie with you',
  },
  {
    image: img14,
    description: 'I had so much fun at this bar with you :)',
  },
  {
    image: final,
    description: 'This wasn\'t everything, but these are some of my favs with you. I hope we can make a million more. I love you so much <3'
  }
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
      <a href="/reasons.html" className="nav-link-right">Reasons I Love You →</a>
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
