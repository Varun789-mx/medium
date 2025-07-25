import { useState } from "react";
import Hamburger from "hamburger-react";

const Navbarlogin = () => {
  const [isopen, setisopen] = useState(false);
  return (
    <header className="">
    <div className="  bg-slate-800  md:flex justify-between p-4 items-center w-full">
      <div  className="md:flex md:justify-center">
        <span>
          <p className="text-white">Logo</p>
        </span>
      </div>
      <div className=" hidden md:flex justify-evenly my-auto gap-8 align-middle font-semibold  text-white items-center">
        <div>
          <span>
            <a href="#" className="focus:font-bold focus:animate-pulse">
              <p>Home</p>
            </a>
          </span>
        </div>
        <div>
          <span>
            <a href="#" className="focus:font-bold focus:animate-pulse ">
              <p>Blog</p>
            </a>
          </span>
        </div>{" "}
        <div>
          <span>
            <a href="#" className="focus:font-bold focus:animate-pulse ">
              <p>About</p>
            </a>
          </span>
        </div>{" "}
        <div>
          <span>
            <a href="#" className="focus:font-bold focus:animate-pulse ">
              <p>Contact us</p>
            </a>
          </span>
        </div>
        <div>
          <a className="text-slate-800 font-bold">
            <div className="bg-white p-2 w-25 rounded-2xl flex justify-center cursor-pointer ">
              <span>Subscibe</span>
            </div>
          </a>
        </div>
      </div>
      <button
        className="md:hidden text-white"
        onClick={() => setisopen(!isopen)}
      >
        <Hamburger toggled={isopen} size={24} />
      </button>
      {isopen && (
        <div className="absolute top-16 left-0  w-full right-0 bg-slate-900 bg-background/80 border-b ">
          <div className="flex flex-col gap-4 py-4 px-6 text-white">
            <a
              href="#Feature"
              className="p-4 hover:text-blue-500 "
              onClick={() => setisopen(false)}
            >
              Features
            </a>
            <a
              href="#howitworks"
              className="p-4 hover:text-blue-500 "
              onClick={() => setisopen(false)}
            >
              How it works
            </a>
            <a
              href="#Testimonial"
              className="p-4 hover:text-blue-500 "
              onClick={() => setisopen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="p-4 hover:text-blue-500 "
              onClick={() => setisopen(false)}
            >
              Pricing
            </a>
          </div>
        </div>
      )}
    </div>
    </header>
  );
};
export default Navbarlogin;
