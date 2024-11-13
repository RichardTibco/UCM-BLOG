export const blogPosts = Array.from({ length: 35 }, (_, i) => ({
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