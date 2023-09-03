import React, { useState } from 'react';
import * as CryptoJS from "crypto-js";
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registerStatus, setRegisterStatus] = useState(true);
  const [redirectUrlStatus, setRedirectUrlStatus] = useState(false);


  const registerFormSubmit = async (e) => {
    // e.preventDefault(); // Zakomentovaná řádka byla odkomentována

    const dataOneUser = {
      email: email,
      password: CryptoJS.Rabbit.encrypt(password, "fefegegejgkjekgjkleg"),
      registerStatus: registerStatus,
    };

    if (password !== passwordAgain) {
      setRegisterStatus(false);
      setRedirectUrlStatus(false);
    } else {
      try {
        const url = "http://localhost:8080/register-user";
        const response = await fetch(url, {
          method: "post",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataOneUser),
        });
        console.log(response);
        setRedirectUrlStatus(true);
      } catch (error) {
        console.error("Error With Navigate to Home Page", error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-slate-200 rounded-xl shadow-lg shadow-red-500">
      <Link to="/">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
      </Link>

      <h2 className="text-2xl font-semibold mb-4">Registrace</h2>
      <form action={ redirectUrlStatus ? "./Home" : console.log("Error") } onSubmit={registerFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            minLength={10}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            minLength={4}
            maxLength={15}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="passwordAgain" className="block text-gray-600">
            Password Again
          </label>
          <input
            type="password"
            id="passwordAgain"
            name="passwordAgain"
            minLength={4}
            maxLength={15}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
            placeholder="Enter Password Again"
            onChange={(e) => setPasswordAgain(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-red-600"
          >
            Registrovat Se
          </button>

          {!registerStatus && (
            <div>
              <p>Wrong data are not available</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;