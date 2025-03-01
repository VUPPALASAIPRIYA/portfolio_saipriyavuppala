'use client';

import { useEffect } from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(75, 0, 130, 0.8))',
        backgroundSize: 'cover', // Ensures the gradient covers the entire section
        backgroundAttachment: 'fixed', // Parallax effect
      }}
    >
      <div className="text-center relative z-10 px-4 sm:px-0">
        <h2 className="text-5xl font-bold text-white mb-6 fade-in">
          About Me
        </h2>
        <div className="flex justify-center items-center">
          <div className="w-full md:w-3/4 text-white space-y-6 p-8 bg-opacity-80 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <p className="text-lg leading-relaxed">
              I'm a third-year Computer Science and Engineering student with a specialization in Data Science. 
              I have hands-on experience in web and mobile app development using Spring Boot, MERN stack, Flutter, and Python. 
              As a mentor for the School of Data Science club, I am passionate about helping others and contributing to collaborative projects.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Fade-in effect on section content */
        .fade-in {
          opacity: 0;
          animation: fadeIn 2s ease-out forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        h2 {
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .p-8 {
          background-color: rgba(0, 0, 0, 0.6); /* Slight transparency for a darker overlay */
        }

        .flex {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .w-3/4 {
          width: 75%;
        }

        .w-full {
          width: 100%;
        }

        .rounded-lg {
          border-radius: 15px;
        }

        .text-lg {
          font-size: 1.125rem;
        }

        /* Hover effect */
        .hover\:scale-105:hover {
          transform: scale(1.05);
        }

        .transform {
          transform: scale(1);
        }

        .transition {
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default About;
