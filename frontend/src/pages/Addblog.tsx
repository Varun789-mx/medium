import { Bell, EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import Avatar from "../components/Avatar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";


const Addblog = () => {
    const navigate = useNavigate();
    const { userdata } = useAuth();
    const [postdata, setpostdata] = useState({
        title: "",
        content: "",
        picture: "",
        published: Boolean,
        authorid: ""
    })
    

    const handlepostdata = (e: any) => {
        setpostdata({
            ...postdata,
            [e.target.name]: e.target.value
        })

    }
    const Handlesubmit = async () => {
    
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog/add`, {
            title: postdata.title,
            content: postdata.content,
            published:true,
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });
        if (!response) {
            console.log("Error");
        }
        else {
            console.log(response.data)
            navigate(`/blog/${response.data.id}`)

        }
    }
    return (
        <div className="dark:bg-slate-700">
            <nav className="p-2 ">
                <div className=" text-black flex justify-between shadow-xl shadow-blue-100 items-center">
                    <div className="flex justify-between gap-4 p-4 cursor-pointer items-center">
                        <div className="flex gap-2 ">
                            <img src="https://play-lh.googleusercontent.com/amdVXxmfzFRYjoCFSVcfuHjR6IVUf6GSelWcJYfWTJPtsdNrTX8BHRchlcYpmFe1xNyl=w480-h960-rw" className="h-8 w-auto object-contain" />
                            <p className=" text-2xl font-[sans-serif]">SocialCar</p>
                        </div>
                        <p>
                            Drafts in Harsh's
                        </p>
                        <p>
                            Saved
                        </p>
                    </div>
                    <div className="flex justify-between gap-4 p-2 items-center">
                        <button className="bg-orange-500 rounded-2xl w-25 p-2 shadow-xl shadow-blue-200 font-bold text-white focus:bg-blue-600" onClick={Handlesubmit}>Publish</button>
                        <EllipsisVertical />
                        <Bell />
                        <div onClick={()=>navigate('/')} className="cursor-pointer">
                        <Avatar name={userdata?.name || "Harsh"} size="small" />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-8">
                            Create New Blog Post
                        </h1>

                        <div className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="title"
                                    onChange={handlepostdata}
                                    placeholder="Enter your title here..."
                                    className="w-full text-3xl font-bold text-gray-900 placeholder-gray-400 border-none outline-none bg-transparent resize-none"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                />
                            </div>

                            <div className="h-px bg-gray-200"></div>

                            <div>
                                <textarea
                                    name="content"
                                    placeholder="Tell your story..."
                                    onChange={handlepostdata}
                                    className="w-full h-96 text-xl text-gray-700 placeholder-gray-400 border-none outline-none bg-transparent resize-none leading-relaxed"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Addblog;