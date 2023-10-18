import classNames from 'classnames'
import { UITextRunning } from '@/components/text-running/text-running'
import styles from './home-contact.module.scss'
import runningStyles from '@/app/(components-server)/(home-running)/home-running.module.scss'
import AppLink from '@/components/link'
import AppMaterialIcon from '@/components/material-icon'
import {
  AppButtonColor,
  AppButtonKind,
  AppMaterialIconType,
} from '@/consts/type'
import AppButton from '@/components/button'
import { RevealFade } from '@/components/reveal-effect/reveal-up'

export const HomeContact = () => {
  return (
    <>
      <section className={classNames('mt-50')}>
        <UITextRunning>
          <h2 className={classNames(runningStyles.title)}>
            Contact Us <span className={classNames(runningStyles.dot)}></span>{' '}
          </h2>
        </UITextRunning>
        <div className={classNames('container-lg', styles.container)}>
          <RevealFade style={{ marginTop: '-2.5rem' }} delay={0.4}>
            <div className={classNames(styles.inner)}>
              {/* Top action */}
              <div className={classNames('row row-gap-y mb-30')}>
                <div className={classNames('col-12')}>
                  <div className={classNames(styles.content)}>
                    <h3 className={classNames(styles.title)}>
                      Do You Have A Question, An Idea, Or A Project That Need To
                      Be Done?
                    </h3>
                    <AppLink url={'#'} className={classNames(styles.link)}>
                      <div className={classNames(styles.linkContent)}>
                        <AppMaterialIcon
                          type={AppMaterialIconType.round}
                          className={classNames(styles.linkIcon)}
                        >
                          mail
                        </AppMaterialIcon>
                        <span className={classNames(styles.linkText)}>
                          Send Message
                        </span>
                      </div>
                    </AppLink>
                  </div>
                </div>
              </div>
              {/* Bottom action */}
              <div className={classNames('row align-items-strech row-gap-y')}>
                <div className={classNames('col-6 col-md-4')}>
                  <AppButton
                    url={'#'}
                    color={AppButtonColor.white}
                    kind={AppButtonKind.default}
                    className={classNames(styles.btn)}
                  >
                    <span className={classNames(styles.btnText)}>
                      Book A Call
                    </span>
                  </AppButton>
                </div>
                <div className={classNames('col-6 col-md-4')}>
                  <AppButton
                    url={'#'}
                    color={AppButtonColor.white}
                    kind={AppButtonKind.default}
                    className={classNames(styles.btn)}
                  >
                    <span className={classNames(styles.btnText)}>
                      See All Pricing
                    </span>
                  </AppButton>
                </div>
                <div className={classNames('col-12 col-md-4')}>
                  <AppButton
                    url={'#'}
                    color={AppButtonColor.white}
                    kind={AppButtonKind.default}
                    className={classNames(styles.btn)}
                  >
                    <span className={classNames(styles.btnText)}>
                      demoemail@.gmail.com
                    </span>
                  </AppButton>
                </div>
              </div>
            </div>
          </RevealFade>
        </div>
      </section>
    </>
  )
}
