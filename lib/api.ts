// Types
interface Query {
  slug: string
  lang: string
}

// Functions

export const getStrapiURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

// Helper to make GET requests to Strapi
export const fetchAPI = async (path: string) => {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)

  const data = await response.json()
  return data
}

// This function will get the url of your medias depending on where they are hosted
export const getStrapiMedia = (url: string) => {
  if (url == null) {
    return null
  }
  if (url.startsWith("http") || url.startsWith("//")) {
    return url
  }
  return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${url}`
}

// handle the redirection to the homepage if the page we are browsinng doesn't exists
export const notFound = () => {
  return {
    redirect: {
      destination: `/404`,
      permanent: false,
    },
  }
}

export const getLocalizedParams = (query: Query) => {
  return { slug: query.slug || "", locale: query.lang || "en" }
}

// Build the url to fetch collection type from the Strapi API
export const getCollectionType = (collectionType: string, slug: string) => {
  const slugToReturn = `/${slug}`
  const apiUrl = `/${collectionType}?slug=${slug}`

  return {
    data: getStrapiURL(apiUrl),
    slug: slugToReturn,
  }
}
