const Navbarlogin = () => {
    return (

        <header className="flex justify-evenly ">
            <div className="bg-slate-800">
                <div>
                    <span>
                        <p>Logo</p>
                    </span>
                </div>
                <div className="flex justify-evenly">
                    <div>
                        <p>
                            <a className="text-white">
                                Home
                            </a>
                        </p>
                    </div>
                    <div>
                        <p>
                            <a className="text-white">
                                Blogs
                            </a>
                        </p>
                    </div>
                    <div>
                        <p>
                            <a className="text-white">
                                About
                            </a>
                        </p>
                    </div>
                    <div>
                        <p>
                            <a className="text-white">
                                Contact us
                            </a>
                        </p>
                    </div>
                    <div>
                        <p>
                            <a className="text-white">
                                <div className="bg-white p-4 rounded-2xl">
                                    <p>Subscibe</p>
                                </div>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbarlogin;