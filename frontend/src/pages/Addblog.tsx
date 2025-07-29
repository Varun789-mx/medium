const Addblog = () => {
    return (
        <div>
            <div className="p-4 mx-5">
                <input type="text" placeholder="Title" className="placeholder:text-3xl h-25 p-4 font-bold text-3xl w-full bg-transparent"></input>
                <textarea placeholder="Tell your Story..." className=" placeholder:text-2xl  p-4 font-[sans-serif] text-2xl w-full h-screen "></textarea>
            </div>
        </div>
    )
}

export default Addblog;