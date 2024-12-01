import styles from './Card.module.css';

interface CardProps {
  isChecked: boolean;
  onChecked: () => void;
  title: string;
  subtitle: string;
  datetime: Date;
}

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__checkbox}>
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={props.onChecked}
        />
      </div>
      <div className={styles.card__main}>
        <span
          className={
            props.isChecked
              ? styles['card__title--checked']
              : styles.card__title
          }
        >
          {props.title}
        </span>
        <span className={styles.card__subtitle}>{props.subtitle}</span>
      </div>
      <span className={styles.card__datetime}>
        {formatDate(props.datetime)}
      </span>
    </div>
  );
}
