import './date-selector.module.css';

/* eslint-disable-next-line */
export interface DateSelectorProps {
  onChange: (months: number) => void,
}

export function DateSelector(props: DateSelectorProps) {
  return (
    <div>
      <h1>Welcome to DateSelector!</h1>
    </div>
  );
}

export default DateSelector;
