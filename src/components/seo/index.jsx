import Head from 'next/head'

export default function SEO({ pageTitle, description, isNofollow }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={description} />

        {/* Hidden for seo */}
        {process.env.NEXT_PUBLIC_IS_HIDDEN_SEO == 'true' || isNofollow ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="all" />
        )}
      </Head>
    </>
  )
}
