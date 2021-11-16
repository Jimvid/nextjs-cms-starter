import React from "react"
import S from "./overlay.module.scss"

const Overlay = (p: OverlayProps) => {
  return (
    <section className={S.overlay} onClick={p.handleClick}>
      {p.children}
    </section>
  )
}

interface OverlayProps {
  children: JSX.Element | JSX.Element[]
  handleClick: (e: React.MouseEvent) => void
}

export default Overlay
