import CardIt from "../components/CardIt"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCity } from "../store/actions/cityActions"

const City = () => {

    const { id } = useParams();
    const [city, setCity] = useState({});
    const onecity = useSelector((store) => store.cityReducer.city)
    //console.log(onecity);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCity(id));
    }, []);

    return (
        <div className='container mx-auto px-8'>
            <article className="overflow-hidden relative rounded-lg ">
                <img
                    alt="Photo"
                    src={onecity.image}
                    className="w-full h-80 object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>

                <div className="absolute inset-y-32 p-4 sm:p-6">
                    <h3 className=" text-3xl font-bold text-white">
                        {onecity.city}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-white">
                        {onecity.description}
                    </p>

                    <div><p className="mt-2 text-sm/relaxed text-white">
                        Country: {onecity.country} |
                        Continent: {onecity.continent} |
                        Language: {onecity.language} |
                        Currency: {onecity.currency} |
                        Religion: {onecity.religion}
                    </p></div>
                </div>
            </article>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
                {
                    onecity && onecity.itinerary && onecity.itinerary.map((itinerary) => {
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