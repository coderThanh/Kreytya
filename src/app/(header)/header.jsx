import { HeaderDesktop } from '@/app/(header)/header-desktop'
import { HeaderMobile } from '@/app/(header)/header-mobile'
import classNames from 'classnames'

export default function Header({ isTransparent = false }) {
  return (
    <>
      <header className={classNames({ transparent: isTransparent }, 'header')}>
        <HeaderDesktop isTransparent={isTransparent} />
        <HeaderMobile isTransparent={isTransparent} />
      </header>
    </>
  )
}
