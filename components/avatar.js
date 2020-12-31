import Link from 'next/link'

export default function Avatar({ name, picture }) {
    return (
      <div className="avatar">
        <Link href="/about">
          <a rel="author" aria-label="About">
            <img src={picture} className="avatar picture" alt={name} width="100" height="100" />
            <span className="avatar name">{name}</span>
          </a>
        </Link>
    </div>
    )
  }