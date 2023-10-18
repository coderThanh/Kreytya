import { UITextRunning } from '@/components/text-running/text-running'
import classNames from 'classnames'
import styles from './home-running.module.scss'

export const HomeTextRunning = () => {
  return (
    <>
      <div className="mb-120" />
      <UITextRunning>
        <h2 className={classNames(styles.title)}>
          We Create <span className={classNames(styles.dot)}></span> We Design{' '}
          <span className={classNames(styles.dot)}></span> We Are Kretya{' '}
          <span className={classNames(styles.dot)}></span>{' '}
        </h2>
      </UITextRunning>
      <UITextRunning isRunToLeft={false}>
        <h2 className={classNames(styles.title)}>
          We Create <span className={classNames(styles.dot)}></span> We Design{' '}
          <span className={classNames(styles.dot)}></span> We Are Kretya{' '}
          <span className={classNames(styles.dot)}></span>{' '}
        </h2>
      </UITextRunning>
    </>
  )
}
