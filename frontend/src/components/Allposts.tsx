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
  // {
  //   id: "post-002",
  //   title: "The Future of Web Development",
  //   content:
  //     "Web development continues to evolve at a rapid pace. From new frameworks to emerging technologies, developers need to stay current with the latest trends and tools in the industry.",
  //   published: true,
  //   authorid: "author-456",
  // },
  // {
  //   id: "post-003",
  //   title: "Building Scalable APIs",
  //   picture: "https://picsum.photos/800/400?random=2",
  //   content:
  //     "Creating APIs that can handle growth requires careful planning and implementation. This post covers essential patterns and practices for building robust, scalable API services.",
  //   published: false,
  //   authorid: "author-789",
  // },
  // {
  //   id: "post-004",
  //   title: "React Hooks Deep Dive",
  //   picture: "https://picsum.photos/800/400?random=3",
  //   content:
  //     "React Hooks revolutionized how we write React components. Let's explore advanced hook patterns and custom hook creation for better component logic organization.",
  //   published: true,
  //   authorid: "author-123",
  // },
  // {
  //   id: "post-005",
  //   title: "Database Design Principles",
  //   content:
  //     "Good database design is crucial for application performance and maintainability. This article covers normalization, indexing strategies, and common design patterns.",
  //   published: false,
  //   authorid: "author-101",
  // },
  // {
  //   id: "post-006",
  //   title: "CSS Grid vs Flexbox",
  //   picture: "https://picsum.photos/800/400?random=4",
  //   content:
  //     "Understanding when to use CSS Grid versus Flexbox can greatly improve your layout skills. We'll compare both approaches with practical examples and use cases.",
  //   published: true,
  //   authorid: "author-456",
  // },
  // {
  //   id: "post-007",
  //   title: "Testing Strategies for Modern Apps",
  //   content:
  //     "Comprehensive testing ensures code quality and reduces bugs in production. Learn about unit testing, integration testing, and end-to-end testing strategies.",
  //   published: true,
  //   authorid: "author-789",
  // },
  // {
  //   id: "post-008",
  //   title: "Performance Optimization Techniques",
  //   picture: "https://picsum.photos/800/400?random=5",
  //   content:
  //     "Application performance directly impacts user experience. This guide covers various optimization techniques from code splitting to image optimization.",
  //   published: false,
  //   authorid: "author-202",
  // },
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
    <div>
      {posts.map((post) => (
        <div className="flex justify-evenly w-full p-2 gap-4">
          <img src={post.picture} />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Allposts;
