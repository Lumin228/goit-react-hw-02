

export const Feedback = ({ good, neutural, bad }) => {
  return (
    <div style={{border : "1px solid orange", borderRadius: "7px",padding: "5px", width: "30%"}}>
      <p>Good: {good}</p>
      <p>Neutral: {neutural}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + bad + neutural}</p>
      {good || bad || neutural ? (
        <p>
          Positive:{" "}
          {Math.round(((good + neutural) / (good + bad + neutural)) * 100)}
        </p>
      ) : null}
    </div>
  );
};
