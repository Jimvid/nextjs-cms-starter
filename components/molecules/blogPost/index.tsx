import React from "react"
import { getStrapiMedia } from "lib/api"
import Image from "next/image"
import Link from "components/atoms/link"
import S from "./blogpost.module.scss"
import Markdown from "react-markdown"

const BlogPost = ({ title, shortText, image, slug }: Props) => {
  return (
    <article className={S.blogPost}>
      <div className={S.blogPostContent}>
        <h3 className={S.title}>{title}</h3>
        <Markdown className={S.text}>{shortText}</Markdown>
        <Link href={`/posts/${slug}`}>Läs mer</Link>
      </div>
      {image?.url && (
        <div className={S.imageWrapper}>
          <Image
            className={S.image}
            src={getStrapiMedia(image.url) || ""}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
    </article>
  )
}

export default BlogPost

export interface Props {
  id?: string
  title: string
  shortText: string
  slug: string
  image: {
    url: string
    width: number
    height: number
  }
}
