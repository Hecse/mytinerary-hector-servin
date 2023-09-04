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
            <article className="overflow-hidden relative rounded-lg ">
                <img
                    alt="Photo"
                    src={city.image}
                    className="w-full h-80 object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>

                <div className="absolute inset-y-32 p-4 sm:p-6">
                    <h3 className="mt-0.5 text-2xl font-bold text-white">
                        {city.city}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-white">
                        {city.description}
                    </p>

                    <div><p className="mt-2 text-sm/relaxed text-white">
                        Country: {city.country} |
                        Continent: {city.continent} |
                        Language: {city.language} |
                        Currency: {city.currency} |
                        Religion: {city.religion}
                    </p></div>
                </div>
            </article>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
                {
                    city && city.itinerary && city.itinerary.map((itinerary) => {
                        return (
                            <div key={itinerary._id}>
                                <CardIt name={itinerary.name}
                                    price={itinerary.price}
                                    photo={itinerary.photo}
                                    user={itinerary.user.name}
                                    userImage={itinerary.user.image}
                                    duration={itinerary.duration}
                                    hashtag={itinerary.hashtag} />
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