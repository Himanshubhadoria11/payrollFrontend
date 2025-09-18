

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



const testimonials = [
  {
    id: 1,
    name: "John Doe",
    profession: "Software Engineer",
    image: "/img/testimonial-1.jpg",
    text: "This platform made payroll and expense management so easy. Highly recommend it!",
  },
  {
    id: 2,
    name: "Sarah Smith",
    profession: "HR Manager",
    image: "/img/testimonial-2.jpg",
    text: "Amazing experience! The dashboard is very intuitive and user-friendly.",
  },
  {
    id: 3,
    name: "Michael Lee",
    profession: "Accountant",
    image: "/img/testimonial-3.jpg",
    text: "Accurate, fast, and reliable. Perfect solution for our company’s needs.",
  },
  {
    id: 4,
    name: "Emma Johnson",
    profession: "Project Manager",
    image: "/img/testimonial-4.jpg",
    text: "Customer support is excellent! They helped us every step of the way.",
  },
];

export default function TestimonialSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Clients Say!!!
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white shadow-lg rounded-2xl p-6 text-left relative">
                <i className="fa fa-quote-left text-green-600 text-3xl mb-4"></i>
                <p className="text-gray-600 italic mb-6">{t.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-800">{t.name}</h5>
                    <small className="text-gray-500">{t.profession}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

