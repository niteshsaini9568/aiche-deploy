import React from 'react'
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Main() {
  return (
    <div>
      <div className="relative h-full mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-2 shadow-lg ">
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ height: "83vh" }}
        >
          {/* Lazy loading background image */}
          <LazyLoadImage
            src="../../Achievement/1.png" // Ensure the path is correct
            alt="About us background"
            effect="blur"
            className="w-full h-full object-cover brightness-50"
            style={{ height: "83vh", width: "92vw" }}
          />
        </div>
        <div
          className="relative flex items-center justify-center flex-col bg-slate-900 bg-opacity-40 lg:px-20 md:px-16 sm:px-10 px-6 mt-24 rounded-2xl"
          style={{ height: "83vh" }}
        >
          <h1 className="text-amber-400 text-center font-extrabold my-2 dynamic-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Achievements
          </h1>
          <p className="text-slate-50 text-center font-semibold my-3 text-lg sm:text-xl lg:text-xl">
            Welcome to the AIChE-RGIPT Student Chapter, where we celebrate a
            legacy of excellence and the remarkable achievements of our
            distinguished alumni and members. Join us in honoring their
            contributions to the field of chemical engineering and fostering a
            community of innovation and leadership.
          </p>
        </div>
      </div>
    </div>
  );
}

export default trackWindowScroll(Main);
