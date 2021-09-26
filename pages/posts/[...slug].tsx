import { getPosts, notFound, getLocalizedParams, getStrapiMedia } from "lib/api"
import Title from "components/atoms/title/Title"
import Image from "next/image"
import Layout from "components/shared/Layout"
import { SeoDetails } from "components/shared/Seo"
import S from "./root.module.scss"

const DynamicBlock = ({ postData }: Props) => {
  const { title, shortText, longText, seo, image } = postData
  console.log(postData)

  return (
    <Layout seo={seo}>
      <section className="inner">
        <Title size="h2">{title}</Title>
        <p>{shortText}</p>
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
        <p>{longText}</p>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const { slug } = getLocalizedParams(context.query)
  console.log(slug)

  try {
    const data = getPosts(slug)

    const res = await fetch(data.data)
    const json = await res.json()

    if (!json.length) return notFound()
    const postData = json[0]
    console.log(postData)

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

export default DynamicBlock
