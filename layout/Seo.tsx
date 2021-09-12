import Head from "next/head"
import { useContext } from "react"
import { GlobalContext } from "../pages/_app"
import { getStrapiMedia } from "../lib/media"
import { GlobalContextProps } from "pages/_app"

interface SeoProps {
  seo: SeoDetails
}

interface SeoDetails {
  metaDescription: string
  metaTitle: string
  shareImage: {}
}

interface Seo extends GlobalContextProps {
  defaultSeo: SeoDetails
  siteName: string
}

const Seo = ({ seo }: SeoProps) => {
  const { defaultSeo, siteName }: Seo = useContext(GlobalContext)
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  }

  const fullSeo = {
    ...seoWithDefaults,
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    shareImage: getStrapiMedia(seoWithDefaults.shareImage),
  }

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}
    </Head>
  )
}

export default Seo
