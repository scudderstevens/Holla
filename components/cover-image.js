export default function CoverImage({ title, src }) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
    />
  )
  return (
    <div className="sm:mx-0">
      {image}
    </div>
  )
}