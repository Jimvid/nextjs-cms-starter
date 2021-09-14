import React from "react"
import Header from "components/organisms/header/Header"
import Footer from "components/organisms/footer/Footer"
import Seo from "./Seo"

interface LayoutProps {
  seo: any
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children, seo }: LayoutProps) => {
  return (
    <>
      <Seo seo={seo} />
      <Header />
      <main className="inner section">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
