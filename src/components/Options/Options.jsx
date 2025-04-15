import css from './Options.module.css'
import clsx from 'clsx'


export const Options = ({ click, resetFeedback, feedback }) => {
 
    return (
        <div className={css.block}>
            <button onClick={click} id='good'>Good</button>
            <button onClick={click} id='neutral'>Neutural</button>
            <button onClick={click} id='bad'>Bad</button>
            <button onClick={resetFeedback} className={clsx({ [css.isHidden]: feedback === 0 })}>Reset</button>
        </div>
    )
}