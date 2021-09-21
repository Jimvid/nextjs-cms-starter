import { getPosts, notFound, getLocalizedParams } from "lib/api"
import DynamicZone from "components/shared/DynamicZone"
import Layout from "components/shared/Layout"
import { SeoDetails } from "components/shared/Seo"

const DynamicBlock = ({ postData }: Props) => {
  const { seo } = postData

  return (
    <Layout seo={seo}>
      <div>dasd</div>
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
    dynamicZone: any[]
  }
}

export default DynamicBlock
