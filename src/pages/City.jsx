import { useParams } from "react-router-dom"

const City = () => {

    const { id } = useParams();
    const { city } = useParams();    

    return (
        <div className=''>

            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <h2 className='text-3xl text-center'>City ID: {id}</h2>
                <h2 className='text-3xl text-center'>City Name: {city}</h2>
                <img
                    alt="Office"
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                    <h3 className="mt-0.5 text-xl text-black">
                        Titulo
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, repellendus. Non unde itaque aliquam ducimus. Error minus sapiente, cumque blanditiis quisquam delectus architecto laudantium at possimus vitae ex facere provident.
                    </p>
                </div>
            </article>

            <div className="mb-6 flex items-center justify-center gap-x-6">
                <a
                    className="mt-6 inline-block rounded-full bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                    href="/Cities"> Go back
                </a>
            </div>

        </div>
    )
}

export default City