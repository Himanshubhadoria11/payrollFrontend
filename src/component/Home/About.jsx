

import React from "react";


const AboutImage = ({ src, className, style }) => (
  <div className={`overflow-hidden ${className}`}>
    <img
      src={src}
      alt="About"
      className="img-fluid w-full object-cover"
      style={style}
    />
  </div>
);

function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 items-center">
          {/* Image Grid */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="grid grid-cols-2 gap-2 rounded overflow-hidden">
              <AboutImage src="img/OIP.jpg" style={{ height: "500px" }} />
              <AboutImage src="img/about-2.jpg" style={{ marginTop: "15%", width: "85%" }} />
              <AboutImage src="img/about-3.jpg" style={{ width: "85%" }} className="justify-self-end" />
              <AboutImage src="img/about-4.jpg" />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4 text-3xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="mb-4 text-gray-700">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
              sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            
            <a
              href="#"
              className="btn btn-primary py-3 px-5 mt-3 hover:bg-blue-700 transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

