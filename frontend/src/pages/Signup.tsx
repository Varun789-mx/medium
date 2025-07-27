import axios from "axios";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { BACKEND_URL } from "../config";


const Signup = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const handleformdata = (e: any) => {
        const { name, type, value, checked } = e.target;
        setformdata(prevdata => ({
            ...prevdata,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }
    const handlesubmit = () => {
        if (formdata.password != formdata.confirmpassword) {
            alert("Passwords doesn't match");
            return;
        }
        const finalsignupdata = {
            name: formdata.name,
            email: formdata.email,
            password: formdata.password
        }
        try {
            axios.post(`${BACKEND_URL}/api/v1/user/signup`, formdata).then((res) => alert(res.data)).catch((error) => alert(error));
        } catch (error) {
            console.log(error);
            return;
        }
        console.log(formdata);
        console.log(finalsignupdata);
    }


    return (

        <div className="flex h-screen w-full bg-gray-50 flex-col justify-center dark:bg-gray-950 align-center items-center">
            <div className=" shadow-2xl shadow-blue-400 bg-gray-50 dark:bg-gray-900 rounded-2xl w-full md:w-1/3 p-4">

                <h1 className="text-xl flex justify-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>

                <label htmlFor="Email" className="">Full Name </label>
                <div className="flex p-1 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-primary-600 focus-within:border-primary-600 focus-within:border-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:focus-within:ring-2 dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
                    <input
                        type="text"
                        name="name"
                        value={formdata.name}
                        onChange={handleformdata}

                        className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
                        placeholder="Joe simpson"
                    />
                </div>
                <br />
                <label htmlFor="">Email</label>
                <div className="flex p-1 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-primary-600 focus-within:border-primary-600 focus-within:border-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:focus-within:ring-2 dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
                    <input
                        type="text"
                        name="email"
                        value={formdata.email}
                        onChange={handleformdata}
                        className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
                        placeholder="Joe@gmail.com"
                    />
                </div> <br />


                <label htmlFor="">Password</label>
                <div className="flex p-1 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-primary-600 focus-within:border-primary-600 focus-within:border-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:focus-within:ring-2 dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
                    <input
                        type={showPassword ? "text" : "password"}
                        onChange={handleformdata}
                        name="password"
                        value={formdata.password}
                        className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
                        placeholder="Password"
                    />
                    <button
                        type="button"
                        onClick={() => setshowPassword(!showPassword)}
                        className="focus:outline-none dark:text-gray-300"
                    >
                        {showPassword ? <Eye /> : <EyeClosed />}
                    </button>
                </div>
                <br />

                <label htmlFor="">Confirm Password</label>
                <div className="flex p-1 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-primary-600 focus-within:border-primary-600 focus-within:border-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:focus-within:ring-2 dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
                    <input
                        type={showPassword ? "text" : "password"}
                        onChange={handleformdata}
                        name="confirmpassword"
                        value={formdata.confirmpassword}
                        className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
                        placeholder="Password"
                    />
                    <button
                        type="button"
                        onClick={() => setshowPassword(!showPassword)}
                        className="focus:outline-none dark:text-gray-300"
                    >
                        {showPassword ? <Eye /> : <EyeClosed />}
                    </button>
                </div>
                <div className="flex items-start p-2">
                    <div>
                        <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-semibold dark:text-gray-300">I accept <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">terms & conditions</a></label>
                    </div>
                </div>
                <button type="submit" onClick={handlesubmit} className="w-full bg-blue-500 text-gray-50 hover:bg-blue-600 p-3 dark:text-white  font-bold rounded-2xl mt-5" >Create account</button>
                <p className="text-sm font-semibold  text-gray-700 m-2 dark:text-white ">
                    Already have an account ? <a href="#" className="font-medium text-primary-600 hover:underline">Login here</a>
                </p>
            </div>
        </div>
    )
}


export default Signup;