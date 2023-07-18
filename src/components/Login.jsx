import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios.js";
import { useAuthContext } from "../hooks/useAuthContext.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const { setUser }  = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login ", { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      Navigate("/dashboard");
      return res;
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <>

      <div className="bg-gray-200">
        <div className="grid grid-cols-1  md:grid-cols-3 items-center justify-center h-screen bg-gray-200">
          <div className="m-10 md:m-0 col-span-1  md:col-start-2 bg-white shadow-md p-10  ">
            <div className="flex gap-x-4 items-center justify-center text-blue-500 text-2xl  mb-10">
              <div className="flex gap-x-4 items-center justify-center">
                <img
                  src="../logo.jpeg"
                  alt="Keka Logo"
                  className="cursor-pointer duration-500 w-24 h-24  "
                />
              </div>
            </div>
            <p className="text-[25px]  text-gray-800 mb-2"> Login</p>
            <p className="text-sm text-gray-400 mb-5">
              
              Don't have an account 
              <Link to="/register " className="text-blue-600 underline px-5">
                
                Register
              </Link>
            </p>

            <div className="grid grid-row-1  md:grid-row-4  ">
              <div className="row-span-1 md:row-span-2 row-start-2">
                <form onSubmit={handleLogin}>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold text-gray-900 ">
                      Email
                    </label>
                    <input
                      type="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between">
                      <label className="block mb-2 text-sm font-semibold text-gray-900">
                        Password
                      </label>
                      <Link className="text-blue-500 underline text-sm   ">
                        Forgot Password ?
                      </Link>
                    </div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 tw dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Login
                    </button>
                    <a className="text-blue-600"></a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
