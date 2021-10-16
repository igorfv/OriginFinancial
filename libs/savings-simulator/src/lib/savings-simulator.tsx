import Heading from './heading/heading';
import ButtonCta from './button-cta/button-cta';

import styles from './savings-simulator.module.css';

/* eslint-disable-next-line */
export interface SavingsSimulatorProps {
  icon: JSX.Element,
  goal: string,
}

export function SavingsSimulator({ icon, goal }: SavingsSimulatorProps) {
  const handleClick = () => console.log('do something when button is clicked')

  return (
    <div className={styles.container}>
      <div className={styles.spacer}>
        <Heading icon={icon} goal={goal}/>
      </div>
      <div className={styles.ctaSpacer}>
        <ButtonCta onClick={handleClick}>Confirm</ButtonCta>
      </div>
    </div>
  );
}

export default SavingsSimulator;
