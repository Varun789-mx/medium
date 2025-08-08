import { useState } from "react";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Avatar from "./Avatar";
import { useAuth } from "../Hooks/useAuth";

const Navbarlogin = () => {
  const [isopen, setisopen] = useState(false);
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  const { loggedin, logout, userdata } = useAuth();
  console.log(loggedin, "Logged in");

  return (
    <header className="relative">
      <div className="  bg-slate-800  md:flex justify-between p-4 items-center w-full ">
        <div className="md:flex md:justify-center">
          <div className="flex gap-2 ">
            <img src={logo} className="h-8 w-auto object-contain" />
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
              <a
                href="/addblog"
                className="focus:font-bold focus:animate-pulse "
              >
                <p>Blog</p>
              </a>
            </span>
          </div>{" "}
          <div>
            <span>
              <a 
                href="https://x.com/Hash_module" 
                className="focus:font-bold focus:animate-pulse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>About</p>
              </a>
            </span>
          </div>{" "}
          <div>
            <span>
              <a 
                href="https://github.com/Varun789-mx" 
                className="focus:font-bold focus:animate-pulse"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Contact us</p>
              </a>
            </span>
          </div>
          <div>
            {loggedin ? (
              <div onClick={() => setshow(!show)} className="cursor-pointer">
                <Avatar size="small" name={userdata?.name || "Harsh"} />
                {show && (
                  <div className="relative inline-block">
                    <div
                      onClick={logout}
                      className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      Log Out
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-white p-2 text-sm text-black font-bold rounded-2xl focus:bg-slate-300 transition-colors duration-300"
              >
                Subscribe
              </button>
            )}
          </div>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setisopen(!isopen)}
        >
          <Hamburger toggled={isopen} size={24} />
        </button>
        {isopen && (
          <div className="absolute top-full left-0  w-full right-0 bg-slate-800 z-50  border-b ">
            <div className="flex flex-col gap-4 py-4 px-6 text-white">
              <a
                href="#Feature"
                className="p-4 hover:text-blue-500 "
                onClick={() => setisopen(false)}
              >
                Home
              </a>
              <a
                href="#howitworks"
                className="p-4 hover:text-blue-500 "
                onClick={() => setisopen(false)}
              >
                Blog
              </a>
              <a
                href="https://github.com/Varun789-mx"
                className="p-4 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setisopen(false)}
              >
                Contact
              </a>
              <a
                href="https://x.com/Hash_module"
                className="p-4 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setisopen(false)}
              >
                About
              </a>
              <a
                href="#"
                className="p-4 hover:text-blue-500"
                onClick={() => {
                  {
                    loggedin ? logout() : navigate("/login");
                  }
                  setisopen(false);
                }}
              >
                {loggedin ? "Log out" : "Log in"}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Navbarlogin;