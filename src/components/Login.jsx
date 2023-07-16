import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     const res = await axios.post("/login ", { email, password });
      localStorage.setItem("token", res.data.token);
      Navigate("/dashboard");
      return res;
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-3 items-center justify-center h-screen bg-gray-300">
        <div className="m-10 md:m-0 col-span-1  md:col-start-2 bg-white shadow-md p-10 rounded-lg ">
          <div className="flex gap-x-4 items-center justify-center">
            <img
              src="../logo.jpeg"
              alt="Keka Logo"
              className="cursor-pointer duration-500 w-24 h-24  "
            />
          </div>
          {error && <div className="text-red-500"> {error} </div>}
          <div className="grid grid-row-1  md:grid-row-4  ">
            <div className="row-span-1 md:row-span-2 row-start-2">
              <form onSubmit={handleLogin}>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your password
                  </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                  <a className="text-kekaBlue">
                    <Link to="/register">Register</Link>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
