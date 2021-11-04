import React, { useState, useCallback } from "react"
import Title from "components/atoms/title"
import Image from "next/image"
import { getStrapiMedia } from "lib/media"

const Gallery = ({ imageCollections }: GalleryProps) => {
  const [page, setPage] = useState(0)
  const numberOfPages = imageCollections.length - 1

  const nextPage = () => {
    setPage((page) => (page !== numberOfPages ? page + 1 : page))
  }

  const previousPage = () => {
    setPage((page) => (page !== 0 ? page - 1 : page))
  }

  return (
    <section className="section">
      <header>
        <Title size="h2">{imageCollections[page].title}</Title>
        <button onClick={previousPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </header>
      {imageCollections[page].images.map((image) => (
        <Image
          key={image.id}
          src={getStrapiMedia(image)}
          width="100"
          height="50"
        />
      ))}
    </section>
  )
}

export default Gallery

export interface GalleryProps {
  id: string
  imageCollections: ImageCollections[]
}

export interface ImageCollections {
  id: string
  title: string
  images: Image[]
}

export interface Image {
  id: string
  url: string
  width: number
  height: number
}
