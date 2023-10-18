import classNames from 'classnames'
import styles from './text-running.module.scss'

import { RevealFade } from '@/components/reveal-effect/reveal-up'

export const UITextRunning = ({ children, isRunToLeft = true }) => {
  return (
    <>
      <RevealFade>
        <div
          className={classNames(
            styles.wrap,
            isRunToLeft ? styles.toLeft : styles.toRight,
          )}
        >
          <div className={classNames(styles.inner)}>
            <div className={classNames(styles.item)}>{children}</div>
            <div className={classNames(styles.item)}>{children}</div>
            <div className={classNames(styles.item)}>{children}</div>
            <div className={classNames(styles.item)}>{children}</div>
            <div className={classNames(styles.item)}>{children}</div>
            <div className={classNames(styles.item)}>{children}</div>
          </div>
        </div>
      </RevealFade>
    </>
  )
}
