import { useRef, useState, useEffect, ChangeEvent, KeyboardEvent, MouseEventHandler } from 'react';
import assert from 'assert';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

import { ReactComponent as ArrowLeft } from './arrow-left.svg';
import { ReactComponent as ArrowRight } from './arrow-right.svg';

import styles from './date-selector.module.css';

/* eslint-disable-next-line */
export interface DateSelectorProps {
  onChange: (months: number) => void,
}
export function DateSelector({ onChange }: DateSelectorProps) {
  assert(onChange, [
    'Amount:',
    'Can\' initialize component without an onChange function',
  ].join(' '));

  const inputRef = useRef(null);
  const [numberOfMonths, setNumberOfMonths] = useState(1)

  const preventDefault = (e: any) => {
    e?.preventDefault()
  }

  const updateNumbersOfMonths = (months: number): void => {
    let numberOfMonths = months
    if (months < 1) numberOfMonths = 1

    setNumberOfMonths(numberOfMonths)
    onChange(numberOfMonths)

    if(inputRef.current) (inputRef.current as HTMLInputElement)?.focus()
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    switch(e.key) {
      case 'ArrowLeft': {
        updateNumbersOfMonths(numberOfMonths - 1);
        break;
      }
      case 'ArrowRight': {
        updateNumbersOfMonths(numberOfMonths + 1);
        break;
      }
      case 'Tab': return;
      default: break;
    }

    e.preventDefault()
  }

  const selectedDate = dayjs()
    .add(numberOfMonths, 'month')

  const selectedMonth = selectedDate
    .locale('en')
    .format('MMMM');

  const selectedYear = selectedDate
    .locale('en')
    .format('YYYY');

  return (
    <div className={styles.container}>
      <label>
        <div className={styles.label}>Reach goal by</div>
        <div className={styles.inputContainer}>
          <input
            ref={inputRef}
            name="reachDate"
            className={styles.input}
            value={numberOfMonths}
            onChange={preventDefault}
            onKeyDown={handleKeyPress}
            data-testid="month-input"
          />
          <div className={styles.dateSelector} onMouseDown={preventDefault}>
            <div>
              <button
                tabIndex={-1}
                className={styles.arrowButton}
                onClick={() => updateNumbersOfMonths(numberOfMonths - 1)}
                data-testid="arrow-left"
              >
                <ArrowLeft className={styles.arrow} title="Previous month" />
              </button>
            </div>
            <div>
              <div className={styles.month}>{ selectedMonth }</div>
              <div className={styles.year}>{ selectedYear }</div>
            </div>
            <div>
              <button
                tabIndex={-1}
                className={styles.arrowButton}
                onClick={() => updateNumbersOfMonths(numberOfMonths + 1)}
                data-testid="arrow-right"
              >
                <ArrowRight className={styles.arrow} title="Next month" />
              </button>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}

export default DateSelector;
