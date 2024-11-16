import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;
interface PageParams {
  params: Params;
}

export default async function BlogPost({ params }: PageParams) {
  try {
    const { id } = await params;
    const post = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        author: true,
        tags: true,
      },
    });

    if (!post) {
      return notFound();
    }

    return (
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/"
          className="text-blue-500 hover:underline mb-8 inline-block"
        >
          &larr; Back to blog list
        </Link>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-[400px] w-full">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>

            {/* Author and Date Info */}
            <div className="flex items-center space-x-4 mb-8 pb-8 border-b">
              <div className="relative w-12 h-12">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="rounded-full border-2 border-gray-100"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">
                  {post.author.name}
                </h3>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500 ml-auto">
                <span>{post.date.toLocaleDateString()}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div
                className="mt-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
      </main>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return notFound();
  }
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    select: { id: true },
  });

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
