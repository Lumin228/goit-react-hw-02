import { useState, useEffect } from "react";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";

const LOCAL_KEY = "Tables";

function App() {
 
  const initialDesk = JSON.parse(localStorage.getItem(LOCAL_KEY)) || { good: 0, neutural: 0, bad: 0 };

  const [table, setTable] = useState(initialDesk);

  useEffect(() => {
    
    localStorage.setItem(LOCAL_KEY, JSON.stringify(table));
  }, [table]);

  const update = (type) => {
    setTable(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const updataReset = () => {
    setTable({ good: 0, neutural: 0, bad: 0 });
  };

  return (
    <div style={{ padding: "30px", marginTop: "0" }}>
      <Description />
      <Options updat={update} result={table} updteR={updataReset}/>
      <Feedback good={table.good} neutural={table.neutural} bad={table.bad} />
    </div>
  );
}

export default App;
