import PostPreview from './preview'

export default function MorePosts({ posts }) {
    return (
        <div className="grid-container-row">
            {posts.map((post) => (
                <PostPreview
                    key={post.slug}
                    title={post.title}
                    coverImage={post.coverImage}
                    datePubished={post.datePubished}
                    dateModified={post.dateModified}
                    author={post.author}
                    slug={post.slug}
                    excerpt={post.excerpt}
                />
            ))}
        </div>
    )
}