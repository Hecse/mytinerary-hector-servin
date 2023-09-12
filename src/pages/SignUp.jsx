import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div color="transparent">
                <h1 className="text-2xl font-semibold">
                    Sign Up
                </h1>

                <p className="mt-1 font-normal">
                    Enter your details to register.
                </p>

                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-6">
                        <label
                            id="name"
                            className="block mb-2 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="nametext"
                            name="text"
                            className="w-full px-4 py-2 mb-4 shadow-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" required
                        />

                        <label
                            id="lastname"
                            className="block mb-2 text-sm text-gray-600">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="lastnametext"
                            name="text"
                            className="w-full px-4 py-2 mb-4 shadow-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" required
                        />

                        <label
                            id="mail"
                            className="block mb-2 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 mb-4 shadow-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" required
                        />

                        <label
                            id="pass"
                            className="block mb-2 text-sm text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 mb-4 shadow-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" required
                        />

                        <label
                            id="image"
                            className="block mb-2 text-sm text-gray-600">
                            Photo
                        </label>
                        <input
                            type="text"
                            id="imagetext"
                            name="text"
                            className="w-full px-4 py-2 mb-4 shadow-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />

                        <label
                            id="country"
                            className="block mb-2 text-sm text-gray-600">
                            County
                        </label>
                        <select
                            name="Country"
                            id="countryselect"
                            className="w-full px-4 py-2 mb-4 shadow-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        >
                            <option value="" selected disabled></option>
                            <option value="Argentina">Argentina</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Brasil">Brasil</option>
                            <option value="Chile">Chile</option>
                            <option value="Perú">Perú</option>
                            <option value="Uruguay">Uruguay</option>
                        </select>
                    </div>


                    <button
                        type="submit"
                        className="mt-6 inline-block rounded-full bg-indigo-600 px-8 py-3 text-sm font-medium text-white w-full transition hover:scale-110">
                        Register
                    </button>

                    <p className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link to="/login" className="font-medium text-cyan-600">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp