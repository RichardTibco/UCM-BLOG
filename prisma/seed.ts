import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Create authors
  const authors = await Promise.all([
    prisma.author.create({
      data: {
        name: 'John Doe',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
        role: 'Senior Frontend Developer'
      }
    }),
    prisma.author.create({
      data: {
        name: 'Jane Smith',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
        role: 'Tech Lead'
      }
    }),
    // Add more authors as needed
  ])

  // Create tags
  const tags = await Promise.all([
    prisma.tag.create({ data: { name: 'Next.js' } }),
    prisma.tag.create({ data: { name: 'React' } }),
    prisma.tag.create({ data: { name: 'TypeScript' } }),
    prisma.tag.create({ data: { name: 'JavaScript' } }),
    prisma.tag.create({ data: { name: 'Web Development' } }),
    // Add more tags as needed
  ])

  // Create posts
  const postData = [
    {
      title: 'Getting Started with Next.js',
      content: 'Comprehensive guide to building your first Next.js application...',
      excerpt: 'Learn how to build modern web applications with Next.js...',
      readingTime: '5 min read',
      tags: [0, 1, 4], // Next.js, React, Web Development
    },
    {
      title: 'TypeScript Best Practices in 2024',
      content: 'Detailed guide about TypeScript best practices...',
      excerpt: 'Learn essential TypeScript patterns and practices for better code...',
      readingTime: '8 min read',
      tags: [2, 4], // TypeScript, Web Development
    },
    {
      title: 'React Server Components Explained',
      content: 'Deep dive into React Server Components...',
      excerpt: 'Understanding the revolutionary approach to server-side rendering...',
      readingTime: '12 min read',
      tags: [0, 1, 4], // Next.js, React, Web Development
    },
    {
      title: 'Advanced TypeScript Patterns',
      content: 'Exploring advanced TypeScript patterns and techniques...',
      excerpt: 'Master complex TypeScript patterns for enterprise applications...',
      readingTime: '15 min read',
      tags: [2, 4], // TypeScript, Web Development
    },
    {
      title: 'JavaScript Performance Optimization',
      content: 'Comprehensive guide to optimizing JavaScript performance...',
      excerpt: 'Learn how to make your JavaScript applications faster...',
      readingTime: '10 min read',
      tags: [3, 4], // JavaScript, Web Development
    },
    {
      title: 'Building a Blog with Next.js',
      content: 'Step-by-step guide to creating a blog with Next.js...',
      excerpt: 'Create a modern blog using Next.js and React...',
      readingTime: '20 min read',
      tags: [0, 1, 2], // Next.js, React, TypeScript
    },
    {
      title: 'React State Management in 2024',
      content: 'Comparing modern state management solutions...',
      excerpt: 'Navigate the React state management ecosystem...',
      readingTime: '8 min read',
      tags: [1, 3], // React, JavaScript
    },
    {
      title: 'TypeScript for React Developers',
      content: 'Essential TypeScript concepts for React development...',
      excerpt: 'Improve your React projects with TypeScript...',
      readingTime: '10 min read',
      tags: [1, 2], // React, TypeScript
    },
    {
      title: 'Next.js API Routes Mastery',
      content: 'Complete guide to Next.js API routes...',
      excerpt: 'Learn to build robust APIs with Next.js...',
      readingTime: '15 min read',
      tags: [0, 2, 4], // Next.js, TypeScript, Web Development
    },
    {
      title: 'JavaScript Testing Strategies',
      content: 'Comprehensive guide to testing JavaScript applications...',
      excerpt: 'Master different testing approaches for JavaScript...',
      readingTime: '12 min read',
      tags: [3, 4], // JavaScript, Web Development
    },
    {
      title: 'CSS-in-JS Solutions Compared',
      content: 'Analysis of popular CSS-in-JS libraries...',
      excerpt: 'Choose the right styling solution for your React app...',
      readingTime: '7 min read',
      tags: [1, 4], // React, Web Development
    },
    {
      title: 'Web Authentication Best Practices',
      content: 'Implementing secure authentication in web apps...',
      excerpt: 'Learn modern authentication patterns and practices...',
      readingTime: '15 min read',
      tags: [0, 2, 4], // Next.js, TypeScript, Web Development
    },
    {
      title: 'React Performance Optimization',
      content: 'Techniques for optimizing React applications...',
      excerpt: 'Make your React applications lightning fast...',
      readingTime: '10 min read',
      tags: [1, 3], // React, JavaScript
    },
    {
      title: 'Modern CSS Techniques',
      content: 'Exploring modern CSS features and methodologies...',
      excerpt: 'Level up your styling with advanced CSS concepts...',
      readingTime: '8 min read',
      tags: [4], // Web Development
    },
    {
      title: 'Next.js 14 New Features',
      content: 'Exploring the latest features in Next.js 14...',
      excerpt: 'Discover what\'s new in the latest Next.js release...',
      readingTime: '6 min read',
      tags: [0, 1], // Next.js, React
    },
    {
      title: 'TypeScript Type System Deep Dive',
      content: 'Advanced exploration of TypeScript\'s type system...',
      excerpt: 'Master TypeScript\'s powerful type system...',
      readingTime: '20 min read',
      tags: [2, 4], // TypeScript, Web Development
    },
    {
      title: 'React Custom Hooks Patterns',
      content: 'Building reusable custom hooks in React...',
      excerpt: 'Learn to create powerful, reusable React hooks...',
      readingTime: '12 min read',
      tags: [1, 2], // React, TypeScript
    },
    {
      title: 'Web Accessibility Guidelines',
      content: 'Implementing accessibility in web applications...',
      excerpt: 'Make your web apps accessible to everyone...',
      readingTime: '15 min read',
      tags: [4], // Web Development
    },
    {
      title: 'JavaScript Error Handling',
      content: 'Best practices for handling errors in JavaScript...',
      excerpt: 'Robust error handling strategies for JavaScript apps...',
      readingTime: '8 min read',
      tags: [3, 4], // JavaScript, Web Development
    },
    {
      title: 'Next.js Deployment Strategies',
      content: 'Different approaches to deploying Next.js apps...',
      excerpt: 'Learn various ways to deploy your Next.js application...',
      readingTime: '10 min read',
      tags: [0, 4], // Next.js, Web Development
    },
    {
      title: 'React Component Design Patterns',
      content: 'Essential patterns for React component architecture...',
      excerpt: 'Build better React components with proven patterns...',
      readingTime: '15 min read',
      tags: [1, 2], // React, TypeScript
    },
    {
      title: 'Web Security Fundamentals',
      content: 'Essential security concepts for web developers...',
      excerpt: 'Protect your web applications from common threats...',
      readingTime: '18 min read',
      tags: [4], // Web Development
    },
    {
      title: 'State of JavaScript 2024',
      content: 'Overview of JavaScript ecosystem in 2024...',
      excerpt: 'Explore the current state of JavaScript development...',
      readingTime: '10 min read',
      tags: [3, 4], // JavaScript, Web Development
    },
    {
      title: 'Building a Design System',
      content: 'Creating a comprehensive design system...',
      excerpt: 'Learn to build and maintain a design system...',
      readingTime: '25 min read',
      tags: [1, 4], // React, Web Development
    },
    {
      title: 'Web Performance Metrics',
      content: 'Understanding key web performance metrics...',
      excerpt: 'Master the metrics that matter for web performance...',
      readingTime: '12 min read',
      tags: [4], // Web Development
    }
  ];

  await Promise.all(
    postData.map((post, index) => 
      prisma.post.create({
        data: {
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          authorId: authors[index % 2].id, // Alternates between authors
          thumbnail: `https://picsum.photos/800/400?random=${index + 1}`,
          readingTime: post.readingTime,
          tags: {
            connect: post.tags.map(tagIndex => ({ id: tags[tagIndex].id }))
          }
        }
      })
    )
  );
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 