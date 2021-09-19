import { useContext } from "react"
import { GlobalContext } from "pages/_app"
import { getStrapiMedia } from "lib/media"
import Image from "next/image"
import Link from "next/link"
import S from "./header.module.scss"

const Header = () => {
  const globalContext = useContext(GlobalContext) as Props
  const { header, menu } = globalContext
  console.log(menu)

  const menuLinks = menu.sort(
    (a, b) => parseFloat(a.menuOrder) - parseFloat(b.menuOrder)
  )

  console.log(menu)
  console.log(menuLinks)

  return (
    <header className={`inner section ${S.header}`}>
      <nav className={S.navbar}>
        <Link href="/">
          <a className={S.navbar__logotype}>
            <Image
              src={getStrapiMedia(header.logotype)}
              height={32}
              width={32}
            />
          </a>
        </Link>
        <ul className={S.navbar__list}>
          {menu.map((m: MenuItem) => (
            <li key={m.slug} className={S.navbar__list__item}>
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
