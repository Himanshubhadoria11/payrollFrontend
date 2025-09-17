import React, { useContext, useEffect } from 'react'
import {Routes ,Route, BrowserRouter} from 'react-router-dom';
import axios from "axios";
import Navbar from './component/Layout/Navbar';
import Footer from './component/Layout/Footer';
import Home from './component/Home/Home';
import {Toaster} from "react-hot-toast"
import './App.css'
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import { Context } from './main';
import Profile from './component/Profile/Profile';
import ChangePassword from './component/Profile/ChangePassword';
import SalarySlips from './component/Job/SalarySlips';
import ExpenseForm from './component/Job/ExpenseForm';
import ExpenseList from './component/Job/ExpenseList';
import Dashboard from './component/Job/Dashboard';



function App() {
  const {isAuthorized,setIsAuthorized,setUser}=useContext(Context);

const fetchUser = async () => {
 
   try {
     const {data} = await axios.get(
      "api/getUser"
    );
    console.log(data)
    setUser(data);
    setIsAuthorized(true);
 
    
   } catch (error) {
      setIsAuthorized(false); 
   }

}; 
 useEffect(() => {
  
  fetchUser();
},[isAuthorized]);


  return (
    <>

      <BrowserRouter>
    
      <Navbar/>
     
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/change-password" element={<ChangePassword/>} />
         <Route path="/salary-slip" element={<SalarySlips/>} />
          <Route path="/expense-form" element={<ExpenseForm/>} />
           <Route path="/expense-list" element={<ExpenseList/>} />
           <Route path="/dashboard" element={<Dashboard/>} />

        
      </Routes>
         <Footer/>
         <Toaster/>
      </BrowserRouter>
      
    
      
      
      
    </>
  )
}

export default App