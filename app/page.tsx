import Header from './components/Header'
import Link from 'next/link'

// Dummy data for blog posts
const blogPosts = [
  { id: 1, title: "Getting Started with Next.js", date: "2023-06-01" },
  { id: 2, title: "Why React is Awesome", date: "2023-06-05" },
  { id: 3, title: "Introduction to TypeScript", date: "2023-06-10" },
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
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}