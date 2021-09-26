import React from "react"
import Header from "components/organisms/header/Header"
import Footer from "components/organisms/footer/Footer"
import Seo, { SeoDetails } from "./Seo"

const Layout = ({ children, seo }: LayoutProps) => {
  return (
    <>
      <Seo {...seo} />
      <Header />
      <main className="inner section">{children}</main>
      <Footer />
    </>
  )
}

interface LayoutProps {
  seo?: SeoDetails
  children: JSX.Element | JSX.Element[]
}

export default Layout
