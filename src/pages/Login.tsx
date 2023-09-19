import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from "axios";

const Login = () => {
  // Use states
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  // Navigate from react-router-dom
  const navigate = useNavigate()

  //@ts-ignore
  const {currentUser, setCurrentuser} = useContext(AuthContext)
  console.log("Current user: ", currentUser)

  // Handle submit
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    // Clear errors
    setError("")

    // Try login user
    try {
      const response = await axios.post("http://localhost:8080/login-user", {email, password}, {withCredentials: true})
      setCurrentuser(response.data)

      // Redirect to index
      navigate("/")
    } catch (error: any) {
      setError(error.response.data)
    }
  }
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-slate-200 rounded-lg shadow-lg shadow-red-500">
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

      <h2 className="text-2xl font-semibold mb-4">Přihlášení</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {error && <span className="text-red-500">{error}</span>}
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
  );
};

export default Login;
