import NextLink from "next/link"
import Icon from "components/atoms/icon"
import S from "./link.module.scss"

const Link = ({ href, children, icon = true }: Props) => {
  return (
    <NextLink href={href}>
      <a className={S.link}>
        <div className={S.text}>{children}</div>
        <Icon className={S.icon} icon={icon} />
      </a>
    </NextLink>
  )
}

interface Props {
  href: string
  children: string
  icon?: string | boolean
}

export default Link
