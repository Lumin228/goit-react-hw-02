import { useState, useEffect } from "react";
import { Descrtiption } from '../Description/Description'
import { Options } from '../Options/Options'
import css from '../App/App.module.css'
import { Feedback } from '../Feedback/Feedback'

function App() {
  const GOOD = 'good'
  const NEUTRAL = 'neutral'
  const BAD = 'bad'

  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // good: localStorage.getItem(GOOD), neutral: localStorage.getItem(NEUTRAL), bad: localStorage.getItem(BAD)
  useEffect(() => {
    const savedGood = localStorage.getItem(GOOD);
    const savedNeutral = localStorage.getItem(NEUTRAL);
    const savedBad = localStorage.getItem(BAD);

    setClicks({
      good: savedGood ? Number(savedGood) : 0, // Преобразуем строку в число
      neutral: savedNeutral ? Number(savedNeutral) : 0,
      bad: savedBad ? Number(savedBad) : 0,
    });
  }, []);

  const clickGood = () =>{
    setClicks({
      ...clicks, 
      good: clicks.good + 1,
  })
    localStorage.setItem(GOOD, clicks.good + 1)
  }
  
  const clickNeutral = () =>{
    setClicks({
      ...clicks, 
      neutral: clicks.neutral + 1,
  })
  localStorage.setItem(NEUTRAL, clicks.neutral + 1)
  }


  const clickBad = () =>{
    setClicks({
      ...clicks, 
      bad: clicks.bad + 1,
  })
  localStorage.setItem(BAD, clicks.bad + 1)
  }


  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    localStorage.setItem(BAD, 0);
    localStorage.setItem(NEUTRAL, 0)
    localStorage.setItem(GOOD, 0)
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  return (
    <>
     <div className={css.totalBlock}>
        <Descrtiption/>
        <Options clickGood={clickGood}
        clickBad={clickBad}
        clickNeutral={clickNeutral}
        resetFeedback={resetFeedback}
        feedback={totalFeedback}/>
        <Feedback clicks={clicks} feedback={totalFeedback}/>
     </div>
    </>
  )
}

export default App
