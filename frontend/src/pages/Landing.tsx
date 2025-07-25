import Navbarlogin from "../components/Navbar";
import carImage from "../assets/Car_image.png";
import Allposts from "../components/Allposts";

const LandingPage = () => {

  return (
    <div>
      <Navbarlogin />
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(37, 36, 48, 1) 0%, rgba(9, 9, 121, 0.6) 35%, rgba(0, 212, 255, 0.2) 100%), url(${carImage})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-start text-7xl font-bold text-black shadow-inner-2xl shadow-blue-900  ">
          <div className="p-6 ml-8  ">
            <span className="text-orange-400">Your Journey</span>
            <br />
            <span className="text-white">Your Car</span>
            <br />
            <span className="text-white">Your Journey</span>

            <p className="font-serif text-white text-sm p-5 w-1/3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              explicabo deleniti excepturi quam dolore, dicta perspiciatis
              dolore. Exercitationem, quaerat laboriosam amet ducimus illum
              doloremque voluptas quia dolore pariatur? Vitae delectus pariatur
              consectetur rem!
            </p>
            <button className="mt-8 flex items-center gap-2 bg-red-500 text-sm hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold  ">
              Subscribe <svg
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
      <div className="text-4xl font-semibold p-3">All posts</div>
      <div>
        <Allposts />
      </div>
    </div>
  );
};

export default LandingPage;
