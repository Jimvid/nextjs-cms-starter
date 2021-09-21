import React from "react"
import Link from "components/atoms/link/Link"
import Title from "components/atoms/title/Title"
import Image from "next/image"
import S from "./textSection.module.scss"
import { getStrapiMedia } from "lib/media"

const TextSection = ({ title, text, image, link }: Props) => (
  <section className={`section ${S.section}`}>
    <div className={S.section__content}>
      <Title size="h2">{title}</Title>
      <p>{text}</p>
      {link && <Link href={link.url}>{link.label}</Link>}
    </div>
    {image && (
      <Image
        className={S.section__content__image}
        src={getStrapiMedia(image)}
        width={image.width}
        height={image.height}
      />
    )}
  </section>
)

export interface Props {
  title: string
  text: string
  link: {
    label: string
    url: string
  }
  image: {
    url: string
    width: number
    height: number
  }
}

export default TextSection
