import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usersingup } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';


const SignUp = () => {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        image: '',
        country: ''
    })

    const dispatch = useDispatch();

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    console.log(formData)

    const handleSingUp = async (event) => {
        event.preventDefault()

        try {
            dispatch(usersingup({
                data: formData
            })) 
        } catch (error) {
            console.error
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div color="transparent">
                <h1 className="text-2xl font-semibold">
                    Sign Up
                </h1>

                <p className="mt-1 font-normal">
                    Enter your details to register.
                </p>

                <form onSubmit={handleSingUp} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-6">
                        <label
                            id="name"
                            className="block mb-2 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            onChange={handleInput}
                            type="text"
                            id="nametext"
                            name="name"
                            className="w-full px-4 py-2 mb-4 shadow-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" required
                        />

                        <label
                            id="lastnametext"
                            className="block mb-2 text-sm text-gray-600">
                            Last name
                        </label>
                        <input
                            onChange={handleInput}
                            type="text"
                            id="text"
                            name="lastname"
                            className="w-full px-4 py-2 mb-4 shadow-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" required
                        />

                        <label
                            id="mail"
                            className="block mb-2 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            onChange={handleInput}
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
                            onChange={handleInput}
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
                            onChange={handleInput}
                            type="text"
                            id="imagetext"
                            name="image"
                            className="w-full px-4 py-2 mb-4 shadow-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />

                        <label
                            id="country"
                            className="block mb-2 text-sm text-gray-600">
                            County
                        </label>
                        <select
                            onChange={handleInput}
                            name="country"
                            id="countryselect"
                            className="w-full px-4 py-2 mb-4 shadow-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        >
                            <option value="Country"></option>
                            <option value="Argentina">Argentina</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Brasil">Brasil</option>
                            <option value="Chile">Chile</option>
                            <option value="Perú">Perú</option>
                            <option value="Uruguay">Uruguay</option>
                        </select>
                    </div>


                    <button
                        onClick={handleSingUp}
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