import React from "react"

export const Title = ({ children, size, className }: Props) => {
  if (!children) return null

  const titleElement = React.createElement(size, { className }, children)

  return titleElement
}

export interface Props {
  children: string
  size: string
  className?: string
}

export default Title
