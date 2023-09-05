import React from 'react'
import Carousulb from '../components/Carousulb'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div>
                <img className="object-none h-72 w-full " src="./assets/images/puerto-madero.jpg" alt="Puerto Madero" />
            </div>

            <div className="flex justify-center -mt-48 drop-shadow-lg ">
                <img className="w-64" src="/assets/images/mt.png" alt="MyTineray" />
            </div>

            <div className="px-6 lg:px-8">
                <div className="">
                    <div className="text-center">
                        <p className="font-bold text-gray-600 bg-gradient-to-t text-6xl font-[audiowide-regular]">
                            <span className='bg-gradient-to-r from-purple-600 via-pink-500 to-sky-700 text-transparent bg-clip-text'>MyTinerary
                            </span>
                        </p>

                        <p className="mt-8 text-lg text-gray-800 font-bold">Find your perfect trip, designed by insiders who know and love their cities!
                        </p>

                        <p className="mt-4 text-base leading-6 text-gray-800">Our app will help you find the perfect path for your next trip. With an easy to use interface and a host of itinerary options, planning your next trip has never been easier.
                        </p>

                        <div className='flex justify-center mt-4'>
                            <Carousulb />
                        </div>

                        <div className="my-4 flex items-center justify-center">
                            <Link to="/Cities"
                                className="inline-block rounded-full bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">Start your journey here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home