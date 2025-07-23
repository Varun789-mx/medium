import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface posts {
    id: string;
    title: string;
    content: string;
    published: boolean;
    authorid: string;
}
const Allposts = () => {
    const [posts, setposts] = useState<posts[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/Allblogs`)
            .then((res) => console.log(res.data))
    }, [])
return (
    <div>
        {posts.map((post)=>
        <div>
        <div>
            <img src={post?.picture}/>
            </div>
            <div>
                
                </div>
            </div>)}
    </div>
)
}

export default Allposts