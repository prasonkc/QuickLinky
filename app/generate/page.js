"use client";

import { useState } from "react";

export default function URLShortener() {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setshortURL] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    // Placeholder for API call
    alert(`Generating short URL for: ${longURL} with slug: ${shortURL}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 bg-background text-black">
      {/* Card Container */}
      <div className="bg-primary p-8 rounded-2xl shadow-lg w-full max-w-xl">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center text-white">
          Generate your <span className="text-secondary">Short URL</span>
        </h2>

        {/* Inputs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter your URL"
            value={longURL}
            onChange={(e) => setLongURL(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
          />

          <input
            type="text"
            placeholder="Enter preferred short URL"
            value={shortURL}
            onChange={(e) => setshortURL(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleGenerate}
          className="w-full bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
        >
          Generate Now
        </button>
      </div>
    </div>
  );
}
