import React from 'react'
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Leaders() {
  return (
    <div className="md:mx-20 mb-16 md:p-10 p-8">
      <h1 className="text-amber-600 text-3xl md:text-4xl font-bold my-4 mt-10 text-center">
        Meet the Leaders Behind AIChE-RGIPT
      </h1>
      <p className="text-slate-900 font-semibold text-lg md:text-xl  my-4  mb-12 md:text-center text-left">
        "Our dynamic leadership team is composed of dedicated and talented
        individuals who drive our chapter's success. With a passion for
        innovation and a commitment to excellence, they guide our members
        towards achieving their full potential in the field of engineering"
      </p>
      <div className="flex justify-center items-center flex-wrap gap-8">
        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../Bhavani.jpg"
              alt="Bhavani Narayanasetti"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-sm font-semibold mb-2">
            Bhavani Narayanasetti
          </div>
          <div className="text-xs text-center mb-1">
            Joint Secretary (External Affairs)
          </div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl "
            href="https://www.linkedin.com/in/bhavani-narayanasetti-41a55b234/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../ankit.jpg"
              alt="Ankit Kumar Gupta"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Ankit Kumar Gupta</div>
          <div className="text-sm">Vice President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/ankit-kumar-gupta-7378b5229/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-56 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center ">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../president.jpg"
              alt="Siddhanth Chatterjee"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Siddhanth Chatterjee</div>
          <div className="text-sm">President</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/siddhanth-chatterjee/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../devesh.jpg"
              alt="Devesh Vishwakarma"
              className="object-cover h-32 rounded-full mb-10 manual-shadow2"
            />
          </div>
          <div className="text-lg font-semibold">Devesh Vishwakarma</div>
          <div className="text-sm">Volunteer Chair</div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/devesh-vishwakarma-388026241/"
          >
            KNOW MORE
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 w-52 h-72 shadow-xl rounded-3xl container">
          <div className="h-32 w-full flex flex-col items-center">
            <LazyLoadImage
              effect={"blur"}
              threshold={100}
              src="../../nimisha.jpg"
              alt="Nimisha Verma"
              className="object-cover h-32 rounded-full mt-2 manual-shadow2"
            />
          </div>
          <div className="text-sm font-semibold mb-2">Nimisha Verma</div>
          <div className="text-xs text-center mb-1">
            Joint Secretary (Internal Affairs)
          </div>
          <a
            className="btn bg-amber-300 text-amber-800 hover:bg-amber-400 px-4 py-2 rounded-xl"
            href="https://www.linkedin.com/in/nimishaverma191/"
          >
            KNOW MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default trackWindowScroll(Leaders);