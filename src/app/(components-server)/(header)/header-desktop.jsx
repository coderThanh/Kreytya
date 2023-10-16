import AppImage from '@/components/img'
import classNames from 'classnames'

import styles from './header.module.scss'

import AppLink from '@/components/link'
import { RevealFade } from '@/components/reveal-effect/reveal-up'
import { TITLE_PAGE } from '@/consts/const'
import { demoMenus } from '@/demo/menu'
import logo from '@assets/logo/logo-dark.png'

export const HeaderDesktop = ({ isTransparent }) => {
  return (
    <>
      <div
        className={classNames(
          'header-desk d-none d-md-block',
          styles.desk,
          isTransparent ? styles.transparent : '',
        )}
      >
        <div className={classNames('header-inner container-lg', styles.inner)}>
          <RevealFade>
            <AppImage
              src={logo}
              priority={true}
              height={50}
              alt={TITLE_PAGE}
              className={classNames(styles.logo)}
            />
          </RevealFade>
          <nav className={classNames(styles.nav)}>
            <div className={classNames(styles.navInner)}>
              {demoMenus.map((item, index) => (
                <AppLink
                  key={index}
                  url={item.slug}
                  className={classNames(
                    styles.menuItem,
                    index == 0 ? styles.active : '',
                  )}
                >
                  <RevealFade delay={index * 0.1}>{item.title}</RevealFade>
                </AppLink>
              ))}
            </div>
          </nav>
          <RevealFade delay={0.75}>
            <button className={classNames(styles.button)}>
              <span>Contact Us</span>
            </button>
          </RevealFade>
        </div>
      </div>
    </>
  )
}
