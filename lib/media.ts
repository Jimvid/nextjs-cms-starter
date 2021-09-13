import { getStrapiURL } from "./api"

interface Media {
  url: string
}

export function getStrapiMedia(media: Media) {
  if (!media?.url) return ""

  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}
