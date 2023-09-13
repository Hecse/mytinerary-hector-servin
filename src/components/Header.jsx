import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from "@material-tailwind/react"

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const links = [
        { title: user ? 'Home' : null, to: '/' },
        { title: user ? 'Cities' : null, to: '/cities' },
        { title: user ? null : 'Sign In', to: '/login' },
        { title: user ? 'Sign Out' : null, to: '/' }
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

                        <svg className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true">
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div className="hidden items-center md:flex lg:gap-x-10 md:gap-x-4">
                    {links ? links.map((link) => (<Link key={link.to} to={link.to} className="text-sm font-semibold leading-6 text-gray-900 transition hover:text-indigo-600">{link.title}</Link>))
                        : null}

                    <div className="hidden md:flex md:flex-1 md:justify-end items-center">
                        <div className="flex items-center justify-center border-2 border-indigo-600 rounded-full ml-5 h-10 w-10 ">
                            <Link to="/Login">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-8 h-8">
                                    <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
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
                                {links ? links.map((link) => (<Link key={link.title} to={link.to} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base text-center font-semibold leading-7 text-gray-900 hover:bg-indigo-300">{link.title}</Link>))
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>

        </header>
    )
}

export default Header
