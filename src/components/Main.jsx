const Main = () => {
    return (
        <div className="bg-white" >
            <div className="mt-24" >
                <img className="object-none h-72 w-full " src="./assets/images/puerto-madero.jpg" alt="Puerto Madero" />
            </div>
            
            <div className="flex justify-center -mt-48 drop-shadow-lg ">
                <img className="w-64" src="/assets/images/mt.png" alt="MyTineray" />
            </div>

            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-2xl ">
                    <div className="text-center">
                        <h1 className="font-bold text-gray-900 sm:text-6xl font-[audiowide-regular]">MyTynerary</h1>
                        <p className="mt-8 text-lg text-gray-800 font-bold">Find your perfect trip, designed by insiders who know and love their cities!</p>
                        <p className="mt-4 text-lg leading-6 text-gray-800">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>

                        <div></div>

                        <div className="my-8 flex items-center justify-center gap-x-6">
                            <a href="#" className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start your journey here </a>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Main