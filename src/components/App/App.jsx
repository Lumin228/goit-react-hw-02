import { useState, useEffect } from "react";
import { Descrtiption } from '../Description/Description'
import { Options } from '../Options/Options'
import css from './App.module.css'
import { Feedback } from '../Feedback/Feedback'
import { Notification } from "../Feedback/Notification";

function App() {
  const FEEDBACK_KEY = 'Feedback'

  const [clicks, setClicks] = useState(() => {
    try {
      const { good = 0, neutral = 0, bad = 0 } = JSON.parse(localStorage.getItem('Feedback')) || {};
      return { good, neutral, bad };
    } catch {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  useEffect(() => {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(clicks));

  }, [clicks]);

  const click = (evt) =>{
    setClicks({
      ...clicks, 
      [evt.target.id]: clicks[evt.target.id] + 1,
  })
  }


  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const Positive = Math.round((clicks.good  / totalFeedback) * 100);

  return (
    <>
     <div className={css.totalBlock}>
        <Descrtiption/>
        <Options click={click}
        resetFeedback={resetFeedback}
        feedback={totalFeedback}/>
        {totalFeedback == 0 ? <Notification/> : <Feedback clicks={clicks} feedback={totalFeedback} positivity={Positive}/>}
     </div>
    </>
  )
}

export default App
