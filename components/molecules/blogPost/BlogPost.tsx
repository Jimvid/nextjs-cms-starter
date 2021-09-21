import React from "react"
import { getStrapiMedia } from "lib/api"
import Image from "next/image"
import Link from "components/atoms/link/Link"
import S from "./blogpost.module.scss"

const BlogPost = ({ title, shortText, image, slug }: Props) => {
  return (
    <article className={S.blogPost}>
      <div className={S.blogPostContent}>
        <h3 className={S.title}>{title}</h3>
        <p className={S.text}>{shortText}</p>
        <Link href={`/posts${slug}`}>Läs mer</Link>
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
  title: string
  shortText: string
  slug: string
  image: {
    url: string
    width: number
    height: number
  }
}
