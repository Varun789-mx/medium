import type { Blogprop } from "../types";

const BlogsPage = ({ blog }: { blog: Blogprop }) => {
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
                            src={blog.author.profileimg} />
                    </div>
                    <div>
                        <h2 className="w-full font-bold  space-x-1.5">{blog.author.name}</h2>
                        <p>
                            {blog.author.bio}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default BlogsPage;