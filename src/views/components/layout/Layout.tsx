import Header from '../header/Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.layout}>{props.children}</main>
    </>
  );
}
