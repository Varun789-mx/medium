

const Signup = () => {
    return (

        <div className="flex h-screen w-full flex-col justify-center bg-gray-950 align-center items-center ">
            <div className="border-2  bg-gray-900 rounded-2xl  w-full md:w-1/3 p-4 ">

                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>
                <form className="p-4">
                    <label form="Email">Full Name </label>
                    <input type="text" className="bg-gray-50 border border-gray-500 focus:border-2 focus:border-blue-900 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joe simpson" />
                    <br />
                    <label form="">Email</label>
                    <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="joe123@gmail.com" />
                    <br />
                    <label form="">Password</label>
                    <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                    <br />
                    <label form="">Confirm Password</label>
                    <input type="text" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoComplete="true" />
                    <div className="flex items-start p-2">
                        <div>
                            <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label form="" className="font-light text-gray-300">I accept <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">terms & conditions</a></label>
                        </div>
                    </div>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 p-3  font-bold rounded-2xl mt-5">Create account</button>
                    <p className="text-sm font-semibold text-gray-400 m-2">
                        Already have an account ? <a href="#" className="font-medium text-primary-600 hover:underline">Login here</a>
                    </p>
                </form>
            </div>
        </div>
    )
}


export default Signup;