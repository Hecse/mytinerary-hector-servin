import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from "@material-tailwind/react"
import { UserLogo } from './svg/UserLogo'
import { useSelector } from 'react-redux'
import Hamburger from './svg/Hamburger'
import X from './svg/X'

const Header = () => {
    let [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const user = useSelector(store => store.userReducer.user);
    const defaultPhoto = UserLogo();

    return (
        <header className='container mx-auto px-8'>
            <nav className="flex items-center justify-between p-4 lg:px-8" >
                <div className="flex items-center lg:flex-1">
                    <Link to="/#" className="-m-1.5 p-1.5">
                        <span className="sr-only">MyTinerary</span>
                        <img className="h-10 w-full"
                            src="/assets/images/mt.png"
                            alt="My Tinerary" />
                    </Link>
                    <p className="ml-2 text-md text-gray-800 font-[audiowide-regular]">MyTinerary</p>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Hamburger />
                    </button>
                </div>

                <div className="hidden items-center lg:flex lg:gap-x-10 ">
                    <Link to="/#" className="text-sm font-semibold leading-6 text-gray-900 transition hover:text-indigo-600">Home</Link>
                    <Link to="/Cities" className="text-sm font-semibold leading-6 text-gray-900 transition hover:text-indigo-600">Cities</Link>
                    <Link to="/Login" className="text-sm font-semibold leading-6 text-gray-900 transition hover:text-indigo-600">Login</Link>

                    {/* traer la imagen por default ó la del usuario si está logueado */}
                    <div className="hidden md:flex md:flex-1 md:justify-end items-center">
                        <div className="flex items-center justify-center border-2 border-indigo-600 rounded-full ml-5 h-10 w-10 ">
                            <Link to="/Login">
                                {user ? <img className='w-10 h-10 rounded-full' src={user.image} alt="" /> : defaultPhoto}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                    <div className="flex items-center justify-between">

                        <Link to="#" className="-m-1.5 p-1.5"> <span className="sr-only">MyTinerary</span> <img className="h-8 w-auto" src="/assets/images/mt.png" alt="MyTineray" />
                        </Link>

                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <X />                            
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link to="/#" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-gray-900 hover:bg-indigo-300">Home</Link>
                                <Link to="/Cities" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-gray-900 hover:bg-indigo-300">Cities</Link>
                                <Link to="/Login" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-gray-900 hover:bg-indigo-300">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>

        </header>
    )
}

export default Header
