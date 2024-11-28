import styles from './Filter.module.css';

export default function Filter() {
  return (
    <div className={styles.filter}>
      <span className={styles.filter__title}>Filter:</span>
      <div className={styles['filter__badge--selected']}>ALL</div>
      <div className={styles.filter__badge}>PERSONAL</div>
      <div className={styles.filter__badge}>WORK</div>
    </div>
  );
}
