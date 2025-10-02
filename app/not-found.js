"use client"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-6 text-center">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
    </div>
  )
}
