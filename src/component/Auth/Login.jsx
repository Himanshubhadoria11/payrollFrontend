
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  
  const { isAuthorized, setIsAuthorized } = useContext(Context);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(  `${import.meta.env.VITE_API_BASE_URL}/api/login`, { email, password, role },
  // { withCredentials: true });
  //     toast.success(data.message);
  //     setEmail("");
  //     setPassword("");
  //     setRole("");
  //     setIsAuthorized(true);
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //     console.log(error);
  //   }
  // };

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/login`,
      { email, password, role },
      { withCredentials: true }
    );

    toast.success(data.message);

    // ✅ Store token
    localStorage.setItem("token", data.token);

    setEmail("");
    setPassword("");
    setRole("");
    setIsAuthorized(true);
  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed");
    console.log(error);
  }
};

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl max-w-4xl p-8">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center p-6 md:w-1/2">
          <img height={200} width={200} src="/img/4957136.jpg" alt="logo" className="w-24 mb-4 rounded-xl" />
          <h3 className="text-2xl font-semibold mb-4  text-gray-700">Login to your account</h3>

          <form className="  w-full max-w-md ">
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-1 w-full px-4 py-2">Login As</label>
              
              <select
  className="border w-full px-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl"
  value={role}
               onChange={(e) => setRole(e.target.value)}>
  <option value="">Select Role</option>
  <option value="Employer" className="text-black">Admin</option>
  <option value="Job Seeker" className="text-black">Employee</option>
</select>

            </div>
 
             <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="hb@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" border w-96 px-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl "
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-96 px-4 py-2 border text-black bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl"
              />
            </div> 
            


            <button 
              type="submit"
              onClick={handleLogin}
              className="border w-full px-46 py-2 rounded-full bg-blue-600  text-white focus:ring   shadow hover:bg-blue-700 transition "
            >
              Login
            </button>
            <Link to={"/register"} className="block text-center text-blue-500 mt-4 hover:underline">
              Register Now
            </Link>
          </form>
        </div>



        {/* Right Section */}
        <div className="hidden md:flex items-center justify-center md:w-1/2">
         
        </div>
      </div>
    </section>
   


  );
}


export default Login;



