import React from "react"
import Title from "components/atoms/title"
import RatingBar from "components/atoms/ratingBar"
import RatingHead from "components/atoms/ratingHead"
import Markdown from "react-markdown"
import S from "./rating.module.scss"

const Rating = (p: RatingProps) => {
  return (
    <div className={S.ratingContainer}>
      <div className={S.content}>
        <Title size="h3">{p.title}</Title>
        <Markdown>{p.text}</Markdown>
      </div>
      <div className={S.rating}>
        <RatingHead from={p.from} to={p.to} />
        <RatingBar rating={p.rating} />
      </div>
    </div>
  )
}

export interface RatingProps {
  title: string
  text: string
  from: string
  to: string
  rating: number
}

export default Rating
