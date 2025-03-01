"use client";

import {
  FaTrophy,
  FaCertificate,
  FaMicrophoneAlt,
  FaStar,
  FaCalendarCheck,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Achievements</h2>

        <div className="relative">
          <div className="absolute w-1 h-full bg-gray-700 left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {/* Achievement 1 (Right) */}
            <div className="flex items-center">
              <div className="w-1/2">
                <div className="flex items-center justify-end">
                  <p className="text-sm text-gray-400 mr-2">2025</p>
                  <div className="rounded-full bg-blue-500 w-4 h-4"></div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-start">
                  <FaTrophy className="text-yellow-500 text-xl mr-2 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Selected for CDAC Hackathon</h3>
                    <p className="text-gray-300">Our idea got selected for the next level to develop virtual labs for school students.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement 2 (Left) */}
            <div className="flex items-center flex-row-reverse"> {/* Reverse the order */}
              <div className="w-1/2">
                <div className="flex items-center justify-start"> {/* Align to start */}
                  <div className="rounded-full bg-green-500 w-4 h-4"></div>
                  <p className="text-sm text-gray-400 ml-2">2024</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-start flex-row-reverse"> {/* Reverse the order */}
                  <div>
                    <h3 className="text-xl font-semibold text-right">Certified in AWS Cloud Practitioner</h3> {/* Align text to right */}
                    <p className="text-gray-300 text-right">Completed and earned certification in Cloud from AWS.</p> {/* Align text to right */}
                  </div>
                  <FaCertificate className="text-blue-500 text-xl ml-2 mt-1" /> {/* Moved icon to the right */}
                </div>
              </div>
            </div>

            {/* Achievement 3 (Right) */}
            <div className="flex items-center">
              <div className="w-1/2">
                <div className="flex items-center justify-end">
                  <p className="text-sm text-gray-400 mr-2">2025</p>
                  <div className="rounded-full bg-yellow-500 w-4 h-4"></div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-start">
                  <FaMicrophoneAlt className="text-purple-500 text-xl mr-2 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Presented project Driver Demand Prediction</h3>
                    <p className="text-gray-300">Presented a project Driver Demand Prediction on Time-Series analysis as a part of the lecture series of GNOIT, NOIDA.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement 4 (Left) */}
            <div className="flex items-center flex-row-reverse">
              <div className="w-1/2">
                <div className="flex items-center justify-start">
                  <div className="rounded-full bg-pink-500 w-4 h-4"></div>
                  <p className="text-sm text-gray-400 ml-2">2022 - 2026</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-start flex-row-reverse">
                  <div>
                    <h3 className="text-xl font-semibold text-right">Secured Good CGPA</h3>
                    <p className="text-gray-300 text-right">Maintaining a good CGPA in my academic years.</p>
                  </div>
                  <FaStar className="text-green-500 text-xl ml-2 mt-1" />
                </div>
              </div>
            </div>

            {/* Achievement 5 (Right) */}
            <div className="flex items-center">
              <div className="w-1/2">
                <div className="flex items-center justify-end">
                  <p className="text-sm text-gray-400 mr-2">2024 OCT - Present</p>
                  <div className="rounded-full bg-purple-500 w-4 h-4"></div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-start">
                  <FaCalendarCheck className="text-orange-500 text-xl mr-2 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Organized Club Events and delivered Sessions.</h3>
                    <p className="text-gray-300">Organized events as a mentor of the School of Data Science club. Mentoring 32 students in various projects.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* New Achievement: Exit Portal (Left) */}
            <div className="flex items-center flex-row-reverse">
              <div className="w-1/2">
                <div className="flex items-center justify-start">
                  <div className="rounded-full bg-indigo-500 w-4 h-4"></div>
                  <p className="text-sm text-gray-400 ml-2">2024</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-start flex-row-reverse">
                  <div>
                    <h3 className="text-xl font-semibold text-right">Developed Exit Portal Web Application</h3>
                    <p className="text-gray-300 text-right">Developed the Exit Portal web application for the Department of CSE.</p>
                  </div>
                  <FaLaptopCode className="text-blue-400 text-xl ml-2 mt-1" />
                </div>
              </div>
            </div>

            {/* New Achievement: Edu Reach (Mobile App) (Right) */}
            <div className="flex items-center">
              <div className="w-1/2">
                <div className="flex items-center justify-end">
                  <p className="text-sm text-gray-400 mr-2">2025</p>
                  <div className="rounded-full bg-teal-500 w-4 h-4"></div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-start">
                  <FaMobileAlt className="text-green-400 text-xl mr-2 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">Developed Edu Reach Mobile Application</h3>
                    <p className="text-gray-300">Developed the Edu Reach mobile application for the Innovation, Research, and Development department.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;