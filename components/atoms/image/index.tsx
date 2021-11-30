import React from "react"
import NextImage, { ImageProps } from "next/image"
import S from "./image.module.scss"

const Image = (p: Image) => {
  const mapAspectRatop: { [key: string]: string } = {
    landscape: S.landscape,
    portrait: S.portrait,
    square: S.square,
  }

  return (
    <div
      className={`${S.image} ${p.className} ${
        mapAspectRatop[p.aspectratio || ""]
      }`}
    >
      <NextImage {...p} />
    </div>
  )
}

interface Image extends ImageProps {
  className?: string
  aspectratio?: string
}

Image.defaultProps = {
  className: "",
}

export default Image
