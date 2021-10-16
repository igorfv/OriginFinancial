import styles from './title.module.css';

export interface ITitleProps {
  children: string | JSX.Element,
}

export function Title({ children }: ITitleProps) {
  if (!children) return null;

  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}

export default Title;
