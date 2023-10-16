'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const RevealFade = ({
  children,
  style,
  duration = 0.42,
  delay = 0.25,
  hidden,
  visible,
  className,
}) => {
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInview) {
      mainControls.start('visible')
    }
  }, [delay, isInview, mainControls])

  return (
    <>
      <div
        ref={ref}
        style={{ overflow: 'hidden', ...style }}
        className={className}
      >
        <motion.div
          variants={{
            hidden: hidden ?? { opacity: 0, y: 75 },
            visible: visible ?? { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{
            duration: duration,
            delay: delay,
          }}
          animate={mainControls}
        >
          {children}
        </motion.div>
      </div>
    </>
  )
}
