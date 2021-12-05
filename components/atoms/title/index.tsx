import React, { useState, useEffect } from "react"

export const Title = ({ children, size, className }: Props) => {
  if (!children) return null
  const [generatedID, setGeneratedId] = useState("")

  useEffect(() => {
    const EXCLUDED_CHARS = ["!", "?", "å", "ä", "ö", " "]
    const REPLACED_CHARS = ["", "", "a", "a", "o", "-"]

    // Split title into array
    const titleArr = Array.from(children.toLowerCase())

    // Loop through the string and replace EXCLUDED with REPLACED
    for (let i = 0; i < EXCLUDED_CHARS.length; i++) {
      for (let j = 0; j < titleArr.length; j++) {
        if (titleArr[j] === EXCLUDED_CHARS[i]) {
          titleArr[j] = REPLACED_CHARS[i]
        }
      }
    }

    // Join array and set ID in state
    const id = titleArr.join("")
    setGeneratedId(id)
  }, [])

  const titleElement = React.createElement(
    size,
    { className, id: generatedID },
    children
  )

  return titleElement
}

export interface Props {
  children: string
  size: string
  className?: string
}

export default Title
