import { useContext } from "react"
import { GlobalContext } from "pages/_app"
import { getStrapiMedia } from "lib/media"
import Image from "next/image"
import Link from "next/link"
import Title from "components/atoms/title/Title"
import S from "./footer.module.scss"

const Footer = () => {
  const globalContext = useContext(GlobalContext) as Props
  const { footer, menu } = globalContext
  const { logotype, title, text } = footer

  // Ordering the menu links
  const menuLinks = menu.sort((a, b) => {
    return parseFloat(a.menuOrder) - parseFloat(b.menuOrder)
  })

  return (
    <footer className={S.footer}>
      <div className="inner">
        <Image
          className={S.image}
          src={getStrapiMedia(logotype) || "/site-logo-white.svg"}
          width={32}
          height={32}
        />
        <Title className={S.title} size="h5">
          {title}
        </Title>
        <p className={`body-small ${S.text}`}>{text}</p>
        <ul className={S.list}>
          {menuLinks.map((m: MenuItem) => (
            <li key={m.slug} className={S.list__item}>
              <Link href={m.slug}>{m.title}</Link>
            </li>
          ))}
        </ul>
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
  menu: MenuItem[]
}

interface MenuItem {
  slug: string
  title: string
  menuOrder: string
}

export default Footer
