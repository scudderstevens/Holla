export default function CoverImage({ title, src }) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      width="100%"
      height="auto"
    />
  )
  return (
    image
  )
}