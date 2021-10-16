import { ReactComponent as Logo } from './logo.svg';
import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.hiddenTitle}>origin</span>
        <Logo title="Origin" className={styles.logo} />
      </div>
    </header>
  );
}

export default Header;
