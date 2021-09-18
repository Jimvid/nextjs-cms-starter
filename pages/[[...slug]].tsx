import { getData, notFound, getLocalizedParams } from "lib/api"
import DynamicZone from "components/shared/DynamicZone"
import Layout from "components/shared/Layout"

const DynamicBlock = ({ pageData }: any) => {
  return (
    <Layout seo={pageData.seo}>
      <DynamicZone components={pageData.dynamicZone} />
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const { slug } = getLocalizedParams(context.query)

  try {
    const data = getData(slug)
    const res = await fetch(data.data)
    const json = await res.json()

    if (!json.length) return notFound()
    const pageData = json[0]

    return { props: { pageData } }
  } catch (error) {
    console.log(error)
  }
}

export default DynamicBlock
