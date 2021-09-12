import type { NextPage } from "next"
import Layout from "layout/Layout"
import { fetchAPI } from "lib/api"

const Home: NextPage = ({ homePage }: any) => {
  const { seo } = homePage

  return (
    <Layout pageTitle="Homepage" seo={seo}>
      <p>Home page</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const homePage = await fetchAPI(`/home-page`)

  return {
    props: { homePage },
    revalidate: 1,
  }
}

export default Home
