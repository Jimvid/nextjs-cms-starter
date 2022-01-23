import React, { useState, useEffect } from "react"

export const Title = ({ children, size, className }: Props) => {
  if (!children) return null
  const [generatedID, setGeneratedId] = useState("")

  if (!children) return null

  useEffect(() => {
    const EXCLUDED_CHARS = ["!", "?", "å", "ä", "ö", " "]
    const REPLACED_CHARS = ["", "", "a", "a", "o", "-"]

    // Split title into array
    const titleArr = Array.from(children.toLowerCase().trim())

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

  // Make sure scroll animation for id linds
  // between page transitions
  useEffect(() => {
    const path = window.location.hash
    if (path && path.includes("#")) {
      // SetTimeout to push it to the end of the event loop
      setTimeout(() => {
        const id = path.replace("#", "")
        const el = window.document.getElementById(id)
        const boundingClientRect = el && el.getBoundingClientRect()

        if (boundingClientRect) {
          window.scrollTo({
            top: scrollY + boundingClientRect.top,
            behavior: "smooth",
          })
        }
      })
    }
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
