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
        <div id={`${slug}_preview`} className="grid-container-col grid-1-3">
            <PreviewCoverImage title={title} src={"https://ik.imagekit.io/mp2mjn7fgdt/hollatyson/content/" + slug + "/tr:ar-4.854-3,w-750,f-webp/" + coverImage} slug={slug} />
            <h3>
                <Link as={`/${slug}`} href="/[slug]">
                    <a className="hover:underline">{title}</a>
                </Link>
            </h3>
            <div>
                <DateFormatter dateString={dateModified} />
            </div>
            <div className="grid-container-col">
            <p>{excerpt}</p>
                <Link as={`/${slug}`} href="/[slug]">
                    <a className="hover:underline">Read More</a>
                </Link>
            </div>
        </div>
    )
}