import React, { useContext, useState } from 'react'
import { Context } from '../../main';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";



function Navbar() {
    const [show, setShow]=useState(false);
    const {isAuthorized, setIsAuthorized,user}=useContext(Context);
     //console.log(isAuthorized)
    const navigateTo=useNavigate();
    const handleLogout = async () => {

      try {
        // const response = await axios.get(
        //  `${import.meta.env.VITE_API_BASE_URL}/api/logout` ,
  
        // );
        const token = localStorage.getItem("token");

const response = await axios.get(
  `${import.meta.env.VITE_API_BASE_URL}/api/logout`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
        toast.success(response.data.message);
        setIsAuthorized(false);
        navigateTo("/login");
      } catch (error) {
        toast.error(error.response.data.message), setIsAuthorized(true);
      }
    };
  


    return (
     <>
      {/* <nav className={`navbar navbar-expand-lg bg-amber-800 navbar-light  shadow sticky-top p-0 ${isAuthorized ? "navbarShow" : "navbarHide"}`}>
        <a href="index.html" className="navbar-brand d-flex align-items-center   text-center py-0 px-4 px-lg-5">
          <h2 className="m-0 text-primary">Payroll Management System
</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className={`navbar-nav ms-auto p-4 p-lg-0 ${show ? "show-menu menu" : "menu"}`}>
            <li className="nav-item ">
              <Link className="nav-link active text-white" to={"/"} onClick={() => setShow(false)}>
                HOME
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link active" to={"job/getall"} onClick={() => setShow(false)}>
                ALL JOBS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/applications/me"} onClick={() => setShow(false)}>
                {user && user.role === "Employer"
                  ? "APPLICANT'S APPLICATIONS"
                  : "MY APPLICATIONS"}
              </Link>
            </li> 
            <li className="nav-item text-amber-300">
                  <Link className="nav-link active " to={"/Profile"} onClick={() => setShow(false)}>
                   PROFILE
                  </Link>
                </li>
                 <li className="nav-item">
                   <Link className="nav-link active" to={"/expense-form"} onClick={() => setShow(false)}>
                Expense Form
              </Link>
                </li>
                 <li className="nav-item">
                   <Link className="nav-link active" to={"/expense-list"} onClick={() => setShow(false)}>
                Expense List
              </Link>
                </li>
                  
                  <li className="nav-item">
                   <Link className="nav-link active" to={"/dashboard"} onClick={() => setShow(false)}>
                Dashboard
              </Link>
                </li>
                 <li className="nav-item">
                   <Link className="nav-link active" to={"/salary-slip"} onClick={() => setShow(false)}>
                Salary Slips
              </Link>
                </li>
            {user && user.role === "Employer" ? (
               <> 
              
                <li className="nav-item">
                  <Link className="nav-link active" to={"/job/post"} onClick={() => setShow(false)}>
                    POST NEW JOB
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/MyJobs"} onClick={() => setShow(false)}>
                    VIEW YOUR JOBS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/PostCategory"} onClick={() => setShow(false)}>
                   POST CATEGORY JOBS
                  </Link>
                </li> 

               
                
              </>
            ) : (
              <></>
            )}

            
            <button className="btn btn-danger " onClick={handleLogout} >LOGOUT</button>

          </div>

        </div>
      </nav>  */}

      <nav className={`w-full bg-blue-500 shadow-md sticky top-0 z-50 ${isAuthorized ? "block" : "hidden"}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo / Brand */}
      <a href="/" className="flex items-center align-items-even">
        <h2 className="text-2xl font-bold text-white">
          Payroll Management System
        </h2>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-lg font-bold ">
        <Link to="/" className="text-white hover:text-amber-800">Home</Link>
        <Link to="/dashboard" className="text-white hover:text-amber-800">Dashboard</Link>
       
  <Link to="/expense-form" className="text-white hover:text-amber-800">
    Expense Form
  </Link>

        {/* <Link to="/expense-form" className="text-white hover:text-amber-300">Expense Form</Link> */}
        <Link to="/expense-list" className="text-white hover:text-amber-800">Expense List</Link>
       
         <Link to="/Profile" className="text-white hover:text-amber-800">Profile</Link>
       
        {user && user.role === "Employer" && (
          <>
            {/* Add Employer-only links here */}
             <Link to="/salary-slip" className="text-white hover:text-amber-800">Salary Slips</Link>
          </>
        )}

        {/* <button 
          onClick={handleLogout} 
          className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
        >
          Logout
        </button> */}
        <button 
  onClick={handleLogout} 
  className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
>
  Logout
</button>

      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setShow(!show)} 
          className="text-white focus:outline-none"
        >
          {show ? "✖" : "☰"}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu Dropdown */}
  {show && (
    <div className="md:hidden bg-amber-700 px-4 py-3 space-y-2">
      <Link to="/" onClick={() => setShow(false)} className="block text-white hover:text-amber-800">Home</Link>
      <Link to="/Profile" onClick={() => setShow(false)} className="block text-white hover:text-amber-800">Profile</Link>
      <Link to="/expense-form" onClick={() => setShow(false)} className="block text-white hover:text-amber-800">Expense Form</Link>
      <Link to="/expense-list" onClick={() => setShow(false)} className="block text-white hover:text-amber-800">Expense List</Link>
      <Link to="/dashboard" onClick={() => setShow(false)} className="block text-white hover:text-amber-800">Dashboard</Link>
      <Link to="/salary-slip" onClick={() => setShow(false)} className="block text-white hover:text-amber-800">Salary Slips</Link>

      <button 
        onClick={handleLogout} 
        className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  )}
</nav>

      </>
  )
}

export default Navbar
 