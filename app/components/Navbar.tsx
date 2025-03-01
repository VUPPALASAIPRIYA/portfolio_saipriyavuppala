"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white w-full">
      <div className="text-2xl font-bold">Sai Priya's Portfolio</div>
      <div className="flex space-x-6 ml-auto">
        <Link
          href="/about"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
