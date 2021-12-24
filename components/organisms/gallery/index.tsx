import React, { useState, useCallback } from "react"
import { ImageProps } from "types/global"
import Modal from "components/molecules/modal"
import Title from "components/atoms/title"
import Image from "components/atoms/image"
import NextImage from "next/image"
import S from "./gallery.module.scss"

const Gallery = ({ imageCollections }: GalleryProps) => {
  const [page, setPage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [modalImage, setModalImage] = useState<ImageProps | null>(null)
  const numberOfPages = imageCollections.length - 1

  const nextPage = useCallback(() => {
    setPage((page) => (page !== numberOfPages ? page + 1 : page))
  }, [page])

  const prevPage = useCallback(() => {
    setPage((page) => (page !== 0 ? page - 1 : page))
  }, [page])

  const openModal = useCallback(
    (image: ImageProps) => {
      setModalImage(image)
      setIsOpen(true)
    },
    [isOpen, modalImage]
  )

  const closeModal = useCallback(() => setIsOpen(false), [isOpen])

  return (
    <section className="section">
      {imageCollections.length > 1 && (
        <header className={S.head}>
          <Title className={S.title} size="h2">
            {imageCollections[page].title}
          </Title>
          <div className={S.buttonContainer}>
            <button className={`${S.previous} ${S.button}`} onClick={prevPage}>
              <Image src="/triangle.svg" height={30} width={30} />
            </button>
            <button className={`${(S.next, S.button)}`} onClick={nextPage}>
              <Image src="/triangle.svg" height={30} width={30} />
            </button>
          </div>
        </header>
      )}
      <div className={S.imageCollection}>
        {imageCollections[page].images.map((image) => (
          <div className={`${S.imageContainer} elevate-2`}>
            <Image
              key={image.id}
              onClick={() => openModal(image)}
              className={S.image}
              src={image.formats.medium.url}
              layout="fill"
              objectFit="cover"
              sizes="33vw"
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={"title"}
        closeDialogLabel={"closeDialogLabel"}
      >
        {modalImage ? (
          <Image
            className={S.modalContent}
            src={modalImage.formats.large.url}
            layout="responsive"
            width={modalImage.width}
            height={modalImage.height}
            objectFit="contain"
            sizes="33vw"
          />
        ) : (
          <p></p>
        )}
      </Modal>
    </section>
  )
}

export default Gallery

export interface GalleryProps {
  id: string
  imageCollections: ImageCollection[]
}

export interface ImageCollection {
  id: string
  title: string
  images: ImageProps[]
}
