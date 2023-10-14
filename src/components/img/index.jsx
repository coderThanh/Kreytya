import classNames from 'classnames'
import Image from 'next/image'

import styles from './img.module.scss'

export default function AppImage({
  className,
  ratio,
  style,
  radius,
  src,
  alt,
  width,
  height,
  styleImg,
  sizes,
  overlayCover,
  priority,
}) {
  return (
    <div
      className={classNames(
        'img-wrap',
        className,
        ratio ? styles.ratio : '',
        styles.wrap,
      )}
      style={{
        ...style,
      }}
    >
      <div
        className={classNames(styles.imgInner, 'img-inner')}
        style={{
          paddingTop: ratio ? `${ratio}%` : undefined,
          borderRadius: radius,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill={ratio ? true : false}
          width={ratio ? undefined : width}
          height={ratio ? undefined : height}
          style={{ ...styleImg }}
          priority={priority}
          sizes={ratio ? sizes ?? '100%' : undefined}
          className={classNames(styles.img)}
        />
        <div
          className={classNames(styles.imgOverlay)}
          style={{
            backgroundColor: overlayCover,
          }}
        ></div>
      </div>
    </div>
  )
}
