import React from "react"

export interface TitleProps {
  children: string
  size: string
  className?: string
}

export const Title = ({ children, size, className }: TitleProps) => {
  if (!children) return null

  const titleElement = React.createElement(size, { className }, children)

  return titleElement
}

export default Title
