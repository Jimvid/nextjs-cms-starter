import { fetchAPI, getData, notFound, getLocalizedParams } from "lib/api"
import Layout from "layout/Layout"

const Universals = ({ pageData }: any) => {
  return (
    <Layout seo={pageData.seo}>
      <div>{pageData.title}</div>
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

export default Universals
