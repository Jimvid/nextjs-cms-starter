import React from "react"
import { getStrapiMedia } from "lib/media"
import Title from "components/atoms/title"
import Image from "next/image"
import Icon from "components/atoms/icon"
import S from "./contact.module.scss"

const Contact = ({ title, name, phone, email, image }: ContactProps) => {
  return (
    <section className="section">
      <Title size="h2">{title}</Title>
      <div className={S.contact}>
        {image && (
          <Image
            className={S.image}
            src={getStrapiMedia(image)}
            width={120}
            height={120}
            objectFit="cover"
          />
        )}
        <div className={S.info}>
          <Title size="h3">{name}</Title>
          <div className={S.link}>
            <Icon icon="phone" />
            <a className="underline" href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
          <div className={S.link}>
            <Icon icon="mail" />
            <a className="underline" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export interface ContactProps {
  title: string
  name: string
  phone: string
  email: string
  image?: {
    url: string
    width: number
    height: number
  }
}

export default Contact
