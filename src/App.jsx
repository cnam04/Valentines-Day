import { useState } from 'react'
import uwu from './assets/herve-for-me.gif'
import MovingButton from './components/movingButton'
import YesButton from './components/yesButton'
import HeartsRain from './components/heartsRain'
import Popup from './components/Popup'

function App() {
  const [heartsOn, setHeartsOn] = useState(false);
  const [open, setOpen] = useState(false);
  const [showQuizButton, setQuizButton] = useState(false);

  const handleYes = () => {
    setOpen(true);
    setHeartsOn(true);

    // stop hearts after a bit (popup can stay)
    window.setTimeout(() => setHeartsOn(false), 4500);
  };

  const handleClose = () => {
    setOpen(false);
    setQuizButton(true);
  }
  return (
    <>
      <HeartsRain active={heartsOn}></HeartsRain>
      <h1>Will you be my valentine????</h1>
        <img src={uwu} alt="fingers together" style={{ width: 300 }} />
        <div>
        <YesButton onYes={handleYes} />
        <MovingButton />
        <Popup open={open} onClose={() => setOpen(false)}>
          <h2 style={{ margin: 0 }}>YAYYYY!!! I LOVE YOU 💖</h2>
          <p style={{ marginTop: 10 }}>
            You just made my whole day 😭✨
          </p>
        </Popup>
        </div>
    </>
  )
}

export default App
