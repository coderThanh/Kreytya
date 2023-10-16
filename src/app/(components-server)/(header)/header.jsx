import { HeaderDesktop } from '@/app/(components-server)/(header)/header-desktop'
import { HeaderMobile } from '@/app/(components-server)/(header)/header-mobile'
import classNames from 'classnames'

import styles from './header.module.scss'

export default function Header({ isTransparent = false }) {
  return (
    <>
      <header
        className={classNames(
          { transparent: isTransparent },
          'header',
          styles.header,
          isTransparent ? styles.transparent : '',
        )}
      >
        <HeaderDesktop isTransparent={isTransparent} />
        <HeaderMobile isTransparent={isTransparent} />
      </header>
    </>
  )
}
