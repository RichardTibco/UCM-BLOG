import Header from './components/Header'
import Link from 'next/link'

// Updated blog post data structure
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "2023-06-01",
    author: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
    },
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    id: 2,
    title: "Why React is Awesome",
    date: "2023-06-05",
    author: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
    },
    tags: ["React", "JavaScript", "Frontend"]
  },
  {
    id: 3,
    title: "Introduction to TypeScript",
    date: "2023-06-10",
    author: {
      name: "Mike Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
    },
    tags: ["TypeScript", "JavaScript", "Programming"]
  },
]

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the latest articles about web development, programming, and technology.
          </p>
        </section>
        
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
        <ul className="space-y-6">
          {blogPosts.map((post) => (
            <li key={post.id} className="border rounded-lg hover:shadow-lg transition-shadow duration-200">
              <Link href={`/blog/${post.id}`} className="block p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-600">{post.author.name}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}