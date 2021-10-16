import { MouseEvent } from 'react'

import assert from 'assert';

import styles from './button-cta.module.css';

/* eslint-disable-next-line */
export interface ButtonCtaProps {
  children: string | JSX.Element,
  onClick: () => void,
}

export function ButtonCta({ children, onClick }: ButtonCtaProps) {
  assert(children && onClick, [
    'ButtonCta:',
    'Can\' initialize component without a children element and a onClick function',
  ].join(' '))

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    onClick()
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      { children }
    </button>
  );
}

export default ButtonCta;
