import type { AppProps } from "next/app"
import "modern-normalize/modern-normalize.css"
import "../assets/css/globals.scss"
import App from "next/app"
import Head from "next/head"
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const Site = ({ Component, pageProps }: AppProps) => {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
Site.getInitialProps = async (context: any) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(context)
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global")
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } }
}

export default Site
