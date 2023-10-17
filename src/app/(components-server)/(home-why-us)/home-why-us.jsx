import classNames from 'classnames'

import styles from './styles.module.scss'
import { UITitle } from '@/components/title/title'

import IMG_1 from '@assets/demo/home/card-img-1-min.png'
import IMG_2 from '@assets/demo/home/card-img-2-min.png'
import IMG_3 from '@assets/demo/home/card-img-3-min.png'
import AppImage from '@/components/img'
import { TITLE_PAGE } from '@/consts/const'
import { RevealFade } from '@/components/reveal-effect/reveal-up'

export const HomeWhyUs = () => {
  return (
    <>
      <section className={classNames(styles.wrap)}>
        <div className={classNames('container-lg', styles.inner)}>
          <div className={classNames('row')}>
            <div className={classNames('col-12', styles.col)}>
              <div className={classNames(styles.colInner)}>
                <UITitle
                  sup={'Why Us'}
                  title={'We Craft Your Ideas & Make It Great'}
                  isLight={true}
                  className={classNames('text-center')}
                />
                <div className={classNames(' mb-40')}></div>
                <div className={classNames('row align-items-strech row-gap-y')}>
                  <div className={classNames('col-12 col-md-6')}>
                    <RevealFade style={{ minHeight: '100%', display: 'flex' }}>
                      <div className={classNames(styles.item)}>
                        <div className={classNames(styles.boxText)}>
                          <span className={classNames(styles.count)}>01.</span>
                          <AppImage
                            src={IMG_1}
                            alt={TITLE_PAGE}
                            className={classNames(styles.img)}
                          />
                          <h5>
                            Reliable people who won’t waste your freaking time
                          </h5>
                          <p>
                            Our Swift-Paced Team Always Commited And Put Your
                            Project As Our Number One Priority. With High
                            Quality Output Without Missed From The Deadline.
                          </p>
                        </div>
                      </div>
                    </RevealFade>
                  </div>
                  <div className={classNames('col-12 col-md-6')}>
                    <RevealFade
                      style={{ minHeight: '100%', display: 'flex' }}
                      delay={0.2 * 2}
                    >
                      {' '}
                      <div className={classNames(styles.item)}>
                        <div className={classNames(styles.boxText)}>
                          <span className={classNames(styles.count)}>02.</span>
                          <h5>
                            Reliable people who won’t waste your freaking time
                          </h5>
                          <p>
                            Our Swift-Paced Team Always Commited And Put Your
                            Project As Our Number One Priority. With High
                            Quality Output Without Missed From The Deadline.
                          </p>
                        </div>
                        <AppImage
                          src={IMG_2}
                          alt={TITLE_PAGE}
                          className={classNames(styles.img)}
                        />
                      </div>
                    </RevealFade>
                  </div>
                  <div className={classNames('col-12')}>
                    <RevealFade
                      style={{ minHeight: '100%', display: 'flex' }}
                      delay={0.2 * 3}
                    >
                      <div className={classNames(styles.item)}>
                        <div className={classNames(styles.boxText)}>
                          <span className={classNames(styles.count)}>03.</span>
                        </div>
                        <div className={classNames('row row-collapse')}>
                          <div
                            className={classNames('col-12 col-md-5  order-1 ')}
                          >
                            <div className={classNames(styles.boxText)}>
                              <h5>
                                Reliable people who won’t waste your freaking
                                time
                              </h5>
                              <p>
                                Our Swift-Paced Team Always Commited And Put
                                Your Project As Our Number One Priority. With
                                High Quality Output Without Missed From The
                                Deadline.
                              </p>
                            </div>
                          </div>
                          <div
                            className={classNames(
                              'col-12 col-md-7 order-0 order-md-2',
                            )}
                          >
                            <div className={classNames(styles.boxText)}>
                              <AppImage
                                src={IMG_3}
                                alt={TITLE_PAGE}
                                className={classNames(styles.img)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </RevealFade>
                  </div>
                </div>
                <div className={classNames(styles.sub)}>
                  <RevealFade>Meet Your Solution Here</RevealFade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
