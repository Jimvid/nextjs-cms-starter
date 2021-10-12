import React from "react"
import Link from "components/atoms/link/Link"
import Title from "components/atoms/title/Title"
import Image from "next/image"
import S from "./textSection.module.scss"
import { getStrapiMedia } from "lib/media"
import Markdown from "react-markdown"

const TextSection = ({ title, text, image, link }: Props) => {
  const hasImage = image ? S.has__image : ""

  return (
    <section className={`section ${S.section} ${hasImage}`}>
      <div className={S.content}>
        <Title className={S.title} size="h2">
          {title}
        </Title>
        <Markdown>{text}</Markdown>
        {link && <Link href={link.url}>{link.label}</Link>}
      </div>
      {image && (
        <div className={S.imageWrapper}>
          <Image src={getStrapiMedia(image)} layout="fill" objectFit="cover" />
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
}

export default TextSection
