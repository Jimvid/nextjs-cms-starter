import React from "react"
import Header from "components/organisms/Header"
import Footer from "components/organisms/Footer"
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
      <main className="max-w-wrapper m-auto p-1">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
