import { useState } from "react";
import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";
function App() {
  const [table, setTable] = useState({ good: 0, neutural: 0, bad: 0 });

  const updataGood = () => {
    setTable({
      ...table,
      good: table.good + 1,
    });
  };

  const updataNeutural = () => {
    setTable({
      ...table,
      neutural: table.neutural + 1,
    });
  };

  const updataBad = () => {
    setTable({
      ...table,
      bad: table.bad + 1,
    });
  };


  return (
    <div style={{ padding: "30px", marginTop: "0" }}>
      <Description />
      <Options updteG={updataGood} updteN={updataNeutural} updteB={updataBad} result={table}/>
      <Feedback good={table.good} neutural={table.neutural} bad={table.bad} />
    </div>
  );
}

export default App;
