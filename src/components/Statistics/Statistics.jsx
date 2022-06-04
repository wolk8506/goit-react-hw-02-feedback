import s from 'components/Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={s.list}>
      <li>Good {good}</li>
      <li>Neutral {neutral}</li>
      <li>Bad {bad}</li>
      <li>Total {total}</li>
      <li>Positive feedback {positivePercentage}%</li>
    </ul>
  );
};
