import { useRef } from 'react';
import assert from 'assert';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import styles from './amount.module.css';

/* eslint-disable-next-line */
export interface AmountProps {
  onChange: (amount: number) => void,
}

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2,
  integerLimit: 12,
  allowNegative: false,
  allowLeadingZeroes: false,
};

export function Amount({ onChange }: AmountProps) {
  assert(onChange, [
    'Amount:',
    'Can\' initialize component without an onChange function',
  ].join(' '));

  const inputRef = useRef(null);
  const currencyMask = createNumberMask(defaultMaskOptions);

  const handleChange = (e: InputEvent) => {
    const el = e.target as HTMLTextAreaElement;
    const stringAmount: string = el.value;
    const amount = Number(stringAmount.replace(/,/g, ''));

    onChange(amount);
  };

  return (
    <div className={styles.container}>
      <label>
        <div className={styles.label}>Total amount</div>
        <MaskedInput
          ref={inputRef}
          onChange={handleChange}
          mask={currencyMask}
          name="amount"
          className={styles.input}
        />
      </label>
    </div>
  );
}

export default Amount;
