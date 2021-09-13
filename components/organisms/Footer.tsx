import { useContext } from "react"
import { GlobalContext } from "pages/_app"
import { getStrapiMedia } from "lib/media"
import Image from "next/image"
import Title from "components/atoms/title/Title"

interface Props {
  footer: {
    title: string
    text: string
    logotype: {}
  }
}

const Footer = () => {
  const globalContext = useContext(GlobalContext) as Props
  const {
    footer: { logotype, title, text },
  } = globalContext
  console.log(text)

  return (
    <footer>
      <div>
        <Image src={getStrapiMedia(logotype)} width={32} height={32} />
        <Title size="h5">{title}</Title>
        <p>{text}</p>
      </div>
    </footer>
  )
}

export default Footer
