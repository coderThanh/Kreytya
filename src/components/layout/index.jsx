'use client'

import classNames from 'classnames'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './layout.module.scss'

import { Barlow_Condensed } from 'next/font/google'

const barlowCondensed = Barlow_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['vietnamese'],
})

export default function Layout({ children, className }) {
  return (
    <>
      <style jsx global>{`
        :root {
          // Fonts
          --font-family: ${barlowCondensed.style.fontFamily}, sans-serif;
          --font-family-title: ${barlowCondensed.style.fontFamily},
            ${barlowCondensed.style.fontFamily}, sans-serif;

          // Colors
          --primary: #1c35ec;
          --on-primary: #fff;
          --primary-container: #1c35ec;
          --on-primary-container: #fff;

          --secondary: #181823;
          --on-secondary: #fff;
          --secondary-container: #545457;
          --on-secondary-container: #efefef;

          --tertiary: #49c8da;
          --on-tertiary: #fff;
          --tertiary-container: #308f9d;
          --on-tertiary-container: #e6f1f3;

          --error: #d61355;
          --on-error: #fff;
          --error-container: #9d1543;
          --on-error-container: #f6eef1;

          --background: #fff;
          --on-background: #6f6f6f;
          --surface: #101010;
          --on-surface: #fff;

          --color-neutral1: #f2f2f2;
          --color-neutral2: #ccc;
          --color-neutral3: #eeeeee;

          --color-title: #101010;
          --color-basic: #6f6f6f;
          --link-basic: #6f6f6f;
          --link-hover: #ff6600;
        }
      `}</style>
      <main id="main" className={classNames(styles.main, className)}>
        {children}
      </main>
      {/* Anount popup */}
      <ToastContainer />
    </>
  )
}
