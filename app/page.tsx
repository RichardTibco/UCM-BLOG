import Header from './components/Header'
import Link from 'next/link'

// Updated blog post data structure
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js: A Comprehensive Guide for Beginners",
    date: "2023-06-01",
    author: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      role: "Senior Frontend Developer"
    },
    excerpt: "Learn how to build modern web applications with Next.js, from setup to deployment. This guide covers everything you need to know to get started with this powerful React framework.",
    readingTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
    thumbnail: "https://picsum.photos/800/400?random=1"
  },
  {
    id: 2,
    title: "Why React Hooks Have Revolutionized Frontend Development",
    date: "2023-06-05",
    author: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      role: "Tech Lead"
    },
    excerpt: "Explore how React Hooks have transformed the way we write components and manage state in React applications. Discover practical examples and best practices.",
    readingTime: "6 min read",
    tags: ["React", "JavaScript", "Hooks", "Frontend"],
    thumbnail: "https://picsum.photos/800/400?random=2"
  },
  {
    id: 3,
    title: "TypeScript Best Practices for Large-Scale Applications",
    date: "2023-06-10",
    author: {
      name: "Mike Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      role: "Software Architect"
    },
    excerpt: "Discover how TypeScript can improve your code quality and team productivity. Learn about advanced types, decorators, and architectural patterns for scaling your applications.",
    readingTime: "10 min read",
    tags: ["TypeScript", "JavaScript", "Architecture", "Programming"],
    thumbnail: "https://picsum.photos/800/400?random=3"
  },
  {
    id: 4,
    title: "Building Scalable APIs with GraphQL and Node.js",
    date: "2023-06-15",
    author: {
      name: "Sarah Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      role: "Backend Developer"
    },
    excerpt: "Step-by-step guide to creating efficient and scalable APIs using GraphQL. Learn about schema design, resolvers, and performance optimization techniques.",
    readingTime: "12 min read",
    tags: ["GraphQL", "Node.js", "API", "Backend"],
    thumbnail: "https://picsum.photos/800/400?random=4"
  },
  // Add more blog posts as needed
]

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Tech Blog</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Explore the latest insights in web development, programming, and technology.
          </p>
        </section>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full border-2 border-gray-100"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">{post.author.name}</h3>
                        <p className="text-sm text-gray-500">{post.author.role}</p>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}