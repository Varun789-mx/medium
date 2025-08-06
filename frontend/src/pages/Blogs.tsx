import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import type { Blogprop } from "../types";
import axios from "axios";
import Avatar from "../components/Avatar";
import { Bell, EllipsisVertical } from "lucide-react";
import { useState, useEffect } from "react";

const BlogsPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<Blogprop | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const getBlog = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                setBlog(response.data.posts);
            } catch (error) {
                setError("Failed to fetch blog");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            getBlog();
        }
    }, [id]);

    if (loading) {
        return <div className="h-screen w-full flex items-center justify-center">Loading...</div>;
    }

    if (!blog) {
        return <div className="h-screen w-full flex items-center justify-center">Error: {error || "Blog not found"}</div>;
    }


    const newContent = blog.content.split(". ");
    return (
        <>
            <nav className="p-2 ">
                <div className=" text-black flex justify-between shadow-xl shadow-blue-100 items-center">
                    <div className="flex justify-between gap-4 p-4 cursor-pointer items-center">
                        <div className="flex gap-2 ">
                            <img src="https://play-lh.googleusercontent.com/amdVXxmfzFRYjoCFSVcfuHjR6IVUf6GSelWcJYfWTJPtsdNrTX8BHRchlcYpmFe1xNyl=w480-h960-rw" className="h-8 w-auto object-contain" />
                            <p className=" text-2xl font-[sans-serif]">SocialCar</p>
                        </div>
                        <p>
                            Drafts in {blog.author.name}'s
                        </p>
                        <p>
                            Saved
                        </p>
                    </div>
                    <div className="flex justify-between gap-4 p-2 items-center">

                        <EllipsisVertical />
                        <Bell />
                        <Avatar name={blog.author.name} size="small" />
                    </div>
                </div>
            </nav>
            <div className="h-screen w-full flex">

                <div className="p-1 m-4 w-3/4 justify-between">
                    <p className="font-bold text-3xl p-2">{blog.title}</p>
                    <img src={blog.picture} className="w-full p-3" />
                    {newContent.filter((_, i) => i % 3 === 0).map((_, i) => (
                        <p className="font-[sans-serif] p-2 text-xl mb-4" key={i}>
                            {newContent.slice(i * 6, i * 6 + 6).join(". ") + "."}
                        </p>
                    ))}

                </div>
                <div className="m-5 flex-col my-11  p-4 w-1/4 align-bottom md:flex  ">
                    <p className="font-bold my-5 pl-7">Author</p>
                    <div className="w-full flex justify-evenly">
                        <div className="mx-auto">
                            {blog.author.profilepic ? <img className="w-10 h-10 rounded-full" src={blog.author.profilepic} alt="Rounded avatar" /> : <Avatar name={blog.author.name} size="big" />}

                        </div>
                        <div>
                            <h2 className="w-full font-bold  space-x-1.5">{blog.author?.name}</h2>
                            <p>
                                {blog.author?.bio}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default BlogsPage;