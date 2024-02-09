

export const Feedback = ({ good, neutural, bad }) => {
  return (
    <div style={{padding: "5px"}}>
     {good || bad || neutural ? (<>
       <p>Good: {good}</p>
      <p>Neutral: {neutural}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + bad + neutural}</p>
       <p> Positive: {Math.round(((good + neutural) / (good + bad + neutural)) * 100)}%</p>
       </> ) : (
        <h2>No feedback yet</h2>
      )}
    </div>
  );
};
