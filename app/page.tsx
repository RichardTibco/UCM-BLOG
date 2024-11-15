import Pagination from "./components/Pagination";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Post, Author, Tag } from "@prisma/client";

// Add interface for the post with included relations
interface PostWithRelations extends Post {
  author: Author;
  tags: Tag[];
}

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const ITEMS_PER_PAGE = 5;
  const params = await Promise.resolve(searchParams);
  const currentPage = params.page ? parseInt(params.page) : 1;

  // Get total count of posts
  const totalPosts = await prisma.post.count();
  const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE);

  // Get paginated posts with author and tags
  const posts = (await prisma.post.findMany({
    skip: (currentPage - 1) * ITEMS_PER_PAGE,
    take: ITEMS_PER_PAGE,
    include: {
      author: true,
      tags: true,
    },
    orderBy: {
      date: "desc",
    },
  })) as PostWithRelations[];

  return (
    <>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">Tech Blog</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Explore the latest insights in web development, programming, and
            technology.
          </p>
        </section>

        <div className="space-y-8">
          {posts.map((post: PostWithRelations) => (
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
                        <h3 className="font-medium text-gray-800">
                          {post.author.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {post.author.role}
                        </p>
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
                        {post.tags.map((tag: Tag) => (
                          <span
                            key={tag.id}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span>{post.date.toLocaleDateString()}</span>
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

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </main>
    </>
  );
}
