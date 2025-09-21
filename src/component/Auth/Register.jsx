//import React, { useContext, useState } from "react"; import { Link, Navigate } from "react-router-dom"; import { Context } from "../../main"; import toast from "react-hot-toast"; import axios from "axios"; function Register() { const [email, setEmail] = useState(""); const [name, setName] = useState(""); const [phone, setPhone] = useState(""); const [password, setPassword] = useState(""); const [confirmpassword, setconfirmpassword] = useState(""); const [role, setRole] = useState(""); const { isAuthorized, setIsAuthorized } = useContext(Context); const handleRegister = async (e) => { e.preventDefault(); try { const { data } = await axios.post( ${import.meta.env.VITE_API_BASE_URL}/api/register, { name, phone, email, role, password, confirmpassword, }, { headers: { 'Content-Type': 'application/json' } } ); toast.success(data.message); setName(""); setEmail(""); setPassword(""); setPhone(""); setRole(""); setconfirmpassword(""); setIsAuthorized(true); } catch (error) { toast.error(error.response.data.message); console.log(error); } if (isAuthorized) { return <Navigate to={"/"} />; } return ( <section className="flex items-center justify-center min-h-screen bg-blue-600"> <div className="w-full max-w-md px-6 py-6 bg-white rounded-lg shadow-lg"> <div className="text-center mb-6"> <a href="/"> <h3 className="text-4xl font-bold text-purple-600">Register</h3> </a> </div> <form onSubmit={handleRegister} className="space-y-4"> <div> <label className="block text-gray-700">Register As</label> <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400" value={role} onChange={(e) => setRole(e.target.value)} > <option value="">Select Role</option> <option value="Employer">Admin</option> <option value="Job Seeker">Employee</option> </select> </div> <div> <label className="block text-gray-700">Name</label> <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400" placeholder="Himanshu" value={name} onChange={(e) => setName(e.target.value)} /> </div> <div> <label className="block text-gray-700">Email Address</label> <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400" placeholder="hb@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} /> </div> <div> <label className="block text-gray-700">Phone Number</label> <input type="number" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400" placeholder="123456789" value={phone} onChange={(e) => setPhone(e.target.value)} /> </div> <div> <label className="block text-gray-700">Password</label> <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} /> </div> <div> <label className="block text-gray-700">Confirm Password</label> <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} /> </div> <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition" > Register </button> <Link to={"/login"} className="block text-center text-blue-500 hover:underline"> Login Now </Link> </form> </div> </section> ); } // } export default Register;

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
  const [confirmpassword, setConfirmpassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/register`,
        {
          name,
          phone,
          email,
          role,
          password,
          confirmpassword,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setConfirmpassword("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
      console.log(error);
    }
  };

  if (isAuthorized) return <Navigate to="/" />;

  return (
    <section className="flex items-center justify-center min-h-screen bg-blue-600">
      <div className="w-full max-w-md px-6 py-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">Register</h3>
          </a>
        </div>

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
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>

          <Link
            to="/login"
            className="block text-center text-blue-500 hover:underline"
          >
            Login Now
          </Link>
        </form>
      </div>
    </section>
  );
}

export default Register;
