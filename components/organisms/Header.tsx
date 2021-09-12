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
    <header className="max-w-wrapper m-auto p-1 mt-1 flex items-center justify-between">
      <nav className="flex">
        <a href="/" className="flex">
          <Image src={getStrapiMedia(header.logotype)} height={32} width={32} />
        </a>
        <ul className="flex">
          <li className="mr-2 flex"></li>
          <li className="mr-2 flex">
            <Link href="/Link">Menu item 1</Link>
          </li>
          <li className="mr-2 flex">
            <Link href="/Link">Menu item 2</Link>
          </li>
          <li className="mr-2 flex">
            <Link href="/Link">Menu item 3</Link>
          </li>
        </ul>
      </nav>
      <div className="flex">
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
