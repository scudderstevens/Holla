import Head from 'next/head'
import Layout from '../../../components/layout'
import Container from '../../../components/container'
import CoverImage from '../../../components/cover-image'
import Avatar from '../../../components/avatar'
import DateFormatter from '../../../components/date-formatter'
import PostBody from '../../../components/post-body'
import { useRouter } from 'next/router'
import { getPostBySlug, getAllPosts } from '../../../lib/posts'
import { SITE } from '../../../lib/constants'
import markdownToHtml from '../../../lib/markdownToHtml'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <h1>404 Error</h1>
  }
  return (
      <Layout className="main ht">
        <Head>
          <title>Holla Tyson | {post.title}</title>
          <meta property="og:title" content={post.title} />
          <meta property="og:site_name" content={SITE} />
          <meta property="og:description" content={post.ogDescription} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={"https://hollatyson.com/" + post.slug} />
          <meta property="og:image" content={"https://ik.imagekit.io/mp2mjn7fgdt/hollatyson/content/" + post.slug + "/tr:ar-4.854-3,w-750,f-webp/" + post.ogImage} />
          <link rel="stylesheet" type="text/css" media="all" href="https://latest.cdn-sty.link/css/main.min.css" />
        </Head>
        <Container>
          <CoverImage title={post.title} src={"https://ik.imagekit.io/mp2mjn7fgdt/hollatyson/content/" + post.slug + "/tr:ar-4.854-3,w-2500,f-webp/" + post.coverImage} />
          <Avatar name={post.author.name} picture={"https://ik.imagekit.io/mp2mjn7fgdt/hollatyson/theme/tr:ar-1-1,w-300/" + post.author.picture} />
          <h1>{post.title}</h1>
          <DateFormatter dateString={post.dateModified} />
          <PostBody content={post.content} />
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
    'ogDescription',
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
