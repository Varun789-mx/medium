import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { OrbitProgress } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";

interface posts {
  id: string;
  title: string;
  picture?: string;
  content: string;
  published: boolean;
  authorid: string;
}

const Allposts = () => {
  const [posts, setposts] = useState<posts[]>([]);
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    axios
      .get(`${BACKEND_URL}/Allblogs`)
      .then(res => setposts(res.data.data))
      .then(() => setloading(false))
      .catch(e => console.log(e));
  }, []);

  return (
    <>
    
      <div className="font-semibold p-2 pl-5 text-2xl">
        All posts
      </div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="mx-auto max-w-full overflow-hidden rounded-xl flex justify-center bg-white shadow-md md:max-w-full p-5 m-4 gap-4 min-h-[300px]" // Added min-h-[300px]
        >
          <div className="md:flex justify-evenly w-full">
            <div className="md:shrink-0 pl-4 flex-shrink-0">

              {loading ? (
                <OrbitProgress color="#0000FF" size="medium" text="" textColor="" />
              ) : (
                <img
                  src={post.picture}
                  className="h-48 max-w-full object-cover md:h-full md:w-80"
                  alt={post.title}
                />
              )}
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between"> {/* Added flex-1 and flex flex-col justify-between */}
              <div>
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
                  Article
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-indigo-600 transition-colors duration-200">
                  {post.title}
                </h2>
                <div className="flex-1"> {/* This will take up available space */}
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {post.content}
                  </p>
                </div>
              </div>
              <button
                className="mt-8 p-4 flex items-center gap-2 bg-red-500 text-sm hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold self-start" // Added self-start
                onClick={() => {
                  navigate(`/blog/${post.id}`)
                }}
              >
                Read full article
                <svg
                  className="w-4 h-4 rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Allposts;