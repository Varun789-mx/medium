import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
// import { BACKEND_URL } from "../config";
// import axios from "axios";

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
    picture: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    content:
      "TypeScript is a powerful superset of JavaScript that adds static typing, enabling developers to catch errors early and build more robust applications. It integrates seamlessly with modern frameworks and tooling, making it a great choice for both frontend and backend development. With TypeScript, you can define interfaces, leverage powerful generics, and enjoy improved IDE support. This guide will walk you through setting up a TypeScript environment, understanding type annotations, and how to gradually migrate existing JavaScript code. Additionally, we'll cover common pitfalls and how to avoid them. Whether you're building a large-scale web app or just exploring typed JavaScript, TypeScript provides the scalability and maintainability modern applications demand. From configuring `tsconfig.json` to using utility types like `Partial` and `Pick`, this article is your gateway to mastering TypeScript fundamentals. You'll also get hands-on experience with classes, interfaces, enums, and type unions. By the end, you'll be confident enough to use TypeScript in any project.",
    published: true,
    authorid: "author-123",
  },
  {
    id: "post-002",
    title: "The Future of Web Development",
    picture: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    content:
      "Web development is constantly evolving, driven by rapid advances in technology and user expectations. The future points toward more interactive, immersive experiences powered by WebAssembly, AI integrations, and increasingly powerful frameworks like Svelte and SolidJS. Developers are also exploring edge computing and serverless architectures for faster, more resilient applications. In this article, we’ll explore trends such as the rise of Jamstack, the importance of performance-first design, and the increased use of automation and low-code tools. The developer experience is improving too, with tools like Vite and modern CI/CD pipelines simplifying workflows. Moreover, accessibility, security, and privacy are taking center stage, influencing how we architect front-ends and back-ends alike. Collaboration tools are also transforming how teams work in real-time. Keeping up with these changes ensures not only relevance in the field but the ability to build truly next-gen digital experiences that users love and businesses rely on.",
    published: true,
    authorid: "author-456",
  },
  {
    id: "post-003",
    title: "Building Scalable APIs",
    picture: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    content:
      "Creating scalable APIs is essential in modern application development where reliability and performance under load are critical. This post dives into architectural best practices like REST vs. GraphQL, rate limiting, versioning strategies, and caching layers. We also explore authentication and authorization best practices using OAuth 2.0 and JWTs. When building APIs, you must consider how they handle concurrent requests, ensure proper logging and monitoring, and support automated testing. Utilizing tools like Postman for testing, Swagger/OpenAPI for documentation, and services like AWS API Gateway or Express.js for server-side implementation can enhance your workflow significantly. You'll learn how to structure endpoints for flexibility, manage environment variables securely, and integrate API gateways for traffic routing and load balancing. By implementing robust error handling, database connection pooling, and efficient response structures, you'll be prepared to build APIs that scale gracefully with demand. Whether you're creating microservices or a monolith, these strategies will set your API up for long-term success.",
    published: false,
    authorid: "author-789",
  },
  {
    id: "post-004",
    title: "React Hooks Deep Dive",
    picture: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    content:
      "React Hooks changed the way developers write components by enabling functional components to manage state and side effects. In this deep dive, we’ll explore the core hooks like `useState`, `useEffect`, and `useRef`, and progress into custom hooks that abstract repetitive logic for cleaner, reusable components. We'll analyze performance impacts of improper hook usage, how dependencies affect effect triggers, and when memoization with `useMemo` or `useCallback` is appropriate. Debugging hooks can be tricky, so we’ll cover tools and strategies for tracing hook execution flow. Advanced patterns such as using context with hooks, reducer logic with `useReducer`, and synchronizing with external systems will also be demonstrated. You'll gain insight into how hooks make your code more declarative and modular, fostering better scalability. By mastering React Hooks, you'll write components that are more predictable, testable, and aligned with the best practices of modern frontend architecture.",
    published: true,
    authorid: "author-123",
  },
  {
    id: "post-005",
    title: "Database Design Principles",
    picture: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    content:
      "A well-structured database is the backbone of any high-performing application. In this article, we dive deep into essential database design principles, including normalization, data integrity, indexing, and scalability strategies. We’ll compare relational vs. non-relational databases and when to use each. You'll learn how to avoid redundant data, set up foreign key constraints, and create indexes that speed up query performance. Proper schema planning helps reduce maintenance headaches and supports future application growth. We’ll also touch on advanced topics like database sharding, denormalization trade-offs, and read-write optimization. Understanding ACID compliance, transaction handling, and backup strategies ensures that your data remains consistent and reliable. With examples from real-world systems, this post will give you the knowledge to structure databases that are resilient, efficient, and built to last, whether you're using PostgreSQL, MongoDB, or MySQL.",
    published: false,
    authorid: "author-101",
  },
  {
    id: "post-006",
    title: "CSS Grid vs Flexbox",
    picture: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    content:
      "Understanding CSS Grid and Flexbox is essential for crafting responsive layouts. While Flexbox excels at one-dimensional layouts, CSS Grid is better for two-dimensional arrangements. This article walks through the strengths and limitations of each, using real-world examples to illustrate use cases. We’ll design a dashboard layout, a navigation bar, and a responsive card grid to showcase how both systems can work independently and together. You’ll also learn about alignment properties, nested grids, implicit vs. explicit tracks, and auto-placement. Debugging layout issues becomes much easier with browser DevTools, and we’ll demonstrate how to use them effectively. Additionally, we’ll explore media queries in tandem with these layout tools to create fluid and accessible designs. Knowing when and how to use Grid vs Flexbox will empower you to build visually appealing and user-friendly interfaces across devices. Whether you're starting from a mobile-first mindset or designing complex UIs, mastering both is key to frontend excellence.",
    published: true,
    authorid: "author-456",
  },
  {
    id: "post-007",
    title: "Testing Strategies for Modern Apps",
    picture: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    content:
      "Comprehensive testing is vital for modern software development. It ensures code quality, reduces bugs in production, and facilitates maintainability. This post explores key testing strategies including unit testing, integration testing, and end-to-end testing. We’ll break down the tools and frameworks commonly used in the JavaScript ecosystem like Jest, Mocha, Cypress, and Playwright. You’ll learn how to structure test suites, mock external services, and write meaningful test assertions. Coverage reports and continuous integration setups will also be discussed. Beyond the basics, we’ll look into Test-Driven Development (TDD) and Behavior-Driven Development (BDD) for writing robust applications from the ground up. Testing asynchronous code, handling flaky tests, and applying automated test runners are essential skills in a fast-moving development cycle. By the end of this guide, you’ll have a clearer understanding of the test pyramid and how to confidently ship code that meets business requirements without sacrificing stability.",
    published: true,
    authorid: "author-789",
  },
  {
    id: "post-008",
    title: "Performance Optimization Techniques",
    picture: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    content:
      "Application performance can make or break user experience. This article outlines effective performance optimization techniques across front-end and back-end systems. Starting with measuring performance using tools like Lighthouse and Web Vitals, we'll explore how to identify bottlenecks. From reducing bundle sizes with tree-shaking to lazy loading components and images, every byte counts. Code-splitting, prefetching, and service workers can drastically improve loading times. On the server side, database indexing, caching strategies using Redis or Varnish, and optimizing API response payloads lead to faster user interactions. We’ll also touch on web workers for offloading heavy computation and image compression formats like WebP and AVIF. Efficient rendering strategies and minimizing reflows are crucial for smooth UI transitions. This post offers a practical, step-by-step approach to building blazing-fast applications that delight users and rank better in search engines, especially on mobile networks. The goal is not just speed, but sustainable performance at scale.",
    published: false,
    authorid: "author-202",
  },
];
const Allposts = () => {
  const [posts, setposts] = useState<posts[]>([]);
  // const Gotopage = () => {

  // }
  useEffect(() => {
    axios.get(`${BACKEND_URL}/Allblogs`).then(res => setposts(res.data.data)).catch(e => console.log(e));
  }, []);


  return (
    <>
      {" "}
      {posts.map((post) => (
        <div key={post.id} className="mx-auto max-w-full overflow-hidden rounded-xl flex justify-center bg-white shadow-md md:max-w-full p-5 m-4 gap-4">
          <div className="md:flex justify-evenly">
            <div className="md:shrink-0 pl-4">
              {" "}
              <img
                src={post?.picture}
                className="h-48 max-w-full object-cover md:h-full md:w-80"
              />
            </div>

            <div className="p-8 ">
              <div className="text-sm font-semibold tracking-wide ">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
                  Article
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-indigo-600 transition-colors duration-200">{post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{post.content}</p>
              </div>
              <button className="mt-8 p-4 flex items-center gap-2 bg-red-500 text-sm hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold  " >
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
2;

export default Allposts;
