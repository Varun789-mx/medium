import Navbarlogin from "../components/Navbar";

import carImage from "../assets/Car_image.png";

const LandingPage = () => {
  return (
    <div>
      <Navbarlogin />
      <div className="drop-shadow-blue-800 h-3/4 ">
        <div className="absolute inset-1.5 flex items-start text-7xl font-bold text-black ">
          <div className="p-6  mt-60 align-top ">
            <span>Your Journey</span>
            <br />
            <span>Your Car</span>
          </div>
        </div>
        <div className="block h-2/3 overflow-hidden">
        <img src={carImage} className="h-2/3" />
      </div>
      <div className="block h-2/3 overflow-hidden">
        <img src={carImage} className="h-2/3" />
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
