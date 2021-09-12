import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"
import Seo from "./Seo"

interface LayoutProps {
  pageTitle: string
  seo: any
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ pageTitle, children, seo }: LayoutProps) => {
  return (
    <>
      <Seo seo={seo} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
