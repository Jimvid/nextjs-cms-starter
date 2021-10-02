import { fetchAPI, notFound } from "lib/api"
import BlogPostList, {
  Props as BlogPostListProps,
} from "components/organisms/blogPostList/BlogPostList"
import Layout from "components/shared/Layout"

const index = ({ posts }: BlogPostListProps) => {
  return (
    <Layout>
      <BlogPostList title={"Det senaste från Antikens"} posts={posts} />
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
