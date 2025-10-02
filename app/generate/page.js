"use client";
import React from "react";

const Generate = () => {
  const handleGenerate = (e) => {
    console.log("Generate")
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 bg-background text-foreground">
      <div className="bg-primary">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center">
        Generate your <span className="text-primary">Short URL</span>
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
        <input
          type="text"
          placeholder="Enter your URL"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
        />

        <input
          type="text"
          placeholder="Enter preferred short URL"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
        />
      </div>

      <button
        onClick={handleGenerate}
        className="mt-6 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
      >
        Generate Now
      </button>
      </div>
    </div>
  );
};

export default Generate;
