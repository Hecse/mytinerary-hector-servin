import axios from "axios"
import CardIt from "../components/CardIt"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const City = () => {

    const { id } = useParams();
    const [city, setCity] = useState({});

    useEffect(() => {
        // trae info de la API
        axios.get('http://localhost:7000/api/cities/' + id)
            .then(response => {
                const cityData = response.data.city;
                setCity(cityData);
            })
            .catch(error => {
                console.error("Error fetching city data:", error);
            });
    }, [id]); // se ejecuta cada vez q cambia el id

    return (
        <div className='container mx-auto px-8'>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-2x1">
                <img
                    alt="Photo"
                    src={city.image}
                    className="w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                    <h3 className="mt-0.5 text-xl font-bold text-black">
                        {city.city} - {city.country}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-900">
                        {city.description}
                    </p>
                </div>
            </article>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    city && city.itinerary && city.itinerary.map((itinerary) => {
                        return (
                            <div>
                                <CardIt name={itinerary.name} price={itinerary.price} photo={itinerary.photo} user={itinerary.user.name} userImage={itinerary.user.image}/>
                            </div>
                        )
                    })
                }
            </div>

            <div className="mb-6 flex items-center justify-center gap-x-6">
                <Link to="/Cities" className="mt-6 inline-block rounded-full bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">Go back</Link>
            </div>
        </div>
    )
}

export default City