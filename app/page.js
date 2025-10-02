"use client"
import Image from "next/image";
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-6 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        Shorten Your <span className="text-primary">URL</span>{" "}
        <span className="text-secondary">NOW</span>
      </h1>
      <p className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-xl">
        Transform long, messy links into neat, shareable URLs in seconds. Fast,
        simple, and free.
      </p>
      <button onClick={() => {router.push("/generate")}} className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors">
        Get Started
      </button>
    </div>
  );
}
