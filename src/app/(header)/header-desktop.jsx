import AppImage from '@/components/img'
import classNames from 'classnames'

import styles from './header.module.scss'

import AppLink from '@/components/link'
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
        <div className={classNames('header-inner container', styles.inner)}>
          <AppImage
            src={logo}
            priority={true}
            height={50}
            alt={TITLE_PAGE}
            className={classNames(styles.logo)}
          />
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
                  {item.title}
                </AppLink>
              ))}
            </div>
          </nav>
          <button className={classNames(styles.button)}>
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </>
  )
}
