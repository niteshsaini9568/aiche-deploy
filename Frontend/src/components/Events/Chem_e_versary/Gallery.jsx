import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


function Gallery() {
  return (
    <div>
      <h1 className="text-center my-8 text-amber-600 text-2xl md:text-3xl font-bold mt-10">
        Gallery
      </h1>
      <div className="flex justify-center items-center mx-10">
        <div className="carousel carousel-center max-w-6xl p-4 mb-10 space-x-4 bg-base-300 rounded-box">
          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/1.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>
          
          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/3.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>
          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/4.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>
          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/5.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>
          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/6.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>
          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/7.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>
          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/8.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>
          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/9.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>
          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/10.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>
          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/11.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>
          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/12.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>

          <div className="carousel-item">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Chem-e-versary/13.jpg"
              className="rounded-box h-96 w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default trackWindowScroll(Gallery);
