import assert from 'assert';

import styles from './heading.module.css';

/* eslint-disable-next-line */
export interface HeadingProps {
  icon: JSX.Element,
  goal: string,
}

export function Heading({ icon, goal }: HeadingProps) {
  assert((icon !== undefined && icon !== null), [
    'SavingsSimulator:',
    'Can\'t initialize the component without an icon'
  ].join(' '));

  assert((goal !== undefined && goal !== null), [
    'SavingsSimulator:',
    'Can\'t initialize the component without a goal'
  ].join(' '));

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{ icon }</div>
      <div>
        <h3 className={styles.title}>{ goal }</h3>
        <div className={styles.subTitle}>Saving goal</div>
      </div>
    </div>
  );
}

export default Heading;
