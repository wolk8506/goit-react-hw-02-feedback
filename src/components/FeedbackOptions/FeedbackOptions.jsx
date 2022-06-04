import s from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.btnBlock}>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback(options[0])}
      >
        Good
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback(options[1])}
      >
        Neutral
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => onLeaveFeedback(options[2])}
      >
        Bad
      </button>
    </div>
  );
};
