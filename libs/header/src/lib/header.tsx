import { ReactComponent as Logo } from './logo.svg';
import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <Logo title="Origin" className={styles.logo} />
    </header>
  );
}

export default Header;
