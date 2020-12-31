import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import CoverImage from '../components/cover-image'
import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import PostBody from '../components/post-body'
import { useRouter } from 'next/router'
import { getPostBySlug, getAllPosts } from '../lib/posts'
import { CMS_NAME } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <h1>404 Error</h1>
  }
  return (
      <Layout>
        <Head>
          <title>Holla Tyson | {post.title}</title>
        </Head>
        <Container>
          <CoverImage title={post.title} src={post.coverImage} />
          <h1>{post.title}</h1>
          <Avatar name={post.author.name} picture={post.author.picture} />
          <DateFormatter dateString={post.dateModified} />
          <p>Next.js Blog Example with {CMS_NAME}</p>
          <ul>
            <li>ogImage = {post.ogImage.url}</li>
            <li>coverImage = {post.coverImage}</li>
          </ul>
          <PostBody content={post.content} />
          <p>Next.js Blog Example with {CMS_NAME}</p>
        </Container>
      </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'datePubished',
    'dateModified',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
