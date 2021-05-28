import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import HeroPost from '../components/preview-hero'
import MorePosts from '../components/preview-more'
import { SITE } from '../lib/constants'
import { TAGLINE } from '../lib/constants'
import { DESCRIPTION } from '../lib/constants'
import { HOMEHERO } from '../lib/constants'
import { getAllPosts } from '../lib/posts'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout>
      <Head>
        <title>Holla Tyson | {TAGLINE}</title>
        <meta property="og:title" content={TAGLINE} />
        <meta property="og:site_name" content={SITE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://hollatyson.com/" />
        <meta property="og:image" content={"https://ik.imagekit.io/mp2mjn7fgdt/hollatyson/theme/tr:ar-4.854-3,w-750,f-webp/" + HOMEHERO} />
        <link rel="stylesheet" type="text/css" media="all" href="https://latest.cdn-sty.link/css/main.min.css" />
      </Head>
      <Container>
        <div className="grid-container-row">
          <div className="grid-container-col grid__fixed-width">
            <h1>Holla Tyson</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.</p>
          </div>
        </div>

          <div className="grid-container-col grid__fixed-width">
            
            <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.dateModified}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            {morePosts.length > 0 && <MorePosts posts={morePosts} />}
            </div>
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