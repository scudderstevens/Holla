import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="grid-container-col mono_s085">
      <div className="grid-container-row grid__fixed-width">
        <div className="grid-container-col grid-1-3">
          <Link href="/">
            <a aria-label="Home">Holla Tyson</a>
          </Link>
        </div>
        <div className="grid-container-col grid-2-3">
            <p>here</p>
        </div>
      </div>
      <div className="grid-container-col mono_s090">
        <div className="grid-container-row grid__fixed-width">
          <p>and here</p>
        </div>
      </div>
    </footer>
  )
}