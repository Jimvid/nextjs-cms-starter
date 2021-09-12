import NextLink from "next/link"
import Icon from "components/atoms/icon/Icon"

interface Props {
  href: string
  children: string
  icon?: string | boolean
}

const Link = ({ href, children, icon = false }: Props) => {
  return (
    <div className="flex items-center">
      <NextLink href={href}>{children}</NextLink>
      {icon && <Icon className="ml-2" icon={icon} />}
    </div>
  )
}

export default Link
