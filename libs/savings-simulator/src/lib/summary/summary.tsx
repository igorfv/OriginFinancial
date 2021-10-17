import assert from 'assert';
import cn from 'classnames';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

import styles from './summary.module.css';

/* eslint-disable-next-line */
export interface SummaryProps {
  amount: number,
  numberOfMonths: number,
}

export function Summary({ amount, numberOfMonths }: SummaryProps) {
  assert(typeof amount === 'number', [
    'Summary:',
    'Can\' initialize component without a valid amount',
  ].join(' '));

  assert(typeof numberOfMonths === 'number', [
    'Summary:',
    'Can\' initialize component without a valid numberOfMonths',
  ].join(' '));

  const isHidden = amount === 0 || numberOfMonths === 0;

  const monthlyAmount = Math.ceil(amount / numberOfMonths);
  const intlMonthlyAmount = Intl
    .NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    .format(monthlyAmount)
    .replace('.00', ''); // Remove when decimal is empty

  const depositText = numberOfMonths === 1 ? 'deposit' : 'deposits';
  const intlAmount = Intl
    .NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    .format(amount)
    .replace('.00', ''); // Remove when decimal is empty

  const intlEndDate = dayjs()
    .add(numberOfMonths, 'month')
    .locale('en')
    .format('MMMM YYYY');

  return (
    <div className={cn(
      styles.wrapper,
      isHidden && styles.hidden
    )} data-testid="summary-wrapper">
      <div className={styles.container}>
        <div className={styles.monthlyContainer}>
          <div className={styles.monthly}>Monthly amount</div>
          <div className={styles.monthlyAmount}>{intlMonthlyAmount}</div>
        </div>
        <div className={styles.summary} data-testid="summary-text">
          You’re planning <strong>{numberOfMonths}</strong> monthly <strong>{depositText}</strong> to reach your <strong>{intlAmount}</strong> goal by <strong>{intlEndDate}.</strong>
        </div>
      </div>
    </div>
  );
}

export default Summary;
