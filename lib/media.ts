import { getStrapiURL } from "./api"

export interface Media {
  url: string
}

export function getStrapiMedia(media: Media) {
  if (!media?.url) return ""

  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}
