'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'

import styles from './windown.module.scss'

export default function WindownE({
  isShow,
  before,
  classWrap,
  children,
  onClick,
  classBefore,
}) {
  const [stIsShow, setShow] = useState(isShow)
  // Event onclick
  function handleClick(event) {
    onClick && onClick(!stIsShow)
    setShow(!stIsShow)
  }

  useEffect(() => {
    setShow(stIsShow)
  }, [stIsShow])

  return (
    <>
      {before && (
        <div
          className={classNames('windown-before', classBefore)}
          onClick={(e) => handleClick(e)}
        >
          {before}
        </div>
      )}
      <div
        className={classNames(
          styles.wrap,
          'windown-wrap',
          classWrap,
          stIsShow ? styles.show : '',
        )}
      >
        <div className={classNames(styles.inner, 'windown-inner')}>
          <div className={classNames(styles.content, 'windown-content')}>
            {children}
          </div>
          <div
            onClick={(e) => handleClick(e)}
            className={classNames(styles.bg, 'windown-bg')}
          ></div>
          <div
            onClick={(e) => handleClick(e)}
            className={classNames(styles.close, 'windown-close')}
          >
            <div className={classNames(styles.closeInner)}>
              <span className={classNames(styles.iconCloseLine)}></span>
              <span className={classNames(styles.iconCloseLine)}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
