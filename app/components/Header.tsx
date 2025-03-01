"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "achievements", "contact"]; // Added "achievements"
      const scrollPosition = window.scrollY + 200; // Offset for header height

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const top = element.offsetTop;
        const height = element.offsetHeight;
        return scrollPosition >= top && scrollPosition < top + height;
      });

      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },);

  return (
    <header
      className="bg-black bg-opacity-70 text-white fixed w-full top-0 left-0 z-50 shadow-lg"
      style={{
        borderBottom: "2px solid #C0C0C0", // Silver border at the bottom of the header
      }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-400">
            <div
              className="inline-block py-2 px-6 bg-[#1D3557] text-white rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: "#1D3557", // Deep navy blue (classic color)
              }}
            >
              Sai Priya's Portfolio
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex space-x-6">
          {["about", "achievements","skills", "projects", "contact"].map((section) => ( // Added "achievements"
            <Link
              key={section}
              href={`#${section}`}
              className={`text-2xl text-[#F1E1C6] transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-[#E0C3A1] ${
                activeSection === section ? "text-gray-300 underline" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white lg:hidden text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {["about", "achievements","skills", "projects", "contact"].map((section) => ( // Added "achievements"
              <Link
                key={section}
                href={`#${section}`}
                className={`text-2xl text-[#F1E1C6] transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#E0C3A1] ${
                  activeSection === section ? "text-gray-300 underline" : ""
                }`}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;