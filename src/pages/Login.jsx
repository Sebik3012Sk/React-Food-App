import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-slate-200 rounded-lg shadow-lg shadow-red-500">

       <Link to="/">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
        </Link>

        <h2 className="text-2xl font-semibold mb-4">Přihlášení</h2>
        <form className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-gray-600">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                    placeholder="Enter Email"
                    // onChange={ (e) => setRecipeTitle(e.target.value) }
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                    placeholder="Enter Password"
                    // onChange={ (e) => setImage(e.target.value) }
                />
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-red-600"
                >
                    Přihlásit se
                </button>
            </div>

        </form>
    </div>
  )
}

export default Login;