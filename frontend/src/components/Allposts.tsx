import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface posts {
    id: string;
    title: string;
    picture?: string;
    content: string;
    published: boolean;
    authorid: string;
}

const testPosts: posts[] = [
    {
        id: "post-001",
        title: "Getting Started with TypeScript",
        picture: "https://picsum.photos/800/400?random=5",
        content:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ipsum cumque corrupti voluptate provident dicta tenetur deleniti ad numquam eius? Inventore, accusantium? Nam fugiat explicabo placeat pariatur assumenda qui iure! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sequi fuga distinctio, corrupti in, cumque fugit labore, quaerat possimus itaque amet sapiente! Doloribus deserunt dolore nobis amet sed quod voluptates! is a powerful superset of JavaScript that adds static typing. In this comprehensive guide, we'll explore the fundamentals and best practices for getting started with TypeScript development.",
        published: true,
        authorid: "author-123",
    },
    {
        id: "post-002",
        title: "The Future of Web Development",
        picture: "https://picsum.photos/800/400?random=5",
        content:
            "Web development continues to evolve at a rapid pace. From new frameworks to emerging technologies, developers need to stay current with the latest trends and tools in the industry.",
        published: true,
        authorid: "author-456",
    },
    {
        id: "post-003",
        title: "Building Scalable APIs",
        picture: "https://picsum.photos/800/400?random=2",
        content:
            "Creating APIs that can handle growth requires careful planning and implementation. This post covers essential patterns and practices for building robust, scalable API services.",
        published: false,
        authorid: "author-789",
    },
    {
        id: "post-004",
        title: "React Hooks Deep Dive",
        picture: "https://picsum.photos/800/400?random=3",
        content:
            "React Hooks revolutionized how we write React components. Let's explore advanced hook patterns and custom hook creation for better component logic organization.",
        published: true,
        authorid: "author-123",
    },
    {
        id: "post-005",
        title: "Database Design Principles",
        picture: "https://picsum.photos/800/400?random=5",
        content:
            "Good database design is crucial for application performance and maintainability. This article covers normalization, indexing strategies, and common design patterns.",
        published: false,
        authorid: "author-101",
    },
    {
        id: "post-006",
        title: "CSS Grid vs Flexbox",
        picture: "https://picsum.photos/800/400?random=4",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, repellendus delectus magnam vel obcaecati adipisci nostrum dolore voluptate neque corrupti, in, error laudantium voluptatibus accusamus libero impedit consequuntur ratione aperiam!Understanding when to use CSS Grid versus Flexbox can greatly improve your layout skills. We'll compare both approaches with practical examples and use cases.",
        published: true,
        authorid: "author-456",
    },
    {
        id: "post-007",
        title: "Testing Strategies for Modern Apps",
        picture: "https://picsum.photos/800/400?random=4",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ex dicta nisi officiis adipisci deleniti enim impedit dolor alias repellendus facere exercitationem laboriosam possimus ipsam laborum at eum veniam modi?Comprehensive testing ensures code quality and reduces bugs in production. Learn about unit testing, integration testing, and end-to-end testing strategies.",
        published: true,
        authorid: "author-789",
    },
    {
        id: "post-008",
        title: "Performance Optimization Techniques",
        picture: "https://picsum.photos/800/400?random=5",
        content:
            "Application performance directly impacts user experience. This guide covers various optimization techniques from code splitting to image optimization.",
        published: false,
        authorid: "author-202",
    },
];
const Allposts = () => {
    const [posts, setposts] = useState<posts[]>([]);
    useEffect(() => {
        //   axios
        //     .get(`${BACKEND_URL}/Allblogs`)
        //     .then((res: posts) => setposts(res.));
        setposts(testPosts);
    }, []);

    return (
        <>            {posts.map((post) => (
            <div className="mx-auto max-w-full overflow-hidden rounded-xl bg-white shadow-md md:max-w-full p-5 m-4 gap-4">
                <div className="md:flex justify-evenly">
                    <div className="md:shrink-0"> <img src={post.picture} className="h-48 w-full object-cover md:h-full md:w-80" /></div>

                    <div className="p-8">
                        <div className="text-sm font-semibold tracking-wide  uppercase">
                        <p className="mt-1 block pl-2 leading-tight font-bold text-2xl hover:underline">{post.title}</p>
                        <p className="font-arial  m-5">{post.content}</p>
                        </div>
                        <button className="mt-8 p-4 flex items-center gap-2 bg-red-500 text-sm hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold  ">
                            Read full article<svg
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
                        </button></div>
                </div>
            </div>
        ))}
        </>

    );
}; 2

export default Allposts;
