const Card = ({title, image}) => {
  return (
    <article className="overflow-hidden relative rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img
        alt={title}
        src={image}
        className="h-56 w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

      <div className="absolute inset-y-32 p-4 sm:p-6">
        <p className="mt-8 text-2xl font-bold text-white">
          {title}
        </p>        
      </div>
    </article>
  )
}

export default Card