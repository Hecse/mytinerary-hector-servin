import React from 'react'
import Carousulb from '../components/Carousulb'

const Home = () => {
  return (
    <div className="bg-white" >
            <div>
                <img className="object-none h-72 w-full " src="./assets/images/puerto-madero.jpg" alt="Puerto Madero" />
            </div>
            
            <div className="flex justify-center -mt-48 drop-shadow-lg ">
                <img className="w-64" src="/assets/images/mt.png" alt="MyTineray" />
            </div>

            <div className="px-6 lg:px-8">
                <div className="">
                    <div className="text-center">
                        <h1 className="font-bold text-indigo-600 text-6xl font-[audiowide-regular]">My<span className='text-gray-800'>Tinerary</span> </h1>
                        <p className="mt-8 text-lg text-gray-800 font-bold">Find your perfect trip, designed by insiders who know and love their cities!</p>
                        <p className="mt-4 text-base leading-6 text-gray-800">Our app will help you find the perfect path for your next trip. With an easy to use interface and a host of itinerary options, planning your next trip has never been easier.</p>

                        <div className='flex justify-center mt-4'><Carousulb /></div>

                        <div className="my-4 flex items-center justify-center">
                            <a
                            className="inline-block rounded-full bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                            href="/Cities"> Start your journey here
                        </a>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
  )
}

export default Home