import React from "react"
import S from "./ratingBar.module.scss"

const RatingBar = (p: RatingBarProps) => {
  const indicators = Array.from(Array(5).keys()).map((i) => (
    <span
      key={i}
      className={`${S.blob} ${i + 1 <= p.rating ? S.active : ""}`}
    ></span>
  ))

  return <div className={S.rating__bar}>{indicators}</div>
}

interface RatingBarProps {
  rating: number
}
export default RatingBar
