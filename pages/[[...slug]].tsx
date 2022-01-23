import { getCollectionType, notFound, fetchAPI } from "lib/api"
import { SeoDetails } from "components/shared/Seo"
import DynamicZone, { ComponentProps } from "components/shared/DynamicZone"
import Layout from "components/shared/Layout"

const DynamicBlock = ({ pageData }: Props) => {
  console.log(pageData.dynamicZone)

  return (
    <Layout seo={pageData.seo}>
      <DynamicZone components={pageData.dynamicZone} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const pages = await fetchAPI("/pages")
  const paths = pages.map((page: any) => ({
    params: { slug: [page.slug] },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: ParamsProps) {
  try {
    const query = Object.entries(params).length === 0 ? "" : params.slug[0]

    const data = getCollectionType("pages", query)
    const res = await fetch(data.data)
    const json = await res.json()

    if (!json.length) return notFound()
    const pageData = json[0]

    return { props: { pageData } }
  } catch (error) {
    console.log(error)
  }
}

interface ParamsProps {
  params: {
    slug: string
  }
}

interface Props {
  pageData: {
    seo: SeoDetails
    dynamicZone: ComponentProps[]
  }
}

export default DynamicBlock
