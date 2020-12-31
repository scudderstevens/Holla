import DateFormatter from './date-formatter'
import PreviewCoverImage from './preview-cover-image'
import Link from 'next/link'

export default function PostPreview({
    title,
    coverImage,
    datePubished,
    dateModified,
    excerpt,
    author,
    slug,
    }) {
    return (
        <div id={`${slug}_preview`} className="post preview">
            <PreviewCoverImage title={title} src={coverImage} slug={slug} />
            <h3 className="text-3xl mb-3 leading-snug">
                <Link as={`/${slug}`} href="/[slug]">
                    <a className="hover:underline">{title}</a>
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormatter dateString={dateModified} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
    )
}