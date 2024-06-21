import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Events() {
  return (
    <div>
      <div className="hero bg-base-200 md:px-0 px-5 my-10 lg:py-16">
        <div className="hero-content flex-col-reverse  lg:flex-row-reverse">
          <LazyLoadImage
            effect={"blur"}
            threshold={100}
            src="../../Chem-e-versary/17.jpg"
            className="md:max-w-lg rounded-lg shadow-2xl "
          />
          <div>
            <h1 className="md:text-5xl font-bold text-3xl">
              What is Chem-E-Versary ?
            </h1>
            <p className="py-6">
              CHEM-E-VERSARY is an event organized to celebrate hard work,
              dedication, and the commitment of AIChE, RGIPT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default trackWindowScroll(Events);
