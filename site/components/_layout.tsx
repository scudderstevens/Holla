import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Default Page Title | HollaTyson.com' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <h1>Holla Tyson</h1>
      <p>header here</p>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout

/*
Next.js Examples CMS Sanity Example Blog

Repo >> https://github.com/vercel/next.js/tree/canary/examples/cms-sanity
Preview >> https://next-blog-sanity.vercel.app/

import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}
*/
/*
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
*/