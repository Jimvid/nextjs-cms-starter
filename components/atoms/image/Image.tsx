import NextImage, { ImageProps } from "next/image"

const Image = (p: ImageProps) => {
  return (
    <div className={p.className}>
      <NextImage {...p} />
    </div>
  )
}

export default Image
