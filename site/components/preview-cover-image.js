import Link from 'next/link'

export default function PreviewCoverImage({ title, src, slug }) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${slug}`} href="/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}