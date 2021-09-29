import { useContext } from "react"
import { GlobalContext } from "pages/_app"
import { getStrapiMedia } from "lib/media"
import Image from "next/image"
import Link from "next/link"
import S from "./header.module.scss"

const Header = () => {
  const globalContext = useContext(GlobalContext) as Props
  const { header, menu } = globalContext

  // Ordering the menu links
  const menuLinks = menu.sort((a, b) => {
    return parseFloat(a.menuOrder) - parseFloat(b.menuOrder)
  })

  return (
    <header className={`inner section ${S.header}`}>
      <nav className={S.navbar}>
        <Link href="/">
          <a className={S.image}>
            <Image
              src={getStrapiMedia(header.logotype) || "/site-logo.svg"}
              height={32}
              width={32}
            />
          </a>
        </Link>
        <ul className={S.list}>
          {menuLinks.map((m: MenuItem) => (
            <li key={m.slug} className={S.list__item}>
              <Link href={m.slug}>{m.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

//  types
interface Props {
  header: {
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

export default Header
