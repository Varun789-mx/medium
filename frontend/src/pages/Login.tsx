import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    const handleFormData = (e:any) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Basic validation
        if (!formData.email || !formData.password) {
            alert("Please fill in all fields");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert("Please enter a valid email address");
            return;
        }

        setLoading(true);

        try {
            // Replace this with your actual API call using fetch or axios
            const response = await axios.post('${BACKEND_URL}/api/v1/user/login', FormData);

            if (response.status == 200) {
             
                console.log("Login successful:");
                alert("Login successful!");
                // Handle successful login (e.g., save token, redirect)
            } else {
                throw new Error('Login failed');
            }

        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen w-full bg-gray-50 flex-col justify-center dark:bg-gray-950 items-center">
            <div className="shadow-2xl shadow-blue-400 bg-gray-50 dark:bg-gray-900 rounded-2xl w-full md:w-1/3 p-6">
                <h1 className="text-xl flex justify-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-6">
                    Sign in to your account
                </h1>

                <div onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email
                        </label>
                        <div className="flex p-1 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 dark:bg-gray-700 dark:border-gray-600">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormData}
                                className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
                                placeholder="joe@gmail.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password
                        </label>
                        <div className="flex p-1 bg-gray-50 rounded-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 dark:bg-gray-700 dark:border-gray-600">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleFormData}
                                className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-0"
                                placeholder="Password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="focus:outline-none dark:text-gray-300 px-2"
                            >
                                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300 p-3 font-bold rounded-2xl mt-4 transition-colors"
                    >
                        {loading ? "Signing in..." : "Sign in"}
                    </button>
                </div>

                <p className="text-sm font-semibold text-gray-700 m-4 text-center dark:text-white">
                    Don't have an account? <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up here</a>
                </p>
            </div>
        </div>
    );
};

export default Login;