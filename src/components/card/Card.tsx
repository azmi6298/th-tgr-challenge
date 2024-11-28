import styles from './Card.module.css';

interface CardProps {
  isChecked: boolean;
  onChecked: () => void;
  title: string;
  subtitle: string;
  datetime: string;
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
      <span className={styles.card__datetime}>{props.datetime}</span>
    </div>
  );
}
