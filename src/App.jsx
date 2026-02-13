import { useState } from 'react'
import './app.css'
import uwu from './assets/herve-for-me.gif'
import MovingButton from './components/movingButton'
import YesButton from './components/YesButton'
import HeartsRain from './components/heartsRain'
import Popup from './components/Popup'
import SmashingPumpkin from './components/SmashingPumpkins'

function App() {
  const [heartsOn, setHeartsOn] = useState(false);
  const [open, setOpen] = useState(false);
  const [showQuizButton, setQuizButton] = useState(false);
  const [showPumpkin, setShowPumpkin] = useState(true);

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
       
      <div className="landing">
        <h1 className="landing-title">Will you be my valentine???? 💝</h1>
        <img className="landing-gif" src={uwu} alt="fingers together" />
        <div className="landing-buttons">
          <YesButton onYes={handleYes} />
          <MovingButton />
        </div>
        <Popup open={open} onClose={() => setOpen(false)}>
        </Popup>
      </div>
      {showPumpkin && (
        <SmashingPumpkin onDone={() => setShowPumpkin(false)} />
      )}
      
    </>
  )
}

export default App
