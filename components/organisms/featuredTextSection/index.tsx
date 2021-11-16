import React from "react"
import Title from "components/atoms/title"
import Markdown from "react-markdown"
import Link from "components/atoms/link"
import S from "./featuredTextSection.module.scss"

const FeaturedTextSection = (p: FeaturedTextSectionProps) => {
  return (
    <section className={`section inner ${S.featuredTextSection}`}>
      <div>
        <Title size="h2">{p.title}</Title>
        <Markdown>{p.text}</Markdown>
        <Link href={p.link.url}>{p.link.label}</Link>
      </div>
      <span className={`${S.top_left} ${S.corner}`}></span>
      <span className={`${S.top_right} ${S.corner}`}></span>
      <span className={`${S.bottom_left} ${S.corner}`}></span>
      <span className={`${S.bottom_right} ${S.corner}`}></span>
    </section>
  )
}

export default FeaturedTextSection

export interface FeaturedTextSectionProps {
  title: string
  text: string
  link: {
    label: string
    url: string
  }
}
