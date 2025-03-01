'use client';

import './globals.css';
import Image from 'next/image';
import About from 'app/about/page';
import Skills from 'app/components/Skills';
import Projects from 'app/projects/page';
import Contact from 'app/contact/page';
import Achievements from 'app/achivements/page';

interface PhotoWithRadiumBorderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const PhotoWithRadiumBorder: React.FC<PhotoWithRadiumBorderProps> = ({  alt, width, height }) => {
  return (
    <div className="photo-container">
      <style jsx>{`
        .photo-container {
          position: relative;
          display: inline-block;
          padding: 10px; 
          background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ff00ff);
          background-size: 400% 400%;
          border-radius: 50%; 
          animation: radium-glow 3s linear infinite;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }

        .photo-container img {
          display: block;
          object-fit: cover;
          border-radius: 50%; 
          border: 5px solid transparent;
        }

        @keyframes radium-glow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <Image
        src="/images/SaiPriyaImage.jpg"
        alt={alt}
        width={width}
        height={height}
        className="rounded-full"
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white p-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/3 flex justify-center">
          <PhotoWithRadiumBorder
            src="/images/SaiPriyaImage.jpg"
            alt="Sai Priya Vuppala"
            width={300}
            height={300}
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Sai Priya Vuppala
          </h1>
          <p className="text-lg text-gray-300">Full Stack Developer | Tech Enthusiast</p>

          <div className="text-2xl mt-6 font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
              {"<Coder>"}
            </span>
            <span className="mx-4">|</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse">
              {"<Web Developer>"}
            </span>
            <span className="mx-4">|</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500 animate-pulse">
              {"<Mobile App Developer>"}
            </span>
          </div>

          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/sai-priya-vuppala-730b2924b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition duration-300"
            >
              <Image
                src="/images/LinkedInImage.png"
                alt="LinkedIn Logo"
                width={40}
                height={40}
                className="shadow-lg hover:shadow-2xl"
              />
            </a>
            <a
              href="https://github.com/VUPPALASAIPRIYA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition duration-300"
            >
              <Image
                src="/images/GithubImage.png"
                alt="GitHub Logo"
                width={40}
                height={40}
                className="shadow-lg hover:shadow-2xl"
              />
            </a>
          </div>

          <a
            href="/SaiPriyaResume.pdf"
            download
            className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 px-6 py-2 rounded-full transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="mt-12 w-full mx-auto">
        <About />
      </div>
      <div className="mt-12 w-full mx-auto">
        <Achievements />
      </div>
      <div className="mt-12 w-full mx-auto">
        <Skills />
      </div>

      <div className="mt-12 w-full mx-auto">
        <Projects />
      </div>

      <div className="mt-12 w-full mx-auto">
        <Contact />
      </div>
    </div>
  );
}