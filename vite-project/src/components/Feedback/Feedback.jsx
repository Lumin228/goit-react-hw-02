import css from '../Feedback/Feedback.module.css'
import clsx from 'clsx'


export const Feedback = ({clicks, feedback}) => {
    const { good, bad, neutral } = clicks
    
    const Positive = Math.round((good / feedback) * 100);
    return (
        <div className={css.block}>
            <p>Good: {good}</p>
            <p>Neutural: {neutral}</p>
            <p>Bad: {bad}</p>
            <p className={clsx({ [css.isHidden]: feedback === 0 })}>Total: {feedback}</p>
            <p className={clsx({ [css.isHidden]: feedback === 0 })}>Positive: {Positive}%</p>
        </div>
    )
}