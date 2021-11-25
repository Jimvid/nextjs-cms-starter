import React from "react"
import Accordion, { AccordionProps } from "components/molecules/accordion"
import Title from "components/atoms/title"
import Markdown from "react-markdown"
import S from "./accordionList.module.scss"

const AccordionList = (p: AccordionListProps) => {
  return (
    <section className={`section ${S.accordionList}`}>
      <div>
        <Title size="h2">{p.title}</Title>
        <Markdown>{p.text}</Markdown>
      </div>
      {p.accordions.map((accordion: AccordionProps) => (
        <Accordion
          key={accordion.title}
          title={accordion.title}
          text={accordion.text}
        />
      ))}
    </section>
  )
}

export interface AccordionListProps {
  title: string
  text: string
  accordions: AccordionProps[]
}

export default AccordionList
