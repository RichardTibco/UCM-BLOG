import Link from 'next/link'

// Import the blogPosts data
import { blogPosts } from '@/app/data/blogPosts'  // We'll create this file next

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id))

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post not found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            &larr; Back to blog list
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/" className="text-blue-500 hover:underline mb-8 inline-block">
        &larr; Back to blog list
      </Link>

      <article className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Hero Image */}
        <div className="relative h-[400px] w-full">
          <img 
            src={post.thumbnail} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>

          {/* Author and Date Info */}
          <div className="flex items-center space-x-4 mb-8 pb-8 border-b">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-12 h-12 rounded-full border-2 border-gray-100"
            />
            <div>
              <h3 className="font-medium text-gray-800">{post.author.name}</h3>
              <p className="text-sm text-gray-500">{post.author.role}</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 ml-auto">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            {/* Generate some dummy content for the full article */}
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2>Main Concepts</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <ul>
              <li>First important point about {post.tags[0]}</li>
              <li>Understanding the basics of {post.tags[1]}</li>
              <li>Advanced techniques in {post.tags[2]}</li>
            </ul>

            <h2>Practical Examples</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <code><pre>
              // Example code related to {post.tags[0]}
             
            </pre></code>

            <h2>Conclusion</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}