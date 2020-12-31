import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Holla Tyson | Coming Soon</title>
        <link rel="stylesheet" href="/assets/coming-soon.css" />
      </Head>
      <div className="coming-soon">
        <h2>coming soon</h2>
        <h1>HollaTyson.com</h1>
        <p>the future home of Holly's website</p>
      </div>
    </>
  )
}