import React from "react"
import Divider from "components/atoms/divider/Divider"
import Title from "components/atoms/title/Title"
import BlogPost, {
  Props as BlogPostProps,
} from "components/molecules/blogPost/BlogPost"
import S from "./blogPostList.module.scss"

const BlogPostList = ({ title, text, posts }: BlogPostListProps) => {
  // TODO: If posts is empty fetch all posts
  return (
    <section>
      <div className={S.sectionIntro}>
        <Title size="h2">{title}</Title>
        {text && <p>{text}</p>}
      </div>
      <ul>
        {posts.map((post: BlogPostProps, index) => (
          <li key={`blog-post-${index}`}>
            <BlogPost {...post} />
            <Divider />
          </li>
        ))}
      </ul>
    </section>
  )
}

export interface BlogPostListProps {
  title: string
  text: string
  posts: BlogPostProps[]
}

export default BlogPostList
