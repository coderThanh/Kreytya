import classNames from 'classnames'
import styles from './style.module.scss'
import { UITitle } from '@/components/title/title'

import Bg from '@assets/demo/home/bg-paper.png'

import AppImage from '@/components/img'
import { RevealFade } from '@/components/reveal-effect/reveal-up'
import { TITLE_PAGE } from '@/consts/const'
import Img1 from '@assets/demo/home/img-box-01-min.png'
import Img2 from '@assets/demo/home/img-box-02-min.png'
import Img3 from '@assets/demo/home/img-box-03-min.png'
import Img4 from '@assets/demo/home/img-box-04-min.png'
import { UIAccordingAside } from '@/components/according-aside/according-aside'
import { demoWeDo } from '@/demo/home'

export const HomeWeDo = () => {
  return (
    <>
      <section
        className={classNames(styles.wrap, 'home-we-do')}
        style={{ backgroundImage: `url("${Bg.src}")` }}
      >
        {/* Img Top */}
        <div className={classNames(styles.imgsTop)}>
          <div className={classNames(styles.imgsTopInner)}>
            <RevealFade delay={0.2 * 1} className={classNames(styles.imgWrap)}>
              <AppImage
                src={Img1}
                ratio={100}
                alt={TITLE_PAGE}
                className={classNames(styles.img)}
              />
            </RevealFade>
            <RevealFade className={classNames(styles.imgWrap)} delay={0.2 * 2}>
              <AppImage
                src={Img2}
                ratio={100}
                alt={TITLE_PAGE}
                className={classNames(styles.img)}
              />
            </RevealFade>
            <RevealFade className={classNames(styles.imgWrap)} delay={0.2 * 3}>
              <AppImage
                src={Img3}
                ratio={100}
                alt={TITLE_PAGE}
                className={classNames(styles.img)}
              />
            </RevealFade>
            <RevealFade className={classNames(styles.imgWrap)} delay={0.2 * 4}>
              <AppImage
                src={Img4}
                ratio={100}
                alt={TITLE_PAGE}
                className={classNames(styles.img)}
              />
            </RevealFade>
          </div>
        </div>
        <div className={classNames('container-lg', styles.bodyInner)}>
          {/* title */}
          <div className={classNames('row  justify-content-center mb-30')}>
            <div className={classNames('col-12 col-lg-10')}>
              <UITitle
                className={classNames('text-center')}
                sup={'What We Do'}
                title={'We Design Solutions And Experiences'}
                sub={
                  'Finding the best approach for your needs. Then, transform it into a delightful interface, pleasure experiences with impactful message.'
                }
              />
            </div>
          </div>
          <UIAccordingAside items={demoWeDo} />
        </div>
      </section>
    </>
  )
}
