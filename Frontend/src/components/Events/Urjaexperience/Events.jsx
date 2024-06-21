import React from 'react'
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Events() {
  return (
    <div>
      <div className="hero bg-base-200 md:px-0 px-5 lg:py-16">
        <div className="hero-content flex-col-reverse  lg:flex-row-reverse">
          <LazyLoadImage
            effect={"blur"}
            threshold={100}
            src="../../Urjaexperience/5.jpg"
            className="md:max-w-lg rounded-lg shadow-2xl "
          />
          <div>
            <h1 className="md:text-5xl font-bold text-3xl mb-4">
              What is UrjaXperience ?
            </h1>
            <p>
              <i>
                "A Tri-Molecular Tournament: Where Students Connect & Ideas
                Catalyse"
              </i>
            </p>
            <p className="py-6">
              At the heart of our exploration lies the tangled world of
              molecular structures. These microscopic components are the gateway
              to the essence of matter which spell bounded and delved us into
              the fascinating beauty of molecular wonders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default trackWindowScroll(Events);