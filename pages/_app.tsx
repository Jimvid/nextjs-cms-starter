import type { AppProps } from "next/app"
import App from "next/app"
import Head from "next/head"
import { createContext } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import "modern-normalize/modern-normalize.css"
import "../assets/css/main.scss"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const Site = ({ Component, pageProps }: AppProps) => {
    const { global } = pageProps as any

    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    href={getStrapiMedia(global.favicon) || "/favicon.ico"}
                />
            </Head>
            <GlobalContext.Provider value={global}>
                <Component {...pageProps} />
            </GlobalContext.Provider>
        </>
    )
}

// getInitialProps disables automatic static optimization for pages
//  that don't have getStaticProps.
Site.getInitialProps = async (context: any) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(context)

    // Fetch global site settings from Strapi
    const strapiGlobal = await fetchAPI("/global")

    // Fetch alla pages and return those that
    // should be displayed in the menu
    const pages = await fetchAPI("/pages")

    const menu = Array.isArray(pages)
        ? pages.filter((menuLink: MenuLink) => menuLink.inMenu)
        : []

    const global = { ...strapiGlobal, menu }
    // Pass the data to our page via props
    return { ...appProps, pageProps: { global } }
}

// Types
interface MenuLink {
    inMenu: boolean
    slug: string
    title: string
}

export default Site
