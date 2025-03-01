import { useEffect } from "react";
import { useState } from "react";

const Skills = () => {
  const [borderColor, setBorderColor] = useState("rgb(0, 123, 255)"); // Initial border color

  return (
    <section
      id="skills"
      className="py-20"
      style={{
        position: "relative",
        background: "black",
        border: `3px solid ${borderColor}`, // Use dynamic border color
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >

      {/* SVG Wave Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          zIndex: -1,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bottom: 0,
          }}
        >
          <path
            fill="#38bdf8"
            fillOpacity="0.5"
            d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,106.7C672,85,768,75,864,101.3C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-white glow-text">Skills</h2>
        
        <div className="skill-item p-6 bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl mb-8 mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <h3 className="text-xl font-semibold text-teal-400 text-center">Programming Languages</h3>
            <ul className="text-white mt-4">
                <li>
                C
                <div className="w-full mt-2">
                    <div className="bg-teal-700 h-2 rounded-full" style={{ width: '80%' }}></div>
                    <div className="mt-2 text-teal-700 font-semibold">80%</div>
                </div>
                </li>
                <li>
                Python
                <div className="w-full mt-2">
                    <div className="bg-teal-700 h-2 rounded-full" style={{ width: '90%' }}></div>
                    <div className="mt-2 text-teal-700 font-semibold">90%</div>
                </div>
                </li>
                <li>
                Java
                <div className="w-full mt-2">
                    <div className="bg-teal-700 h-2 rounded-full" style={{ width: '75%' }}></div>
                    <div className="mt-2 text-teal-700 font-semibold">75%</div>
                </div>
                </li>
                <li>
                Data Structures and Algorithms
                <div className="w-full mt-2">
                    <div className="bg-teal-700 h-2 rounded-full" style={{ width: '70%' }}></div>
                    <div className="mt-2 text-teal-700 font-semibold">70%</div>
                </div>
                </li>
                <li>
                JavaScript
                <div className="w-full mt-2">
                    <div className="bg-teal-700 h-2 rounded-full" style={{ width: '85%' }}></div>
                    <div className="mt-2 text-teal-700 font-semibold">85%</div>
                </div>
                </li>
                <li>
                Dart
                <div className="w-full mt-2">
                    <div className="bg-teal-700 h-2 rounded-full" style={{ width: '70%' }}></div>
                    <div className="mt-2 text-teal-700 font-semibold">70%</div>
                </div>
                </li>
            </ul>
            </div>


        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="skill-item p-6 bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-teal-400">Frontend</h3>
            <ul className="text-white mt-4">
              <li>
                React.js
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '90%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">90%</div>
                </div>
              </li>
              <li>
                Next.js
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '80%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">80%</div>
                </div>
              </li>
              <li>
                Tailwind.css
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '75%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">75%</div>
                </div>
              </li>
              <li>
                HTML
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '95%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">95%</div>
                </div>
              </li>
              <li>
                CSS
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '80%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">80%</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="skill-item p-6 bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-teal-400">Backend</h3>
            <ul className="text-white mt-4">
              <li>
                SpringBoot
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '85%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">85%</div>
                </div>
              </li>
              <li>
                Node.js
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '80%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">80%</div>
                </div>
              </li>
              <li>
                Flask
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '75%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">75%</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Database Skills */}
          <div className="skill-item p-6 bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-teal-400">Database</h3>
            <ul className="text-white mt-4">
              <li>
                MySQL
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '90%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">90%</div>
                </div>
              </li>
              <li>
                PostgreSQL
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '80%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">80%</div>
                </div>
              </li>
              <li>
                MongoDB
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '80%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">80%</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="skill-item p-6 bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-teal-400">Tools</h3>
            <ul className="text-white mt-4">
              <li>
                Git / GitHub
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '90%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">90%</div>
                </div>
              </li>
              <li>
                VS Code
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '85%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">85%</div>
                </div>
              </li>
              <li>
                Docker
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '75%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">75%</div>
                </div>
              </li>
              <li>
                Vercel
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '80%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">80%</div>
                </div>
              </li>
              <li>
                Render
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '70%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">70%</div>
                </div>
              </li>
              <li>
                AWS
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '85%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">85%</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Data Science Skills */}
          <div className="skill-item p-6 bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-teal-400">Data Science</h3>
            <ul className="text-white mt-4">
              <li>
                Python, R
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '90%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">90%</div>
                </div>
              </li>
              <li>
                Data Analysis & Visualization
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '85%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">85%</div>
                </div>
              </li>
              <li>
                Machine Learning
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '80%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">80%</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Soft Skills Section */}
          <div className="skill-item p-6 bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-teal-400">Soft Skills</h3>
            <ul className="text-white mt-4">
              <li>
                Communication
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '90%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">90%</div>
                </div>
              </li>
              <li>
                Teamwork
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '85%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">85%</div>
                </div>
              </li>
              <li>
                Problem Solving
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '80%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">80%</div>
                </div>
              </li>
              <li>
                Adaptability
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '85%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">85%</div>
                </div>
              </li>
              <li>
                Leadership
                <div className="w-full mt-2">
                  <div className="bg-teal-700 h-2 rounded-full" style={{ width: '75%' }}></div>
                  <div className="mt-2 text-teal-700 font-semibold">75%</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
