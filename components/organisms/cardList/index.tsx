import React from "react"
import Title from "components/atoms/title/Title"
import Markdown from "react-markdown"
import S from "./cardList.module.scss"
import Card, { Props as CardProps } from "components/molecules/card"

const CardList = ({ title, text, cards }: Props) => {
  return (
    <section className="section">
      <div className={S.head}>
        {title && <Title size="h2">{title}</Title>}
        {text && <Markdown>{text}</Markdown>}
      </div>
      <ul className={S.list}>
        {cards.map((card: CardProps) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    </section>
  )
}

export interface Props {
  id: string
  title: string
  text: string
  cards: CardProps[]
}

export default CardList
