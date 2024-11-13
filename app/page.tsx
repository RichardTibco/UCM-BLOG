import Pagination from './components/Pagination'
import Link from 'next/link'
export const dynamic = 'force-dynamic';
// Generate 30+ blog posts
const blogPosts = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  title: [
    "Getting Started with Next.js: A Comprehensive Guide",
    "Understanding React Server Components",
    "TypeScript Best Practices for 2024",
    "Building Scalable APIs with GraphQL",
    "Modern CSS Techniques and Tips",
    "Introduction to Web Assembly",
    "Docker for Frontend Developers",
    "Advanced Git Workflows",
    "React Performance Optimization",
    "Building Accessible Web Applications"
  ][i % 10] + ` ${Math.floor(i / 10) + 1}`,
  date: new Date(2024, 0, i + 1).toISOString().split('T')[0],
  author: {
    name: [
      "John Doe",
      "Jane Smith",
      "Mike Johnson",
      "Sarah Wilson",
      "Alex Brown"
    ][i % 5],
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
    role: [
      "Senior Frontend Developer",
      "Tech Lead",
      "Software Architect",
      "Backend Developer",
      "Full Stack Developer"
    ][i % 5]
  },
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  readingTime: `${Math.floor(Math.random() * 10 + 5)} min read`,
  tags: [
    ["Next.js", "React", "Web Development"],
    ["React", "JavaScript", "Frontend"],
    ["TypeScript", "JavaScript", "Programming"],
    ["GraphQL", "API", "Backend"],
    ["CSS", "Design", "Frontend"],
    ["WebAssembly", "Performance", "Programming"],
    ["Docker", "DevOps", "Tools"],
    ["Git", "Version Control", "Tools"],
    ["React", "Performance", "Frontend"],
    ["Accessibility", "HTML", "Frontend"]
  ][i % 10],
  thumbnail: `https://picsum.photos/800/400?random=${i}`
}));

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const ITEMS_PER_PAGE = 5;
  const page = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
  
  const paginatedPosts = blogPosts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

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
          {paginatedPosts.map((post) => (
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

        <Pagination
          currentPage={page}
          totalPages={totalPages}
        />
      </main>
    </>
  )
}