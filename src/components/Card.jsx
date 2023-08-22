const Card = ({title, description, image}) => {
  return (
    <article className="overflow-hidden rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img
        alt={title}
        src={image}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <h3 className="mt-0.5 text-xl font-bold text-black">
          {title}
        </h3>

        <p className="mt-2 line-clamp-3 text-base/relaxed text-gray-900">
          {description}
        </p>
      </div>
    </article>
  )
}

export default Card