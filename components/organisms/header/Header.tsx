import { useContext } from "react"
import { GlobalContext } from "pages/_app"
import { getStrapiMedia } from "lib/media"
import Image from "next/image"
import Link from "next/link"
import S from "./header.module.scss"

//  types
interface Props {
  header: {
    mail: string
    phone: string
    logotype: {
      url: string
    }
  }
}

const Header = () => {
  const globalContext = useContext(GlobalContext) as Props
  const { header } = globalContext

  return (
    <header className={`inner section ${S.header}`}>
      <nav className={S.navbar}>
        <a className={S.navbar__logotype} href="/">
          <Image src={getStrapiMedia(header.logotype)} height={32} width={32} />
        </a>
        <ul className={S.navbar__list}>
          <li className={S.navbar__list__item}>
            <Link href="/">Home</Link>
          </li>
          <li className={S.navbar__list__item}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
