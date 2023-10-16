'use client'

import AppMaterialIcon from '@/components/material-icon'
import styles from './styles.module.scss'

import AppImage from '@/components/img'
import { RevealFade } from '@/components/reveal-effect/reveal-up'
import { TITLE_PAGE } from '@/consts/const'
import { AppMaterialIconType } from '@/consts/type'
import classNames from 'classnames'
import { useState } from 'react'

export const UIAccordingAside = ({ items }) => {
  const [stIndex, setIndex] = useState(0)

  return (
    <>
      {items?.length > 0 ? (
        <div className={classNames('row row-gap-y')}>
          {/* body */}
          <div className={classNames('col-12 col-md-7')}>
            <div className={classNames(styles.bodyWrap)}>
              {items?.map((item, index) => (
                <div
                  key={index}
                  className={classNames(
                    styles.bodyItem,
                    index == stIndex ? styles.active : '',
                  )}
                >
                  <span className={classNames(styles.bodyCount)}>
                    {index < 9 ? `0${index + 1}` : index + 1}.
                  </span>
                  <AppImage src={item?.img} alt={TITLE_PAGE} priority={true} />
                  <h5>{item?.title}</h5>
                  <p>{item?.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* title */}
          <div className={classNames('col-12 col-md-5')}>
            <div className={classNames(styles.titleWrap)}>
              {items?.map((item, index) => (
                <RevealFade key={index} delay={0.2 * index}>
                  <div
                    className={classNames(
                      styles.titleItem,
                      stIndex == index ? styles.active : '',
                    )}
                    onClick={(e) => setIndex(index)}
                  >
                    <span className={classNames(styles.titleCount)}>
                      {index < 9 ? `0${index + 1}` : index + 1}.
                    </span>
                    <span className={classNames(styles.title)}>
                      {item?.title}
                    </span>

                    <AppMaterialIcon
                      className={classNames(styles.icon)}
                      type={AppMaterialIconType.round}
                    >
                      {stIndex == index ? 'add' : 'remove'}
                    </AppMaterialIcon>
                  </div>
                </RevealFade>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
