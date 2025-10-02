import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 body-font">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          <Link href={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">ShortURL</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white hover:border-b-2 border-foreground" href={"/generate"}>Shorten URL</Link>
            <Link className="mr-5 hover:text-white hover:border-b-2 border-foreground" href={"/about"}>About</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
