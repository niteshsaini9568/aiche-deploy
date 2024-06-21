import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";


const testimonialList = [
	{
		img: "devesh.jpg",
		name: "Devesh Vishwakarma",
		position: "Volunteer Chair, AIChE-RGIPT",
		content:
			"Hello, I am Devesh Vishwakarma, the Volunteer Chair of the AIChE-RGIPT Student Chapter. Being associated with AIChE-RGIPT for almost 3 years now. AIChE-RGIPT is a premium student body to hone one’s professional skills and learn about real-world working scenarios. With the launch of this new platform, I hope we connect and collaborate towards unprecedented heights of success...",
	},
	
	{
		img : "./ankit.jpg",
		name: "Ankit Kumar Gupta",
		position: "Vice-President, AIChE-RGIPT",
		content:
			"Hi, I am Ankit Kumar Gupta, currently the Vice President of the AIChE-RGIPT Student Chapter. I am elated to welcome you all to our latest platform, the official AIChE-RGIPT website. Our chapter aims to nurture and provides the perfect pathway for our students to succeed in the ever evolving field of  chemical engineering. Welcome once again to the AIChE-RGIPT community!",
	},
	{
		img: "./Bhavani.jpg",
		name: "Bhavani Narayanasetti",
		position: "Joint Secretary-External Affairs, AIChE-RGIPT",
		content:
			"Hello and welcome to the official website of the AIChE-RGIPT Student Chapter, I am Bhavani Narayanasetti, the Joint secretary of external affairs. Serving the chapter for the past couple of years, I have seen it only growing in stature...I invite you all to collaborate and explore our community and foster the sense of collaboration even further...",
	},
	
	{
		img: "./nimisha.jpg",
		name: "Nimisha Verma",
		position: "Joint Secretary-Internal Affairs, AIChE-RGIPT",
		content:
			"A warm welcome to the official website of the AIChE-RGIPT Student Chapter! I am Nimisha Verma, the Joint Secretary of Internal Affairs. Our fraternity focuses on member engagement, fostering a collaborative environment to drive the chapter towards success. Let's connect and explore some never seen before peaks of success...",
	},
	
	
];

const Testimonial18 = () => {
	const [index, setIndex] = useState(0);
	const { img, name, position, content } = testimonialList[index];

	const handleSelect = (selectedIndex) => setIndex(selectedIndex);
	
	  

	return (
		
		<section className="ezy__testimonial18 light py-14 md:py-10 bg-white  text-zinc-900 dark:text-black z-[1] md:mx-20">
			<div className=" px-4 mx-auto">
				<div>
					<div>
						<p className="relative text-md md:text-[20px]  font-bold mb-6 md:mb-12 text-center z-[1]">
							<FontAwesomeIcon
								icon={faQuoteLeft}
								className="absolute -top-20 left-0 md:-top-3/4 text-[70px] text-yellow-600 text-opacity-50 -z-[1]"
							/>
							{content}
							<FontAwesomeIcon
								icon={faQuoteRight}
								className="absolute -bottom-20 right-0 md:-bottom-2/3 text-[70px] text-yellow-600 text-opacity-50 -z-[1]"
							/>
						</p>
						<div className="text-center">
							<div className="mr-3">
								<img
									src={img}
									alt={name}
									className="w-20 h-20 rounded-full mb-4 mx-auto"
								/>
							</div>
							<div>
								<h4 className="text-xl font-medium mb-2">{name}</h4>

								<p className="opacity-80">{position}</p>
							</div>
						</div>
					</div>
					<div className="flex justify-center gap-2 m-0 mt-12">
						{testimonialList.map((item, i) => (
							<button
								className={`w-3 h-3 rounded-full ${
									index === i
										? "scale-125 bg-yellow-600"
										: " bg-gray-400 dark:bg-slate-800"
								} `}
								key={i}
								onClick={() => handleSelect(i)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Testimonial18;