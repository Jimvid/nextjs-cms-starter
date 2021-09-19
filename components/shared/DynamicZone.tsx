import React, { Fragment } from "react"
import TextSection, {
  Props as TextSectionProps,
} from "components/organisms/textSection/TextSection"

// Check which component that should be rendered
const Dynamic = (p: Component) => {
  switch (p.__component) {
    case "organisms.text-image-section":
      return <TextSection {...p} />

    default:
      return null
  }
}

// Render the entire dynamic zone
const DynamicZone = ({ components }: Props) => (
  <Fragment>
    {components.map((component: Component) => {
      return <Dynamic key={component.id} {...component} />
    })}
  </Fragment>
)

// Types
interface Props {
  components: any[]
}

interface Component extends TextSectionProps {
  id: string
  __component: string
}

export default DynamicZone
