import { fetchAPI, notFound } from "lib/api"
import BlogPostList, {
  BlogPostListProps,
} from "components/organisms/blogPostList"
import Layout from "components/shared/Layout"

const index = ({ posts }: BlogPostListProps) => {
  return (
    <Layout>
      <BlogPostList
        title={"Det senaste från Antikens"}
        text={""}
        posts={posts}
      />
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const posts = await fetchAPI("/posts")
    if (!Array.isArray(posts)) return notFound()

    return { props: { posts } }
  } catch (error) {
    console.log(error)
  }
}

export default index
