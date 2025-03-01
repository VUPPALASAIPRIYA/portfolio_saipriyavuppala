"use client"; // This makes the entire layout client-side, enabling use of hooks

import Header from "app/components/Header";
import Footer from "app/components/Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className="text-white" // Text color is set to white for better contrast
        style={{
          backgroundColor: 'black', // Set the entire background color to black
        }}
      >
        <Header />
        <main
          className="pt-20 px-6 sm:px-12 md:px-20" // Removed the container class
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent dark background for the main content
            borderRadius: '8px', // Optional: Adds rounded corners to the main content
            padding: '20px', // Adds internal padding to the content
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
