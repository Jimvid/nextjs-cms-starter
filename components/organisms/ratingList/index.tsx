import React from "react"
import Title from "components/atoms/title"
import Rating, { RatingProps } from "components/molecules/rating"
import Divider from "components/atoms/divider"
import S from "./ratingList.module.scss"

const RatingList = (p: RatingListProps) => {
  return (
    <section className={`section ${S.ratingList}`}>
      <Title className={S.title} size="h2">
        {p.title}
      </Title>
      {p.ratings.map(({ id, rating, title, to, from, text }, index) => (
        <React.Fragment key={id}>
          <Rating
            key={id}
            title={title}
            text={text}
            from={from}
            to={to}
            rating={rating}
          />
          {index < p.ratings.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </section>
  )
}

export interface RatingListProps {
  title: string
  ratings: RatingWithId[]
}

interface RatingWithId extends RatingProps {
  id: string
}

export default RatingList
