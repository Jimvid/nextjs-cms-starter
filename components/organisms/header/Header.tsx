import { useContext } from "react"
import { GlobalContext } from "pages/_app"
import { getStrapiMedia } from "lib/media"
import Image from "next/image"
import Link from "components/atoms/link/Link"
import Icon from "components/atoms/icon/Icon"

// Types
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
    <header>
      <nav>
        <a href="/">
          <Image src={getStrapiMedia(header.logotype)} height={32} width={32} />
        </a>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <a href={`tel:${header.phone}`}>
          <Icon icon="phone" />
        </a>
        <a href={`mailto:${header.mail}`}>
          <Icon icon="mail" />
        </a>
      </div>
    </header>
  )
}

export default Header
