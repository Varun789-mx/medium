import { useState } from "react";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbarlogin = () => {
  const [isopen, setisopen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="">
      <div className="  bg-slate-800  md:flex justify-between p-4 items-center w-full ">
        <div className="md:flex md:justify-center">
          <div className="flex gap-2 ">
           <img src={logo} className="h-8 w-auto object-contain"  />
           <p className="text-white text-3xl font-[sans-serif]">SocialCar</p>
          </div>
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
              <a href="/addblog" className="focus:font-bold focus:animate-pulse ">
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
            <button onClick={() => navigate('/login')} className="bg-white p-2 text-sm text-black font-bold rounded-2xl focus:bg-slate-300 transition-colors duration-300">
              Subscribe
            </button>
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
