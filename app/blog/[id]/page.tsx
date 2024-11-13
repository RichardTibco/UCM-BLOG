import Link from 'next/link'

// Dummy data for blog posts (in a real app, you'd fetch this from an API or database)
const blogPosts = [
  { id: 1, title: "Getting Started with Next.js", date: "2023-06-01", content: "Next.js is a powerful React framework..." },
  { id: 2, title: "Why React is Awesome", date: "2023-06-05", content: "React has revolutionized web development..." },
  { id: 3, title: "Introduction to TypeScript", date: "2023-06-10", content: "TypeScript adds static typing to JavaScript..." },
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 block">&larr; Back to blog list</Link>
      <article>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-4">{post.date}</p>
        <div className="prose">{post.content}</div>
      </article>
    </main>
  )
}