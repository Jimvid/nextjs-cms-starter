import { useContext, useState } from "react"
import { useRouter } from "next/router"
import { GlobalContext } from "pages/_app"
import { getStrapiMedia } from "lib/media"
import Image from "next/image"
import Link from "next/link"
import S from "./header.module.scss"

const Header = () => {
  const globalContext = useContext(GlobalContext) as HeaderProps
  const { header, menu } = globalContext
  const [isOpen, setIsOpen] = useState(false)

  // Ordering the menu links
  const menuLinks = menu.sort((a, b) => {
    return parseFloat(a.menuOrder) - parseFloat(b.menuOrder)
  })

  // Highlight link in menu if page is visited
  const highlightLink = (slug: any) => {
    const regex = new RegExp(`^${slug}$`)
    const hasMatch = useRouter().asPath.match(regex)

    return hasMatch && hasMatch[0] === slug && S.active_list__item
  }

  const isMenuOpen = () => {
    const hasVhProperty =
      document.documentElement.style.getPropertyValue("--vh")
    const screenWidth = window.innerWidth

    // Set vh css property if we are on smaller screens
    if (!hasVhProperty && screenWidth <= 1023) {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    // change state if we are on smaller screens
    if (screenWidth <= 1023) {
      return isOpen ? setIsOpen(false) : setIsOpen(true)
    }
  }

  return (
    <header className={`inner ${S.header}`}>
      <button className={S.hamburger} onClick={isMenuOpen}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${S.navbar} ${isOpen ? S.active : ""}`}>
        {/* Hamburger icon */}
        <Link href="/">
          <a className={S.image}>
            <Image
              src={getStrapiMedia(header.logotype) || "/site-logo.svg"}
              height={32}
              width={32}
            />
          </a>
        </Link>
        {/* Menu links */}
        <ul className={S.list}>
          {menuLinks?.map((m: MenuItem) => (
            <li
              key={m.slug}
              className={`underline ${S.list__item} ${highlightLink(m.slug)}`}
              onClick={isMenuOpen}
            >
              <Link href={`/${m.slug}`}>{m.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

//  types
interface HeaderProps {
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
