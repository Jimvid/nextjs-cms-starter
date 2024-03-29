import React from "react"
import Link from "components/atoms/link"
import Title from "components/atoms/title"
import Image from "components/atoms/image"
import S from "./textBlock.module.scss"
import { getStrapiMedia } from "lib/media"
import Markdown from "react-markdown"

const TextBlock = ({
  title,
  text,
  media,
  link,
  reversed,
  wide,
}: TextBlockProps) => {
  const hasImage = media?.image ? S.has__image : ""
  const isReversed = reversed ? S.reversed : ""
  const hasWideImage = wide ? S.wideImage : ""

  return (
    <section
      className={`section ${isReversed} ${S.section} ${hasImage} ${hasWideImage}`}
    >
      <div className={S.content}>
        <Title size="h2">{title}</Title>
        <Markdown>{text}</Markdown>
        {link && <Link href={link.url}>{link.label}</Link>}
      </div>
      {media?.image && (
        <div className="decorated-image">
          <Image
            className={S.image}
            src={getStrapiMedia(media.image)}
            width={media.image.width}
            height={media.image.height}
            objectFit="cover"
            objectPosition={media.alignment}
            aspectratio={media.aspectRatio}
          />
        </div>
      )}
    </section>
  )
}

export interface TextBlockProps {
  title: string
  text: string
  link: {
    label: string
    url: string
  }
  media: {
    image: {
      url: string
      width: number
      height: number
    }
    alignment: string
    aspectRatio: string
  }
  reversed: boolean
  wide: boolean
}

export default TextBlock
