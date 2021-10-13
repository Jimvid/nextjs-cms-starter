import React from "react"
import Title from "components/atoms/title/Title"
import Link from "next/link"
import Markdown from "react-markdown"
import S from "./card.module.scss"

const Card = ({ title, text, url }: Props) => {
  return (
    <article className={S.card}>
      <Title className={S.title} size="h3">
        {title}
      </Title>
      <Markdown>{text}</Markdown>
      <Link href={url}> </Link>
    </article>
  )
}

export interface Props {
  id: string
  title: string
  text: string
  url: string
}

export default Card
