import NextLink from "next/link"
import Icon from "components/atoms/icon/Icon"
import S from "./link.module.scss"

interface Props {
  href: string
  children: string
  icon?: string | boolean
}

const Link = ({ href, children, icon = true }: Props) => {
  return (
    <NextLink href={href}>
      <a className={S.link}>
        <div className={S.link__text}>{children}</div>
        <Icon className={S.link__icon} icon={icon} />
      </a>
    </NextLink>
  )
}

export default Link
