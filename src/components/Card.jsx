const Card = ({title, description, image}) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt="Office"
        src={image}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <h3 className="mt-0.5 text-xl text-black">
          {title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-900">
          {description}
        </p>
      </div>
    </article>
  )
}

export default Card