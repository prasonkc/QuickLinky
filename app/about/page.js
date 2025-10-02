"use client";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 bg-background text-foreground text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
        About <span className="text-primary">Short URL</span>
      </h1>
      <p className="max-w-lg text-lg sm:text-xl text-muted-foreground mb-6">
        Short URL is a fast, simple, and free tool to shorten long links. Make your URLs easy to share, memorable, and neat in seconds.
      </p>
      <Link
        href="/generate"
        className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
      >
        Generate a Short URL
      </Link>
    </div>
  );
}
