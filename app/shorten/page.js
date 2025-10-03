"use client";

import { useState } from "react";

const API_URL = "/api/generate";

export default function URLShortener() {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setshortURL] = useState("");
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true)
    // API call
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ longurl: longURL, shorturl: shortURL }),
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setshortURL("");
          setLongURL("");
          setGenerated(`${window.location.origin}/url/${shortURL}`);
        }
        // console.log(data)
      })
      .catch((e) => console.log(e));

    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedURL);
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
          disabled={loading}
          className="w-full bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
        >
          {loading ? "Generating..." : "Generate Now"}
        </button>

        {generated && (
          <div className="mt-6 p-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl text-center shadow-lg">
            <p className="text-white text-lg font-semibold mb-3">
              🎉 Your Short URL is ready!
            </p>

            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-3 shadow-inner">
              <a
                href={generated}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-medium underline break-all"
              >
                {generated}
              </a>
              <button
                onClick={handleCopy}
                className="ml-4 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
