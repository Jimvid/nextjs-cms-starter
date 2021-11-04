import React from "react"
import Accordion, { AccordionProps } from "components/molecules/accordion"
import S from "./accordionList.module.scss"

const AccordionList = ({ accordions }: AccordionListProps) => {
  return (
    <section className={`section ${S.accordionList}`}>
      {accordions.map((accordion: AccordionProps) => (
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
  accordions: AccordionProps[]
}

export default AccordionList
