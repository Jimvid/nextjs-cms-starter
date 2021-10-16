import { useContext } from "react"
import { GlobalContext } from "pages/_app"
import { getStrapiMedia } from "lib/media"
import Image from "next/image"
import Title from "components/atoms/title/Title"
import S from "./footer.module.scss"

const Footer = () => {
  const globalContext = useContext(GlobalContext) as Props
  const { footer } = globalContext
  const { logotype, title, text } = footer

  return (
    <footer className={S.footer}>
      <div className="inner">
        <div className={S.image}>
          <Image
            src={getStrapiMedia(logotype) || "/site-logo-white.svg"}
            width={32}
            height={32}
          />
        </div>
        <Title className={S.title} size="h5">
          {title}
        </Title>
        <p className={`body-small ${S.text}`}>{text}</p>
      </div>
    </footer>
  )
}

// Types
interface Props {
  footer: {
    title: string
    text: string
    logotype: {
      url: string
    }
  }
}

export default Footer
