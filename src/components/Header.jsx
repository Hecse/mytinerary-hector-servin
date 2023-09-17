import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from "@material-tailwind/react"
import { UserLogo } from './svg/UserLogo'
import { useDispatch, useSelector } from 'react-redux'
import { userlogout } from '../store/actions/userActions'
import Hamburger from './svg/Hamburger'
import X from './svg/X'

const Header = () => {
    let [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const user = useSelector(store => store.userReducer.user);
    const defaultPhoto = UserLogo();
    const dispatch = useDispatch;

    const links = [
        { title: user ? 'Home' : null, to: '/' },
        { title: user ? 'Cities' : null, to: '/cities' },
        { title: user ? null : 'Sign In', to: '/login' },
        /* { title: user ? 'Sign Out' : null, to: '/' } */
    ]

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

                <div className="flex md:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Hamburger />
                    </button>
                </div>

                <div className="hidden items-center md:flex lg:gap-x-10 md:gap-x-4">
                    {/* mapea los links */}
                    {links ? links.map((link, i) => (<Link key={i} to={link.to} className="text-md font-semibold leading-6 text-gray-900 transition border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-indigo-600 duration-300">{link.title}</Link>))
                        : null}

                    {user ?
                        <Link to='/'
                            className="text-md font-semibold leading-6 text-gray-900 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 transition hover:text-indigo-600 duration-300"
                            onClick={() => dispatch(userlogout())}>Sign Out</Link>
                        : null}

                    {/* traer la imagen por defecto ó la del usuario si está logueado */}
                    <div>
                        <div className="flex items-center justify-center border-2 border-indigo-600 rounded-full ml-5 h-10 w-10 ">
                            <Link to="/Login">
                                {user ? <img
                                    className='w-10 h-10 rounded-full'
                                    src={user.image}
                                    alt="" /> : defaultPhoto}
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
                                {links ? links.map((link, i) => (
                                    <Link key={i} to={link.to} onClick={() => setMobileMenuOpen(false)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-gray-900 hover:bg-indigo-300">{link.title}</Link>))
                                    : null}
                            </div>
                            {user ?
                                <Link to='/'
                                    className="block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-gray-900 hover:bg-indigo-300"
                                    onClick={() => dispatch(userlogout())}>Sign Out</Link>
                                : null}
                        </div>
                    </div>
                </div>
            </Dialog>
        </header>
    )
}

export default Header
