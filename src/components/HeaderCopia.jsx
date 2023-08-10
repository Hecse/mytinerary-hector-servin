const Header = () => {
    return (
        <div class="bg-white">
            <header class="absolute inset-x-0 top-0 z-50">
                <nav class="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <div class="flex items-center lg:flex-1">
                        <a href="#" class="-m-1.5 p-1.5">
                            <span class="sr-only">MyTinerary</span>
                            <img class="h-10 w-auto" src="/assets/images/favicon.png" alt="My Tinerary" />
                        </a>
                        <p class="ml-2 text-lg text-gray-800 font-bold ">MyTynerary</p>
                    </div>

                    <div class="flex lg:hidden">
                        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
                            <span class="sr-only">Open main menu</span>
                            
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    <div class="hidden items-center lg:flex lg:gap-x-10 ">
                        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Home</a>
                        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Cities</a>
                        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">LogIn</a>

                        <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                            <div class="flex items-center justify-center border-2 border-indigo-600 rounded-full ml-5 h-10 w-10 "><a href="#"> <img class="h-8 w-auto" src="./assets/images/usuario.svg" alt="LogIn" /></a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
                <div class="lg:hidden" role="dialog" aria-modal="true">

                    {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                    <div class="fixed inset-0 z-50"></div>

                    <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                        <div class="flex items-center justify-between">
                            <a href="#" class="-m-1.5 p-1.5"> <span class="sr-only">MyTinerary</span> <img class="h-8 w-auto" src="/assets/images/favicon.png" alt="MyTineray" />
                            </a>

                            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span class="sr-only">Close menu</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div class="mt-6 flow-root">
                            <div class="-my-6 divide-y divide-gray-500/10">
                                <div class="space-y-2 py-6">
                                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-gray-900 hover:bg-gray-400">Home</a>
                                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-gray-900 hover:bg-gray-400">Cities</a>
                                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-gray-900 hover:bg-gray-400">LogIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Header