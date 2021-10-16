import assert from 'assert'
import styles from './title.module.css'

export interface ITitleProps {
  children: string | JSX.Element,
}

export function Title({ children }: ITitleProps) {
  assert(children, [
    'Title:',
    'Can\'t initialize the component without a children element'
  ].join(' '))

  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  )
}

export default Title
