import React, { useState } from "react"
import Title from "components/atoms/title"
import Markdown from "react-markdown"
import S from "./accordion.module.scss"

const Accordion = ({ title, text }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false)

  const toggle = () => setIsActive((wasActive) => !wasActive)

  return (
    <div className={`${S.accordion} ${isActive ? S.active : ""}`}>
      <div className={S.head}>
        <Title className={S.title} size="h3">
          {title}
        </Title>
        <button className={S.button} onClick={toggle}>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={S.body}>
        <Markdown>{text}</Markdown>
      </div>
    </div>
  )
}

export interface AccordionProps {
  title: string
  text: string
}

export default Accordion
