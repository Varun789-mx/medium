import Navbarlogin from "../components/Navbar";
import carImage from "../assets/Car_image.png";
import Allposts from "../components/Allposts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";


const LandingPage = () => {
  const navigate = useNavigate();
  const { loggedin } = useAuth();


  return (
    <div>
      <Navbarlogin />
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(37, 36, 48, 1) 0%, rgba(9, 9, 121, 0.6) 35%, rgba(0, 212, 255, 0.2) 100%), url(${carImage})`,
        }}
      >
        <div className="md:absolute inset-0 flex items-center justify-start text-7xl font-bold text-black shadow-inner-2xl shadow-blue-900  ">
          <div className="p-6 ml-8  ">
            <span className="text-orange-400">Your Journey</span>
            <br />
            <span className="text-white">Your Car</span>
            <br />
            <span className="text-white">Your Journey</span>

            <p className="font-[sans-serif] text-white text-sm p-5 font-thin w-full md:w-1/3 ">
              At that moment, she realized that she had created her current life. It wasn't the life she wanted, but she took responsibility for how it currently stood. Something clicked and she saw that every choice she made to this point in her life had led to where her life stood at this very moment
            </p>
            <button className="mt-8 flex items-center gap-2 bg-red-500 text-sm hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold " 
            onClick={() => {!loggedin? (navigate('/')):(navigate('/login'))} }>
              {loggedin ? "Subscribed" : "Subscribe"}<svg
                className="w-4 h-4 rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Allposts />
      </div>
    </div>
  );
};

export default LandingPage;
