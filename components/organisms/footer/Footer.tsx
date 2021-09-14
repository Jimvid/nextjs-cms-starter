import { useContext } from "react"
import { GlobalContext } from "pages/_app"
import { getStrapiMedia } from "lib/media"
import Image from "components/atoms/image/Image"
import Title from "components/atoms/title/Title"
import S from "./footer.module.scss"

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

const Footer = () => {
  const globalContext = useContext(GlobalContext) as Props
  const {
    footer: { logotype, title, text },
  } = globalContext

  return (
    <footer className={S.footer}>
      <div className="inner">
        <Image
          className={S.footer__image}
          src={getStrapiMedia(logotype)}
          width={32}
          height={32}
        />
        <Title className={S.footer__title} size="h5">
          {title}
        </Title>
        <p className={S.footer__text}>{text}</p>
      </div>
    </footer>
  )
}

export default Footer
