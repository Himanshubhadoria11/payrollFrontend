import React, { useContext, useState } from 'react'
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const [show, setShow]=useState(false);
    const {isAuthorized, setIsAuthorized,user}=useContext(Context);
     //console.log(isAuthorized)
    const navigateTo=useNavigate();
  
  return (
   <>
    {/* <div className={`container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn ${isAuthorized ? "footerShow" : "footerHide"}`} data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Company</h5>
              <a className="btn btn-link text-white-50" href="">About Us</a>
              <a className="btn btn-link text-white-50" href="">Contact Us</a>
              <a className="btn btn-link text-white-50" href="">Our Services</a>
              <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
              <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <a className="btn btn-link text-white-50" href="">About Us</a>
              <a className="btn btn-link text-white-50" href="">Contact Us</a>
              <a className="btn btn-link text-white-50" href="">Our Services</a>
              <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
              <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Contact</h5>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" style={{maxWidth:"400px"}}>
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                  <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="#"></a>,All Rights Reserved By.

                <a className="border-bottom" href="https://htmlcodex.com"> Payroll Management System
 2024</a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a> */}
<footer
  className={`bg-gray-900 text-gray-400 pt-10 mt-10 ${
    isAuthorized ? "block" : "hidden"
  }`}
>
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Company */}
      <div>
        <h5 className="text-white text-lg font-semibold mb-4">Company</h5>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition">About Us</a></li>
          <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          <li><a href="#" className="hover:text-white transition">Our Services</a></li>
          <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h5 className="text-white text-lg font-semibold mb-4">Quick Links</h5>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition">Home</a></li>
          <li><a href="#" className="hover:text-white transition">FAQ</a></li>
          <li><a href="#" className="hover:text-white transition">Help Center</a></li>
          <li><a href="#" className="hover:text-white transition">Cookies</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h5 className="text-white text-lg font-semibold mb-4">Contact</h5>
        <p className="mb-2"><i className="fas fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
        <p className="mb-2"><i className="fas fa-phone mr-2"></i>+012 345 67890</p>
        <p className="mb-4"><i className="fas fa-envelope mr-2"></i>info@example.com</p>
        <div className="flex space-x-3">
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-700 transition"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-red-600 transition"><i className="fab fa-youtube"></i></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-500 transition"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Newsletter */}
      <div>
        <h5 className="text-white text-lg font-semibold mb-4">Newsletter</h5>
        <p className="mb-4">Subscribe to get the latest updates and offers.</p>
        <div className="relative">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-full bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            className="absolute top-1 right-1 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
      <p>
        © {new Date().getFullYear()} Payroll Management System. All rights reserved.
      </p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition">Home</a>
        <a href="#" className="hover:text-white transition">Cookies</a>
        <a href="#" className="hover:text-white transition">Help</a>
        <a href="#" className="hover:text-white transition">FAQs</a>
      </div>
    </div>
  </div>

  {/* Back to Top Button */}
  <a
    href="#"
    className="fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition"
  >
    <i className="bi bi-arrow-up"></i>
  </a>
</footer>


   </>
  )
}

export default Footer