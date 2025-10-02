import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span class="ml-3 text-xl">ShortURL</span>
          </a>
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
             Source Code by
            <a
              href="https://github.com/prasonkc/ShortURL"
              class="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @prasonkc
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
