import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import type { Blogprop } from "../types";
import axios from "axios";
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
                
                 console.log(blog,"From blog")
            } catch (error) {
                console.error(error);
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
        return <div className="h-screen w-full flex items-center justify-center">Error: { error ||"Blog not found"}</div>;
    }

 
 const newContent = blog.content.split(". ");
    return (
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
            <div className="m-5 my-11  p-4 w-1/4 align-bottom">
                <p className="font-bold">Author</p>
                <div className="w-full flex  justify-evenly">
                    <div className="w-full ">
                        <img className=" w-12 block rounded-full"
                            src={blog.author?.profileimg} />
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
    )
}
export default BlogsPage;