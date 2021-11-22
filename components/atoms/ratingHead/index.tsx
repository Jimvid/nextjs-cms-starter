import React from "react"
import S from "./ratingHead.module.scss"

const RatingHead = (p: RatingHeadProps) => {
  return (
    <div className={S.rating__head}>
      <p>{p.from}</p>
      <p>{p.to}</p>
    </div>
  )
}

interface RatingHeadProps {
  from: string
  to: string
}

export default RatingHead
