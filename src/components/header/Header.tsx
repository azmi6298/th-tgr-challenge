import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <span className={styles.header__title}>To Do</span>
    </div>
  );
}
