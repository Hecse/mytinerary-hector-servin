import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const City = () => {

    const { id } = useParams();
    const [city, setCity] = useState({});

    //console.log(city)
    //console.log(id)
    /* const { cityNamber } = useParams()
    useEffect(() => {
        fetch('http://localhost:7000/api/cities?city=')
            .then(res => res.json())
            .then(city => setCity(city))
    }) */

    useEffect(() => {
        axios.get('http://localhost:7000/api/cities/' + id)
            .then(response => {
                const cityData = response.data.city;
                setCity(cityData);
            })
            .catch(error => {
                console.error("Error fetching city data:", error);
            });
    }, [id]); // Se ejecuta cada vez que el ID cambie


    return (
        <div className=''>

            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                    alt="Photo"
                    src={city.image}
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                    <h3 className="mt-0.5 text-xl text-black">
                        {city.city} - {city.country}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-900">
                        {city.description}
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