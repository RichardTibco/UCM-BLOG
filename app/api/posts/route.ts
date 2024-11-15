import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { userId } = await auth()
    const user = await currentUser()
    console.log("user", user);
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { title, content } = await request.json()
    
    // Get user's name from Clerk, fallback to email or "Anonymous"
    const userName = user?.username
      ? `${user!.username}`
      : user?.emailAddresses?.[0]?.emailAddress || 'Anonymous'
    
    // Find or create author
    let author = await prisma.author.findFirst({
      where: { name: userName.trim() }
    })

    if (!author) {
      author = await prisma.author.create({
        data: {
        //   id: parseInt(userId),
          name: userName.trim(),
          avatar: user?.imageUrl || '',
          role: 'user'
        }
      })
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: author.id,
        excerpt: content.slice(0, 150) + '...', // Create excerpt from content
        thumbnail: '',
        readingTime: '5 min', // You might want to calculate this based on content length
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error creating post:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 