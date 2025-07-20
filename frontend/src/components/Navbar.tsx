const Navbarlogin = () => {
    return (
        <div className="bg-slate-800 flex justify-between p-4 items-center w-full">
            <div>
                <span>
                    <p className="text-white">Logo</p>
                </span>
            </div>
            <div className="flex justify-evenly my-auto gap-8 align-middle font-semibold  text-white items-center">
                <div>
                    <span>
                        <a href="#" className="focus:font-bold focus:animate-pulse" >
                            <p>Home</p>
                        </a>
                    </span>
                </div>
                <div>
                    <span>
                        <a href="#" className="focus:font-bold focus:animate-pulse " >
                            <p>Blog</p>
                        </a>
                    </span>
                </div> <div>
                    <span>
                        <a href="#" className="focus:font-bold focus:animate-pulse " >
                            <p>About</p>
                        </a>
                    </span>
                </div> <div>
                    <span>
                        <a href="#" className="focus:font-bold focus:animate-pulse " >
                            <p>Contact us</p>
                        </a>
                    </span>
                </div>
                <div>
                    <p>
                        <a className="text-slate-800 font-bold">
                            <div className="bg-white p-2 w-25 rounded-2xl flex justify-center cursor-pointer ">
                                <span>Subscibe</span>
                            </div>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Navbarlogin;
