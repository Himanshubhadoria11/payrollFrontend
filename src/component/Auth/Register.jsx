

import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../../main";
import toast from "react-hot-toast";
import axios from "axios";



function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/register`, {
      //   name,
      //   phone,
      //   email,
      //   role,
      //   password,
      //   confirmpassword,
      // },{ withCredentials: true });
       const token = localStorage.getItem("token");
//     const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/register`, {
//          name,
//          phone,
//          email,
//          role,
//          password,
//          confirmpassword,
//        },
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
// );
// const { data } =axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/register`, {
//   name,
//    phone,
//   email,
//   role,
//   password,
//   confirmPassword,
// }, {
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });
const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/register`, {
  name,
  phone,
  email,
  role,
  password,
  confirmPassword,
}, {
  headers: {
    'Content-Type': 'application/json'
  }
});


      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setconfirmpassword("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    // <section className="flex items-center justify-center min-h-screen bg-gray-100">
    //   <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-md">
    //     <div className="text-center mb-6">
    //       {/* <img className="mx-auto h-14 w-14 h-screen" src="/img/talent-search-isolated-cartoon-vector-illustrations_107173-21711.avif" alt="logo" /> */}
    //       <h3 className="text-xl font-bold">Create a new account</h3>
    //     </div>
    //     <form onSubmit={handleRegister} className="space-y-4">
    //       <div>
    //         <label className="block text-gray-700">Register As</label>
    //         <select
    //           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
    //           value={role}
    //           onChange={(e) => setRole(e.target.value)}
    //         >
    //           <option value="">Select Role</option>
    //           <option value="Employer">Admin</option>
    //           <option value="Job Seeker">Employee</option>
    //         </select>
    //       </div>
    //       <div>
    //         <label className="block text-gray-700">Name</label>
    //         <input
    //           type="text"
    //           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
    //           placeholder="Himanshu"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-gray-700">Email Address</label>
    //         <input
    //           type="email"
    //           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
    //           placeholder="hb@gmail.com"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-gray-700">Phone Number</label>
    //         <input
    //           type="number"
    //           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
    //           placeholder="123456789"
    //           value={phone}
    //           onChange={(e) => setPhone(e.target.value)}
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-gray-700">Password</label>
    //         <input
    //           type="password"
    //           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
    //           placeholder="Your Password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-gray-700">Confirm Password</label>
    //         <input
    //           type="password"
    //           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
    //           placeholder="Confirm Password"
    //           value={confirmpassword}
    //           onChange={(e) => setconfirmpassword(e.target.value)}
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
    //       >
    //         Register
    //       </button>
    //       <Link to={"/login"} className="block text-center text-blue-500 hover:underline">
    //         Login Now
    //       </Link>
    //     </form>
    //   </div>
    // </section>

//    <section className="  flex items-center justify-center min-h-screen bg-blue-600" >
//     <div>
//             <div className="w-full px-6 py-4 flex flex-col items-center min-h-screen pt-2 sm:justify-center sm:pt-0 bg-white ">
//                 <div>
//                     <a href="/">
//                         <h3 className="text-4xl font-bold text-purple-600">
//                             Register
//                         </h3>
//                     </a>
//                 </div>
//                 <div className="w-full px-4  py-4 mt-2 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg ">
//                     <form>
//                         <div>
//                             <label
//                                 htmlFor="name"
//                                 className="block text-sm font-medium text-gray-700 undefined"
//                             >
//                                 Name
//                             </label>
//                             <div className="flex flex-col items-start">
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     className="block w-full px-26 py-2  border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mt-4">
//                             <label
//                                 htmlFor="email"
//                                 className="block text-sm font-medium text-gray-700 undefined"
//                             >
//                                 Email
//                             </label>
//                             <div className="flex flex-col items-start">
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     className="block w-full px-26 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mt-4">
//                             <label
//                                 htmlFor="password"
//                                 className="block text-sm font-medium text-gray-700 undefined"
//                             >
//                                 Password
//                             </label>
//                             <div className="flex flex-col items-start">
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     className="block w-full px-26 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mt-4">
//                             <label
//                                 htmlFor="password_confirmation"
//                                 className="block text-sm font-medium text-gray-700 undefined"
//                             >
//                                 Confirm Password
//                             </label>
//                             <div className="flex flex-col items-start">
//                                 <input
//                                     type="password"
//                                     name="password_confirmation"
//                                     className="block w-full px-26 py-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 />
//                             </div>
//                         </div>
//                         <div className="flex items-center justify-end mt-4">
//                             <a
//                                 className="text-sm text-gray-600 underline hover:text-gray-900"
//                                 href="/login"
//                             >
//                                 Already registered?
//                             </a>
//                             <button
//                                 type="submit"
//                                 className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
//                             >
//                                 Register
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//    </section>
 

 <section className="flex items-center justify-center min-h-screen bg-blue-600">
           
  <div className="w-full max-w-md px-6 py-6 bg-white rounded-lg shadow-lg">
    <div className="text-center mb-6">
      <a href="/">
        <h3 className="text-4xl font-bold text-purple-600">Register</h3>
      </a>
    </div>

    {/* <form onSubmit={handleRegister} className="space-y-4">
      
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

     
      <div className="mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

    
      <div className="mt-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      
      <div className="mt-4">
        <label
          htmlFor="password_confirmation"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="password_confirmation"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      
      <div className="flex items-center justify-between mt-6">
        <a
          className="text-sm text-gray-600 underline hover:text-gray-900"
          href="/login"
        >
          Already registered?
        </a>
        <button
          type="submit"
           onClick={handleRegister}
          className="px-6 py-2 rounded-md text-sm font-semibold tracking-wide text-white uppercase transition duration-150 ease-in-out bg-gray-900  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        >
          Register
        </button>
      </div>
    </form> */}
     <form onSubmit={handleRegister} className="space-y-4">
           <div>
             <label className="block text-gray-700">Register As</label>
             <select
               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
               value={role}
               onChange={(e) => setRole(e.target.value)}
             >
              <option value="">Select Role</option>
              <option value="Employer">Admin</option>
              <option value="Job Seeker">Employee</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Himanshu"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="hb@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="123456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
          <Link to={"/login"} className="block text-center text-blue-500 hover:underline">
            Login Now
          </Link>
        </form>
  </div>
</section>  


   

  





  );
}

export default Register;




