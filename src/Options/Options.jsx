export const Options = ({updat, result, updteR}) => {
    return (
        
        <div style={{marginBottom: "10px", display: "flex", padding: "5px", maxWidth: "50%", gap: "15px"}}>
            <button onClick={() => updat('good')}>Good</button>
            <button onClick={() => updat('neutural')}>Neutural</button>
            <button onClick={() => updat('bad')}>Bad</button>
            {result.good || result.bad || result.neutural ? (<button onClick={updteR}>Reset</button>) : null}
        </div>
    )

}