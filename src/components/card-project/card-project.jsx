import classNames from 'classnames'
import styles from './card-project.module.scss'
import AppImage from '@/components/img'
import { IMG_PLACEHOLDER_GRAY, TITLE_PAGE } from '@/consts/const'
import AppLink from '@/components/link'
import { RevealFade } from '@/components/reveal-effect/reveal-up'

export const CardProject = ({
  imgSrc,
  title,
  link,
  desc,
  isReveal = true,
  delay = 0.1,
}) => {
  const content = (content, delay) => {
    if (isReveal) {
      return (
        <RevealFade delay={delay} style={{ width: '100%' }}>
          {content}
        </RevealFade>
      )
    }
    return content
  }

  return (
    <>
      <div className={classNames(styles.box)}>
        {content(
          <AppLink className={classNames(styles.boxImg)} url={link}>
            <AppImage
              src={imgSrc ?? IMG_PLACEHOLDER_GRAY}
              ratio={100}
              sizes={'100%'}
              alt={TITLE_PAGE}
            />
          </AppLink>,
          delay,
        )}
        {content(
          <div className={classNames(styles.boxText)}>
            <div className={classNames(styles.boxTextInner)}>
              <div className={classNames(styles.title)}>{title}</div>
              <div className={classNames(styles.desc)}>{desc}</div>
            </div>
            <AppLink url={link} className={classNames(styles.btn)}>
              See Detail
            </AppLink>
          </div>,
          delay * 2,
        )}
      </div>
    </>
  )
}
