export const Options = ({updteG, updteN, updteB, result}) => {
    return (
        
        <div style={{marginBottom: "10px", border : "1px solid purple", borderRadius: "10px",display: "flex", padding: "5px", maxWidth: "50%", gap: "15px"}}>
            <button onClick={updteG}>Good</button>
            <button onClick={updteN}>Neutural</button>
            <button onClick={updteB}>Bad</button>
            {result.good || result.bad || result.neutural ? (<button>Reset</button>) : null}
        </div>
    )

}