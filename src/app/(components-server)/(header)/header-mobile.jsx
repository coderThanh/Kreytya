import AppButton from '@/components/button'
import AppImage from '@/components/img'
import AppLink from '@/components/link'
import { RevealFade } from '@/components/reveal-effect/reveal-up'
import WindownE from '@/components/windown'
import { TITLE_PAGE } from '@/consts/const'
import { AppButtonColor, AppButtonKind } from '@/consts/type'
import { demoMenus } from '@/demo/menu'
import logo from '@assets/logo/logo-dark.png'
import classNames from 'classnames'
import styles from './header.module.scss'

export const HeaderMobile = ({ isTransparent }) => {
  return (
    <>
      <div
        className={classNames(
          'header-mobile d-block d-md-none',
          styles.mobile,
          isTransparent ? styles.transparent : '',
        )}
      >
        <div className={classNames('header-inner container-lg', styles.inner)}>
          <RevealFade>
            <AppLink url={'/'}>
              <AppImage
                src={logo}
                priority={true}
                height={40}
                className={classNames(styles.logo)}
                alt={TITLE_PAGE}
              />
            </AppLink>
          </RevealFade>
          {/* Windown nav */}
          <WindownE
            isShow={false}
            classWrap={classNames(styles.windownWrap)}
            before={
              <AppButton
                kind={AppButtonKind.default}
                color={AppButtonColor.whiteTransparent}
                className={classNames(styles.btnMenuIcon)}
              >
                <>
                  <RevealFade delay={0.15 * 2}>
                    <div className={classNames(styles.menuIcon)}>
                      <span className={classNames(styles.line)}></span>
                      <span className={classNames(styles.line)}></span>
                      <span className={classNames(styles.line)}></span>
                    </div>
                  </RevealFade>
                </>
              </AppButton>
            }
          >
            <>
              <div className={classNames(styles.windowInner)}>
                <div className={classNames(styles.windowLogo)}>
                  <AppLink url={'/'}>
                    <AppImage
                      src={logo}
                      alt={TITLE_PAGE}
                      height={50}
                      className={classNames(styles.logo)}
                    />
                  </AppLink>
                </div>

                <div className={classNames(styles.nav)}>
                  {/* Nav item */}
                  {demoMenus?.map((item, index) => {
                    return (
                      <div key={index} className={classNames(styles.menuItem)}>
                        <AppLink
                          url={item?.slug}
                          className={classNames(styles.menuLink)}
                        >
                          {item?.title}
                        </AppLink>
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          </WindownE>
        </div>
      </div>
    </>
  )
}
