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
    <footer className="bg-black text-white pt-6 pb-6">
      <div className="max-w-wrapper m-auto">
        <Image src={getStrapiMedia(logotype)} width={32} height={32} />
        <Title className="mb-0 mt-0" size="h5">
          {title}
        </Title>
        <p>{text}</p>
      </div>
    </footer>
  )
}

export default Footer
