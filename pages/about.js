import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Holla Tyson | About</title>
      </Head>
      <Container>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.</p>
      </Container>
    </Layout>
  )
}