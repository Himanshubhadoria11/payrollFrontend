// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Pagination, Autoplay } from "swiper/modules";

// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// // export default function HeroCarousel() {
// //   return (

// // function Carousel() {
// //   return (
// //     <>
//       {/* <!-- Carousel Start --> */}
//       {/* <div className="container-fluid p-0">
//         <div className="owl-carousel header-carousel position-relative">
//           <div className="owl-carousel-item position-relative">
//             <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
//             <div
//               className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
//               style={{ background: "rgba(43, 57, 64, .5);" }}
//             >
//               <div className="container">
//                 <div className="row justify-content-start">
//                   <div className="col-10 col-lg-8">
//                     <h1 className="display-3 text-white animated slideInDown mb-4">
//                       Find The Perfect Job That You Deserved
//                     </h1>
//                     <p className="fs-5 fw-medium text-white mb-4 pb-2">
//                       Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
//                       diam no. Kasd rebum ipsum et diam justo clita et kasd
//                       rebum sea elitr.
//                     </p>
//                     <a
//                       href=""
//                       className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
//                     >
//                       Search A Job
//                     </a>
//                     <a
//                       href=""
//                       className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
//                     >
//                       Find A Talent
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="owl-carousel-item position-relative">
//             <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
//             <div
//               className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
//               style={{ background: "rgba(43, 57, 64, .5);" }}
//             >
//               <div className="container">
//                 <div className="row justify-content-start">
//                   <div className="col-10 col-lg-8">
//                     <h1 className="display-3 text-white animated slideInDown mb-4">
//                       Find The Best Startup Job That Fit You
//                     </h1>
//                     <p className="fs-5 fw-medium text-white mb-4 pb-2">
//                       Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
//                       diam no. Kasd rebum ipsum et diam justo clita et kasd
//                       rebum sea elitr.
//                     </p>
//                     <a
//                       href=""
//                       className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
//                     >
//                       Search A Job
//                     </a>
//                     <a
//                       href=""
//                       className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
//                     >
//                       Find A Talent
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
      
//     <div className="relative w-full h-[90vh]">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop
//         className="h-full"
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <div className="relative w-full h-full">
//             <img
//               src="/img/carousel-1.jpg"
//               alt="Job Opportunity"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50 flex items-center">
//               <div className="max-w-3xl px-6 lg:px-12">
//                 <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 animate-fadeInDown">
//                   Find The Perfect Job That You Deserve
//                 </h1>
//                 <p className="text-lg text-gray-200 mb-6 animate-fadeIn">
//                   Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
//                   no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
//                 </p>
//                 <div className="flex gap-4">
//                   <a
//                     href="#"
//                     className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition animate-fadeInLeft"
//                   >
//                     Search A Job
//                   </a>
//                   <a
//                     href="#"
//                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition animate-fadeInRight"
//                   >
//                     Find A Talent
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 */}
//         <SwiperSlide>
//           <div className="relative w-full h-full">
//             <img
//               src="/img/carousel-2.jpg"
//               alt="Startup Job"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black/50 flex items-center">
//               <div className="max-w-3xl px-6 lg:px-12">
//                 <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 animate-fadeInDown">
//                   Find The Best Startup Job That Fits You
//                 </h1>
//                 <p className="text-lg text-gray-200 mb-6 animate-fadeIn">
//                   Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
//                   no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
//                 </p>
//                 <div className="flex gap-4">
//                   <a
//                     href="#"
//                     className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition animate-fadeInLeft"
//                   >
//                     Search A Job
//                   </a>
//                   <a
//                     href="#"
//                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition animate-fadeInRight"
//                   >
//                     Find A Talent
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

//       {/* <!-- Carousel End --> */}
//     // </>
// //   );
// // }

// export default Carousel;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[90vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/img/carousel-1.jpg"
              alt="Job Opportunity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="max-w-3xl px-6 lg:px-12">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 animate-fadeInDown">
                  Find The Perfect Salary That You Deserve
                </h1>
                <p className="text-lg text-gray-200 mb-6 animate-fadeIn">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition animate-fadeInLeft"
                  >
                    View Payroll
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition animate-fadeInRight"
                  >
                    Manage Employees
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="/img/carousel-2.jpg"
              alt="Startup Job"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="max-w-3xl px-6 lg:px-12">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 animate-fadeInDown">
                  Find The Best Pay That Fits You
                </h1>
                <p className="text-lg text-gray-200 mb-6 animate-fadeIn">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition animate-fadeInLeft"
                  >
                    Check Salary Slips
                  </a>
                  <a
                    href="#"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition animate-fadeInRight"
                  >
                    Team Overview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
