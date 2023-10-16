'use client'

import classNames from 'classnames'
import styles from './title.module.scss'
import Gap from '@/components/gap'
import { RevealFade } from '@/components/reveal-effect/reveal-up'

export const UITitle = ({
  sub,
  title,
  sup,
  className,
  isLight = false,
  isReveal = true,
}) => {
  const content = (text, delay) => {
    if (isReveal) {
      return (
        <RevealFade delay={delay}>
          <span className={classNames(styles.span)}>{text}</span>
        </RevealFade>
      )
    }
    return <span className={classNames(styles.span)}>{text}</span>
  }

  return (
    <>
      <div
        className={classNames(
          styles.wrap,
          'title-wrap',
          { light: isLight },
          isLight ? styles.light : '',
          className,
        )}
      >
        {sup && <h6 className={classNames(styles.sup)}>{content(sup, 0.2)}</h6>}
        {title && (
          <h2 className={classNames(styles.title)}>
            {content(title, 0.2 * 2)}
          </h2>
        )}
        {sub && (
          <h5 className={classNames(styles.sub)}>{content(sub, 0.2 * 3)}</h5>
        )}
      </div>
    </>
  )
}
