import Navbarlogin from "../components/Navbar";

import carImage from "../assets/Car_image.png"

const LandingPage = () => {
    return (
        <div>
            <Navbarlogin />
            <div className="drop-shadow-blue-800 h-3/4 ">
            <div className="absoulte inset-0 flex items-center">
                <span>
                    Your Journey
                </span>
                <br/>
                <span>
                    Your Car
                </span>
            </div>
                <img src={carImage}/>
            </div>
        </div>
    )
}

export default LandingPage;