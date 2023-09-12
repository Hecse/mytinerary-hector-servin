import React from 'react'
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div color="transparent">
        <h1 className="text-2xl font-semibold">
          Sign In
        </h1>

        <p className="mt-1 font-normal">
          Enter your details.
        </p>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-6">
            <label
              id="mail"
              className="block mb-2 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" required
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" required
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-block rounded-full bg-indigo-600 px-8 py-3 text-sm font-medium text-white w-full transition hover:scale-110">
            Sign In
          </button>

          <p className="mt-4 text-center font-normal">
            You do not have an account?{" "}
            <Link to="#" className="font-medium text-cyan-600">
              Sign up now
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LogIn