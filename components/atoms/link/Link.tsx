import NextLink from "next/link"
import Icon from "components/atoms/icon/Icon"

interface Props {
  href: string
  children: string
  icon?: string | boolean
}

const Link = ({ href, children, icon = false }: Props) => {
  return (
    <div>
      <NextLink href={href}>{children}</NextLink>
      {icon && <Icon icon={icon} />}
    </div>
  )
}

export default Link
