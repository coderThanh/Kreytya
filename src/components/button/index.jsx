'use client'

import classNames from 'classnames'
import AppLink from '../link'

import styles from './button.module.scss'
import { AppButtonColor, AppButtonKind, AppButtonSize } from '@/consts/type'

// HTMLDivElement
export default function AppButton({
  url,
  className,
  kind = AppButtonKind.default,
  color,
  size,
  onClick,
  children,
  text,
}) {
  return (
    <>
      <AppLink
        url={url}
        className={classNames(
          'btn',
          className,
          styles.wrap,
          kind == AppButtonKind.default && styles.default,
          kind == AppButtonKind.text && styles.text + ' btn_text',
          kind == AppButtonKind.outline && styles.outline + ' btn_outline',
          color == AppButtonColor.primary && styles.primary + ' primary',
          color == AppButtonColor.white && styles.white + ' white',
          color == AppButtonColor.whiteTransparent &&
            styles.whiteTransparent + ' white-transparent',
          color == AppButtonColor.darkTransparent &&
            styles.darkTransparent + ' dark-transparent',
          color == AppButtonColor.gray && styles.gray + ' gray',
          color == AppButtonColor.tertiary && styles.tertiary + ' tertiary',
          color == AppButtonColor.error && styles.error + ' error',
          color == AppButtonColor.secondary && styles.secondary + ' secondary',
        )}
      >
        <div
          className={classNames(
            'btn-inner',
            styles.inner,
            size == AppButtonSize.small && styles.small,
          )}
          onClick={() => onClick && onClick()}
        >
          <div className={classNames(styles.content, 'btn-content')}>
            {children}
            {text && (
              <span className={classNames(styles.textWrap, 'btn-title')}>
                {text}
              </span>
            )}
          </div>
          <div className={classNames(styles.bg, 'btn-bg')}></div>
        </div>
      </AppLink>
    </>
  )
}
