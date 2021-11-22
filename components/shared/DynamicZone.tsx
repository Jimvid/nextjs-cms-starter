import React, { Fragment } from "react"
import TextBlock, { TextBlockProps } from "components/organisms/textBlock"
import BlogPostList, {
  BlogPostListProps,
} from "components/organisms/blogPostList"
import AccordionList, {
  AccordionListProps,
} from "components/organisms/accordionList"
import CardList, { CardListProps } from "components/organisms/cardList"
import Contact, { ContactProps } from "components/organisms/contact"
import Gallery, { GalleryProps } from "components/organisms/gallery"
import FeaturedText, {
  FeaturedTextProps,
} from "components/organisms/featuredText"
import RatingList, { RatingListProps } from "components/organisms/ratingList"
// Check which component that should be rendered

const Dynamic = (p: Component) => {
  console.log(p.__component)

  switch (p.__component) {
    case "organisms.text":
      return <TextBlock {...p} />
    case "organisms.post-list":
      return <BlogPostList {...p} />
    case "organisms.card-list":
      return <CardList {...p} />
    case "organisms.contact":
      return <Contact {...p} />
    case "organisms.accordion-list":
      return <AccordionList {...p} />
    case "organisms.gallery":
      return <Gallery {...p} />
    case "organisms.featured-text":
      return <FeaturedText {...p} />
    case "organisms.rating":
      return <RatingList {...p} />
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
  extends TextBlockProps,
    BlogPostListProps,
    CardListProps,
    AccordionListProps,
    ContactProps,
    GalleryProps,
    FeaturedTextProps,
    RatingListProps {
  id: string
  __component: string
}

export default DynamicZone
