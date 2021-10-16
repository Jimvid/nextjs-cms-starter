import React, { Fragment } from "react"
import TextSection, {
  Props as TextSectionProps,
} from "components/organisms/textSection/TextSection"
import BlogPostList, {
  Props as BlogPostListProps,
} from "components/organisms/blogPostList/BlogPostList"
import CardList, { Props as CardListProps } from "components/organisms/cardList"
import Contact, { ContactProps } from "components/organisms/contact"
// Check which component that should be rendered
const Dynamic = (p: Component) => {
  console.log(p)

  switch (p.__component) {
    case "organisms.text-image-section":
      return <TextSection {...p} />
    case "organisms.post-list":
      return <BlogPostList {...p} />
    case "organisms.card-list":
      return <CardList {...p} />
    case "organisms.contact":
      return <Contact {...p} />
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

// TODO: This error needs to be looked into
interface Component
  extends TextSectionProps,
    BlogPostListProps,
    CardListProps,
    ContactProps {
  id: string
  __component: string
}

export default DynamicZone
