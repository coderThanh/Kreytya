import classNames from 'classnames'
import styles from './styles.module.scss'
import { RevealFade } from '@/components/reveal-effect/reveal-up'

export const HomeTextRunning = ({ isRunToLeft = true }) => {
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
            {/* item */}
            <div className={classNames(styles.item)}>
              <h2 className={classNames(styles.title)}>
                We Create <span className={classNames(styles.dot)}></span> We
                Design <span className={classNames(styles.dot)}></span> We Are
                Kretya <span className={classNames(styles.dot)}></span>{' '}
              </h2>
            </div>
            {/* item */}
            <div className={classNames(styles.item)}>
              <h2 className={classNames(styles.title)}>
                We Create <span className={classNames(styles.dot)}></span> We
                Design <span className={classNames(styles.dot)}></span> We Are
                Kretya <span className={classNames(styles.dot)}></span>{' '}
              </h2>
            </div>
            {/* item */}
            <div className={classNames(styles.item)}>
              <h2 className={classNames(styles.title)}>
                We Create <span className={classNames(styles.dot)}></span> We
                Design <span className={classNames(styles.dot)}></span> We Are
                Kretya <span className={classNames(styles.dot)}></span>{' '}
              </h2>
            </div>
            {/* item */}
            <div className={classNames(styles.item)}>
              <h2 className={classNames(styles.title)}>
                We Create <span className={classNames(styles.dot)}></span> We
                Design <span className={classNames(styles.dot)}></span> We Are
                Kretya <span className={classNames(styles.dot)}></span>{' '}
              </h2>
            </div>
            {/* item */}
            <div className={classNames(styles.item)}>
              <h2 className={classNames(styles.title)}>
                We Create <span className={classNames(styles.dot)}></span> We
                Design <span className={classNames(styles.dot)}></span> We Are
                Kretya <span className={classNames(styles.dot)}></span>{' '}
              </h2>
            </div>
          </div>
        </div>
      </RevealFade>
    </>
  )
}
