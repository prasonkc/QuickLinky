"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 bg-background text-foreground text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
        About <span className="text-primary">QuickLinky</span> - Shorten your URL
      </h1>

      <p className="max-w-lg text-lg sm:text-xl text-muted-foreground mb-6">
        Short URL is a fast, simple, and free tool to shorten long links. Make your URLs 
        easy to share, memorable, and neat in seconds.
      </p>

      <Link
        href="/shorten"
        className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
      >
        Generate a Short URL
      </Link>

      {/* GitHub Source Section */}
      <div className="mt-12 text-center absolute bottom-0">
        <p className="text-muted-foreground mb-3 ">Check out the source code:</p>
        <a
          href="https://github.com/prasonkc/ShortUrl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          <FaGithub className="text-2xl" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}
