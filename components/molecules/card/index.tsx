import React from "react"
import Title from "components/atoms/title"
import Link from "next/link"
import Markdown from "react-markdown"
import S from "./card.module.scss"

const Card = ({ title, text, url }: CardProps) => {
  return (
    <article className={`${S.card} elevate`}>
      <Title className={S.title} size="h3">
        {title}
      </Title>
      <Markdown>{text}</Markdown>
      <Link href={url}> </Link>
    </article>
  )
}

export interface CardProps {
  id: string
  title: string
  text: string
  url: string
}

export default Card
