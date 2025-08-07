import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { BACKEND_URL } from "../config";
// import useTheme from "../Hooks/useTheme";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    // const [isDark, setIsDark] = useTheme();
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    // const handleTheme = () => {
    //     if (!isDark) {

    //     }
    //     else {
    //     }
    // }
    const handleformData = (e: any) => {
        const { name, type, value, checked } = e.target;
        setformData(prevdata => ({
            ...prevdata,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }
    const handlesubmit = async () => {
        if (!formData.email || !formData.password || !formData.password || !formData.confirmpassword) {
            alert("Please fill in all fields");
            return;
        }
        if (formData.password != formData.confirmpassword) {
            alert("Passwords doesn't match");
            return;
        }
        const finalsignupdata = {
            name: formData.name,
            email: formData.email,
            password: formData.password
        }
        try {
            setloading(true);
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, formData)
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate('/');

        } catch (error) {
            console.log(error);
            return;
        }
        console.log(formData);
        console.log(finalsignupdata);
    }


    return (

        <div className="flex h-screen w-full bg-gray-50 flex-col justify-center dark:bg-gray-800 align-center items-center">
           
            <div className=" shadow-2xl border-zinc-950 shadow-blue-400 bg-slate-100 dark:bg-gray-900 rounded-2xl w-full md:w-1/3 p-4">

                <h1 className="text-xl flex justify-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>

                <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Name </label>
                <div className="flex p-1 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-primary-600 focus-within:border-primary-600 focus-within:border-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:focus-within:ring-2 dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
                    <input
                        type="text"
                        name="name"
                        disabled={loading}
                        value={formData.name}
                        onChange={handleformData}

                        className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
                        placeholder="Joe simpson"
                    />
                </div>
                <br />
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <div className="flex p-1 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-primary-600 focus-within:border-primary-600 focus-within:border-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:focus-within:ring-2 dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
                    <input
                        type="text"
                        disabled={loading}
                        name="email"
                        value={formData.email}
                        onChange={handleformData}
                        className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
                        placeholder="Joe@gmail.com"
                    />
                </div> <br />


                <label htmlFor="password" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <div className="flex p-1 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-primary-600 focus-within:border-primary-600 focus-within:border-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:focus-within:ring-2 dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
                    <input
                        type={showPassword ? "text" : "password"}
                        onChange={handleformData}
                        name="password"
                        disabled={loading}
                        value={formData.password}
                        className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
                        placeholder="Password"
                    />
                    <button
                        type="button"
                        onClick={() => setshowPassword(!showPassword)}
                        className="focus:outline-none dark:text-gray-300"
                    >
                        {showPassword ? <Eye /> : <EyeOff />}
                    </button>
                </div>
                <br />

                <label htmlFor="confirmpassword" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
                <div className="flex p-1 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-primary-600 focus-within:border-primary-600 focus-within:border-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:focus-within:ring-2 dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
                    <input
                        type={showPassword ? "text" : "password"}
                        onChange={handleformData}
                        disabled={loading}
                        name="confirmpassword"
                        value={formData.confirmpassword}
                        className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
                        placeholder="Password"
                    />
                    <button
                        type="button"
                        onClick={() => setshowPassword(!showPassword)}
                        className="focus:outline-none dark:text-gray-300"
                    >
                        {showPassword ? <Eye /> : <EyeOff />}
                    </button>
                </div>
                <div className="flex items-start p-2">
                    <div>
                        <input disabled={loading} type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-semibold dark:text-gray-300">I accept <a href="#" className="font-bold text-primary-600 hover:underline dark:text-primary-500">terms & conditions</a></label>
                    </div>
                </div>
                <button type="submit" disabled={loading} onClick={handlesubmit} className="w-full bg-slate-800   text-white hover:bg-slate-900 disabled:bg-slate-300 p-3 font-bold rounded-2xl mt-4 dark:bg-blue-500 dark:hover:bg-blue-600 dark:hover:disabled:bg-blue-200 transition-colors"  >{loading ? "Creating..." : "Create account"}</button>
                <p className="text-sm font-semibold  cursor-pointer flex justify-center my-3 text-gray-700 m-2 dark:text-white ">
                    Already have an account ? <a href="#" className="font-bold text-primary-600 hover:underline">Login here</a>
                </p>
            </div>
        </div>
    )
}


export default Signup;