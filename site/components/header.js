import Link from 'next/link'

export default function Header() {
  return (
    <header className="grid-container-col">
      <div className="grid-container-row grid__fixed-width">
        <div className="grid-container-col grid-1-6">
          <Link href="/" >
            <a aria-label="Home">
              <img src="/assets/Holly-Trixie__profile.jpg" alt="Holly Tyson" width="100" height="100" />
            </a>
          </Link>
        </div>
        <div className="grid-container-col grid-5-6">
          <div>additional links here.</div>
        </div>
      </div>
    </header>
  )
}