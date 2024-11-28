import styles from './Header.module.css';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <div className={styles.header}>
      <span className={styles.header__title}>{props.title}</span>
    </div>
  );
}
