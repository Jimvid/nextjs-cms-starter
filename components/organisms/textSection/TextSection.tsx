import React from "react"
import Link from "components/atoms/link/Link"
import Title from "components/atoms/title/Title"
import Image from "next/image"
import S from "./textSection.module.scss"
import { getStrapiMedia } from "lib/media"
import Markdown from "react-markdown"

const TextSection = ({ title, text, image, link, reversed }: Props) => {
  const hasImage = image ? S.has__image : ""
  const isReversed = reversed ? S.reversed : ""

  return (
    <section className={`section ${isReversed} ${S.section} ${hasImage}`}>
      <div className={S.content}>
        <Title size="h2">{title}</Title>
        <Markdown>{text}</Markdown>
        {link && <Link href={link.url}>{link.label}</Link>}
      </div>
      {image && (
        <div className={`${S.imageWrapper} decorated-image`}>
          <Image
            src={getStrapiMedia(image)}
            width={image.width}
            height={image.height}
            objectFit="cover"
          />
        </div>
      )}
    </section>
  )
}

export interface Props {
  title: string
  text: string
  link: {
    label: string
    url: string
  }
  image?: {
    url: string
    width: number
    height: number
  }
  reversed: boolean
}

export default TextSection
