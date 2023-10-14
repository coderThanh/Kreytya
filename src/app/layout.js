import Layout from '@/components/layout'
import { DESCRIPTION_PAGE, TITLE_PAGE } from '@/consts/const'

import '@/styles/index.scss'

import { Barlow_Condensed } from 'next/font/google'
import Head from 'next/head'

const barlowCondensed = Barlow_Condensed({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['vietnamese'],
})

export const metadata = {
  title: TITLE_PAGE,
  description: DESCRIPTION_PAGE,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <body className={barlowCondensed.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
