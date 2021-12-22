import Markdown from "react-markdown"
import {
  getCollectionType,
  notFound,
  getLocalizedParams,
  getStrapiMedia,
  fetchAPI,
} from "lib/api"
import Title from "components/atoms/title"
import Image from "next/image"
import Layout from "components/shared/Layout"
import { SeoDetails } from "components/shared/Seo"
import S from "./root.module.scss"

const DynamicBlock = ({ postData }: Props) => {
  const { title, shortText, longText, seo, image } = postData

  return (
    <Layout seo={seo}>
      <section className="inner">
        <Title size="h2">{title}</Title>
        <Markdown>{shortText}</Markdown>
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
        <Markdown>{longText}</Markdown>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await fetchAPI("/posts")
  const paths = posts.map((post: any) => ({
    params: { slug: [post.slug] },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: ParamsProps) {
  const query = Object.entries(params).length === 0 ? "" : params.slug[0]

  try {
    const data = getCollectionType("posts", query)
    const res = await fetch(data.data)
    const json = await res.json()

    if (!json.length) return notFound()
    const postData = json[0]

    return { props: { postData } }
  } catch (error) {
    console.log(error)
  }
  return { props: {} }
}

interface Props {
  postData: {
    seo: SeoDetails
    title: string
    shortText: string
    longText: string
    image: {
      url: string
      width: number
      height: number
    }
  }
}

interface ParamsProps {
  params: {
    slug: string
  }
}

export default DynamicBlock
