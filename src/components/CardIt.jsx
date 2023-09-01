const CardIt = ({ name, price, photo, user, userImage, duration }) => {
    return (
        <article className="bg-white border rounded-lg text-center hover:shadow-xl align-center">

            <img
                src={photo}
                className="rounded-t-lg h-56 w-full object-cover" />

            <div className="flex justify-center">
                <img
                    src={userImage}
                    className="rounded-full object-center border-4 border-white -mt-16 shadow-xl w-24 h-24 object-cover" />
            </div>

            <p className="font-semibold p-2 text-sm text-gray-500"> by <span className="text-blue-700"> {user} </span></p>

            <p className="px-10 text-xl font-semibold pt-1 pb-2"> {name} </p>
            <p className="px-10 text-gray-700"> Price {price}</p>
            <p className="px-10 mb-5 text-gray-700"> Duration {duration} hs</p>
        </article>
    )
}

export default CardIt