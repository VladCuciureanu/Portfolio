import { allPosts, Post } from "contentlayer/generated"
import Layout from "@/ui/shared/layout"
import Styles from "@/ui/shared/styles"
import styled from "styled-components"

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    if (a.creationDate === b.creationDate) return 0
    return a.creationDate < b.creationDate ? -1 : 1
  })
  return {
    props: {
      posts: posts,
    },
  }
}

export default function PostsPage({ posts }: { posts: Post[] }) {
  // Null safety
  posts = posts ? posts : []

  return (
    <Layout>
      <MainColumn>
        <Section>
          <Heading>Posts</Heading>
          <Subheading>TBD.</Subheading>
          <List></List>
        </Section>
      </MainColumn>
    </Layout>
  )
}

const Heading = Styles.Heading
const Subheading = Styles.Subheading
const Section = Styles.Section
const MainColumn = Styles.MainColumn

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
