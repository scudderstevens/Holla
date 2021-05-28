import Avatar from './avatar'
import DateFormatter from './date-formatter'
import PreviewCoverImage from './preview-cover-image'
import Link from 'next/link'

export default function HeroPost({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    }) {
    return (
        <div id={`${slug}_preview`} className="grid-container-col">
            <div className="grid-container-col">
                <PreviewCoverImage title={title} src={"https://ik.imagekit.io/mp2mjn7fgdt/hollatyson/content/" + slug + "/tr:ar-4.854-3,w-1500,f-webp/" + coverImage} slug={slug} />
                <Avatar name={author.name} picture={"https://ik.imagekit.io/mp2mjn7fgdt/hollatyson/theme/tr:ar-1-1,w-300/" + author.picture } />
            </div>
            <div className="grid-container-col">
                <h3>
                    <Link as={`/${slug}`} href="/[slug]">
                        <a className="hover:underline">{title}</a>
                    </Link>
                </h3>
                <div>
                    <DateFormatter dateString={date} />
                </div>
                <div className="grid-container-col">
                    <p>{excerpt}</p>
                    <Link as={`/${slug}`} href="/[slug]">
                        <a className="hover:underline">Read More</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}