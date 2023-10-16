import classNames from 'classnames'

import AppButton from '@/components/button'
import { AppButtonColor, AppButtonKind } from '@/consts/type'
import styles from './style.module.scss'

import Gap from '@/components/gap'
import AppLink from '@/components/link'
import { RevealFade } from '@/components/reveal-effect/reveal-up'
import IconBehance from '@assets/icon/behance.svg'
import IconDri from '@assets/icon/drib.svg'
import IconIn from '@assets/icon/in.svg'
import IconInsta from '@assets/icon/insta.svg'

export default function HomeWelcome({}) {
  return (
    <>
      <section className={classNames(styles.wrap)}>
        <div className={classNames(styles.inner, 'container-lg')}>
          <RevealFade>
            <h1>
              WE DESIGN FOR <br /> HUMAN,{' '}
              <span>
                NOT
                <span className={classNames(styles.underline)}></span>
              </span>{' '}
              ALIEN
            </h1>
          </RevealFade>
          <Gap large={20} />

          <RevealFade>
            <p>
              Experienced design team passionate to create visual-approaching
              solutions to solved your business needs and your user.
            </p>
          </RevealFade>
          <Gap />
          <RevealFade>
            <AppButton
              color={AppButtonColor.primary}
              kind={AppButtonKind.default}
              text={'Start New Project'}
              className={classNames(styles.btn)}
            ></AppButton>
          </RevealFade>
          <Gap />
          <div className={classNames(styles.social)}>
            <RevealFade delay={0.2 * 1}>
              <AppLink url={'#'} className={classNames(styles.icon)}>
                <IconBehance />
              </AppLink>
            </RevealFade>
            <RevealFade delay={0.2 * 2}>
              <AppLink url={'#'} className={classNames(styles.icon)}>
                <IconDri />
              </AppLink>
            </RevealFade>
            <RevealFade delay={0.2 * 3}>
              <AppLink url={'#'} className={classNames(styles.icon)}>
                <IconIn />
              </AppLink>
            </RevealFade>
            <RevealFade delay={0.2 * 4}>
              <AppLink url={'#'} className={classNames(styles.icon)}>
                <IconInsta />
              </AppLink>
            </RevealFade>
          </div>
        </div>
      </section>
    </>
  )
}
