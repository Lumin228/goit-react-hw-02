import css from './Feedback.module.css'
import clsx from 'clsx'


export const Feedback = ({clicks, feedback, positivity}) => {
    const { good, bad, neutral } = clicks
    
    return (
        <div className={css.block}>
            <p>Good: {good}</p>
            <p>Neutural: {neutral}</p>
            <p>Bad: {bad}</p>
            <p className={clsx({ [css.isHidden]: feedback === 0 })}>Total: {feedback}</p>
            <p className={clsx({ [css.isHidden]: feedback === 0 })}>Positive: {positivity}%</p>
        </div>
    )
}