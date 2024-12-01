import { CategoryType } from '@/libs/entities/todo';
import styles from './Filter.module.css';

interface FilterProps {
  selectedFilter: CategoryType | undefined;
  onSelectFilter(category: CategoryType | undefined): void;
}

const filters: { label: string; value: CategoryType | undefined }[] = [
  { label: 'ALL', value: undefined },
  { label: 'PERSONAL', value: 'personal' },
  { label: 'WORK', value: 'work' },
];

export default function Filter(props: FilterProps) {
  return (
    <div className={styles.filter}>
      <span className={styles.filter__title}>Filter:</span>
      {filters.map(({ label, value }) => (
        <button
          key={label}
          onClick={() => props.onSelectFilter(value)}
          className={
            props.selectedFilter === value
              ? styles['filter__badge--selected']
              : styles.filter__badge
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}
