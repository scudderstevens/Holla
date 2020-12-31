import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import HeroPost from '../components/preview-hero'
import MorePosts from '../components/preview-more'
import { getAllPosts } from '../lib/posts'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout>
      <Head>
        <title>Holla Tyson</title>
      </Head>
      <Container>
        <h2>Introduction</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.</p>
        <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.dateModified}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        {morePosts.length > 0 && <MorePosts posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'datePublished',
    'dateModified',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}