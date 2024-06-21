import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import blur effect CSS

const Banner = () => {
  return (
    <div className="relative h-full mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-2">
      {/* Lazy loading background image */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{ height: "83vh" }}
      >
        <LazyLoadImage
          src="../../banner-bg.jpg" // Ensure this path is correct
          alt="Banner Background"
          effect="blur"
          className="w-full h-full object-cover brightness-50"
          style={{ height: "100vh" , width:"93vw" }}
        />
      </div>

      <div
        className="relative flex items-center justify-center flex-col bg-slate-900 bg-opacity-40 lg:px-20 md:px-16 sm:px-10 px-6 mt-24 rounded-2xl"
        style={{ height: "83vh" }}
      >
        <h1 className="text-amber-400 text-center font-extrabold my-2 dynamic-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          American Institute of Chemical Engineers
        </h1>
        <div className="flex items-center justify-center flex-col md:flex-row">
          {/* Lazy loading the logo */}
          <LazyLoadImage
            src="../../college-logo.png" // Ensure this path is correct
            alt="College Logo"
            effect="blur"
            className="h-8 sm:h-10 mx-2"
            threshold={100}
          />
          <p className="text-slate-50 text-center font-semibold my-3 text-lg sm:text-xl lg:text-2xl">
            Rajiv Gandhi Institute of Petroleum Technology Student Chapter
          </p>
        </div>
        <p className="text-slate-50 text-center font-medium text-xs sm:text-sm">
          RGIPT is an Institute of National Importance (INI), established by the
          Ministry of <br className="hidden md:inline" />
          Petroleum and Natural Gas (MOP&NG), Government of India, and
          co-promoted <br className="hidden md:inline" />
          as an energy domain specific institute by six leading Oil
          <br className="hidden md:inline" /> Public Sector Enterprise.
        </p>
      </div>
    </div>
  );
};

export default Banner;
