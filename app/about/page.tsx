// import { SignedIn } from "@clerk/nextjs";
// import CreatePost from "../components/CreatePost";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="prose lg:prose-xl">
        <p className="text-gray-600 mb-4">
          Hello! I&apos;m a passionate developer sharing my thoughts and
          experiences through this blog.
        </p>
        <p className="text-gray-600 mb-4">
          I write about web development, programming best practices, and my
          journey in the tech world.
        </p>
        {/* Add more content as needed */}
        {/* <main className="max-w-4xl mx-auto p-4">
          <SignedIn>
            <CreatePost />
          </SignedIn>
        </main> */}
      </div>
    </div>
  );
}
