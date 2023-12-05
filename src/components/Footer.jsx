import { Link } from 'react-router-dom'
import Facebook from './svg/Facebook'
import Instagram from './svg/Instagram'
import Twitter from './svg/Twitter'

const Footer = () => {
    return (

        <footer className="bg-gray-700">
            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 mt-8">
                <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <Link to="/#" className="text-white transition hover:text-sky-500">Home</Link>
                    </li>

                    <li>
                        <Link to="/Cities" className="text-white transition hover:text-sky-500">Cities</Link>
                    </li>

                    <li>
                        <Link to="#" className="text-white transition hover:text-sky-500">About us</Link>
                    </li>

                    <li>
                        <Link to="#" className="text-white transition hover:text-sky-500">Terms and Conditions</Link>
                    </li>
                </ul>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    <li>
                        <Link to="/"
                            target="_blank"
                            className="text-white transition hover:text-sky-500">
                            <Facebook />
                        </Link>
                    </li>

                    <li>
                        <Link to="/"
                            target="_blank"
                            className="text-white transition hover:text-sky-500" >
                            <Instagram />
                        </Link>
                    </li>

                    <li>
                        <Link to="/"
                            target="_blank"
                            className="text-white transition hover:text-sky-500">
                            <Twitter />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer