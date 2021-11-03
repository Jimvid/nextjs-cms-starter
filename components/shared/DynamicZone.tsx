import React, { Fragment } from "react"
import TextSection, { TextSectionProps } from "components/organisms/textSection"
import BlogPostList, {
  BlogPostListProps,
} from "components/organisms/blogPostList"
import AccordionList, {
  AccordionListProps,
} from "components/organisms/accordionList"
import CardList, { CardListProps } from "components/organisms/cardList"
import Contact, { ContactProps } from "components/organisms/contact"
// Check which component that should be rendered

const Dynamic = (p: Component) => {
  switch (p.__component) {
    case "organisms.text-image-section":
      return <TextSection {...p} />
    case "organisms.post-list":
      return <BlogPostList {...p} />
    case "organisms.card-list":
      return <CardList {...p} />
    case "organisms.contact":
      return <Contact {...p} />
    case "organisms.accordion-list":
      return <AccordionList {...p} />
    default:
      return null
  }
}

// Render the entire dynamic zone
const DynamicZone = ({ components }: Props) => (
  <Fragment>
    {components.map((component: Component) => {
      return (
        <Dynamic key={component.__component + component.id} {...component} />
      )
    })}
  </Fragment>
)

// Types
interface Props {
  components: any[]
}

// #TODO
// Implement a better solution then this
interface Component
  extends TextSectionProps,
    BlogPostListProps,
    CardListProps,
    AccordionListProps,
    ContactProps {
  id: string
  __component: string
}

export default DynamicZone
