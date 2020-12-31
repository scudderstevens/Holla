import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a aria-label="Home">
          <img src="/assets/Holly-Trixie__profile.jpg" alt="Holly Tyson" width="100" height="100" />
          <h1>Holla Tyson</h1>
        </a>
      </Link>
    </header>
  )
}