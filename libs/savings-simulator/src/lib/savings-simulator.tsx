import Heading from './heading/heading';
import Amount from './amount/amount'
import DateSelector from './date-selector/date-selector'
import ButtonCta from './button-cta/button-cta';

import styles from './savings-simulator.module.css';

/* eslint-disable-next-line */
export interface SavingsSimulatorProps {
  icon: JSX.Element,
  goal: string,
}

export function SavingsSimulator({ icon, goal }: SavingsSimulatorProps) {
  const handleClick = () => console.log('do something when button is clicked')

  const handleAmountChanges = () => { return; }
  const handleDateChanges = () => { return; }

  return (
    <div className={styles.container}>
      <div className={styles.spacer}>
        <Heading icon={icon} goal={goal}/>
        <div className={styles.inputsContainer}>
          <Amount onChange={handleAmountChanges} />
          <DateSelector onChange={handleDateChanges} />
        </div>
      </div>
      <div className={styles.ctaSpacer}>
        <ButtonCta onClick={handleClick}>Confirm</ButtonCta>
      </div>
    </div>
  );
}

export default SavingsSimulator;