import React from "react"
import Title from "components/atoms/title"
import Markdown from "react-markdown"
import Link from "components/atoms/link"
import S from "./featuredText.module.scss"

const FeaturedText = (p: FeaturedTextProps) => {
  return (
    <section className={`section inner ${S.featuredText}`}>
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

export default FeaturedText

export interface FeaturedTextProps {
  title: string
  text: string
  link: {
    label: string
    url: string
  }
}
