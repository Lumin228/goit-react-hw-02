import css from './Options.module.css'
import clsx from 'clsx'


export const Options = ({ clickGood, clickBad, clickNeutral, resetFeedback, feedback }) => {
 
    return (
        <div className={css.block}>
            <button onClick={clickGood}>Good</button>
            <button onClick={clickNeutral}>Neutural</button>
            <button onClick={clickBad}>Bad</button>
            <button onClick={resetFeedback} className={clsx({ [css.isHidden]: feedback === 0 })}>Reset</button>
        </div>
    )
}