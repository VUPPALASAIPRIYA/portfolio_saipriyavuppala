'use client';

import { useEffect } from 'react';
const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 relative"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(75, 0, 130, 0.8))', // Background gradient for the section
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // Parallax effect
      }}
    >
      <style jsx>{`
        /* Glitter effect for outline on hover */
        @keyframes glitter {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        .project-card {
          position: relative;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.3); /* Transparent background */
          text-align: center;
          color: white;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }

        .glitter-effect {
          background: transparent;
          border: 2px solid transparent;
          position: relative;
          display: inline-block;
          animation: glitter 1.5s linear infinite;
          background-size: 400% 400%;
        }

        .project-card:hover .glitter-effect {
          border-color: rgba(255, 0, 0, 0.5); /* Default color for the outline */
          animation: glitter 1s ease-in-out infinite;
          background-position: 100% 100%;
        }

        .glitter-effect:hover {
          background-position: 100% 100%;
          animation: glitter 1s ease-in-out infinite;
        }

        .project-card a {
          color: #1d4ed8; /* Blue for links */
          font-size: 1.125rem;
          text-decoration: none;
        }

        .project-card a:hover {
          text-decoration: underline;
        }

        .project-preview {
          max-width: 100%;
          height: 200px;
          object-fit: cover;
          margin-bottom: 1rem; /* Adjusted to place photo above content */
        }
      `}</style>

      <div className="text-center relative z-10 px-4 sm:px-0">
        <h2 className="text-5xl font-bold text-white mb-6 fade-in">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* University Projects */}
          <div className="project-card">
            <div className="glitter-effect">
              <img src="\images\Exitportal.png" alt="Exit Portal Preview" className="project-preview" />
              <h3 className="text-2xl font-semibold mb-4">Exit Portal</h3>
              <p className="text-lg mb-4">A student exit portal developed for the CSE department, where students can manage and track their exit process.</p>
              <div>
                <a href="https://exit-portal-requirement-klu.vercel.app/" target="_blank" className="mr-4">View Live</a>
                <a href="https://github.com/NikileshReddyT/Exit-Portal-Requirement-KLU" target="_blank">GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="glitter-effect">
              <img src="\images\EduReach.png" alt="Edu Reach Preview" className="project-preview" style={{ width: '300px', height: '200px' }} />
              <h3 className="text-2xl font-semibold mb-4">Edu Reach</h3>
              <p className="text-lg mb-4">A Mobile application for the IRD department faculty to get the student contacts seamlessy through their Id and contact them.</p>
              <div>
                <a href="https://github.com/VUPPALASAIPRIYA/edureach_backendfinal" target="_blank">GitHub Backend Repo</a>
                <br />
                <a href="https://github.com/VUPPALASAIPRIYA/Contact_project" target="_blank">GitHub Frontend Repo</a>
                <br />
                <a href="/app-release.apk" download>Download APK</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="glitter-effect">
              <img src="images/DriverDemand.png" alt="Driver Demand Preview" className="project-preview" style={{ width: '1000px', height: '200px', objectFit: 'contain' }}/>
              <h3 className="text-2xl font-semibold mb-4">Driver Demand Prediction</h3>
              <p className="text-lg mb-4">An platform where drivers can use to predict their demand in that area based on the traffic conditions on a scale of 10.This is developed using  the timeseries data from the google traffic and routes api.</p>
              <div>
                <a href="https://edu-reach-live-link.com" target="_blank" className="mr-4">View Live</a>
                <br/>
                <a href="https://github.com/VUPPALASAIPRIYA/driver_demand_frontend" target="_blank">GitHub Frontend Repo</a>
                < br/>
                <a href="https://github.com/VUPPALASAIPRIYA/driver_demand_backend" target="_blank">GitHub Backend Repo</a>
              </div>
            </div>
          </div>
          {/* Personal Projects */}
          <div className="project-card">
            <div className="glitter-effect">
              <img src="images/FoodRescue.png" alt="Online Food Preview" className="project-preview" />
              <h3 className="text-2xl font-semibold mb-4">Online Food</h3>
              <p className="text-lg mb-4">An online food delivery platform that allows users to order food from local restaurants, featuring real-time tracking.</p>
              <div>
                <a href="https://fooddonation-blue.vercel.app/" target="_blank" className="mr-4">View Live</a>
                <a href="https://github.com/VUPPALASAIPRIYA/Fooddonation" target="_blank">GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="glitter-effect">
              <img src="images/Stockanalysis.png" alt="Investment Strategies Preview" className="project-preview" />
              <h3 className="text-2xl font-semibold mb-4">Time Series for Investment Strategies</h3>
              <p className="text-lg mb-4">A time-series analysis project focused on creating investment strategies based on historical financial data.</p>
              <div>
                <a href="https://vuppalasaipriya-model-for-investment-strategies.streamlit.app/" target="_blank" className="mr-4">View Live</a>
                <a href="https://github.com/VUPPALASAIPRIYA/Model_for_investment_Strategiess" target="_blank">GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="glitter-effect">
              <img src="images/portfolio.png" alt="Portfolio Preview" className="project-preview" />
              <h3 className="text-2xl font-semibold mb-4">Portfolio</h3>
              <p className="text-lg mb-4">A personal portfolio website showcasing my projects, skills, and achievements with an interactive interface.</p>
              <div>
                <a href="https://github.com/VUPPALASAIPRIYA/portfolio_saipriyavuppala" target="_blank">GitHub Repo</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="glitter-effect">
              <img src="https://via.placeholder.com/400" alt="Banking System Preview" className="project-preview" />
              <h3 className="text-2xl font-semibold mb-4">Banking and Finance Management System</h3>
              <p className="text-lg mb-4">A full-fledged banking and finance system to manage transactions, account balances, and financial reports.</p>
              <div>
                <a href="https://banking-system-live-link.com" target="_blank" className="mr-4">View Live</a>
                <a href="https://github.com/VUPPALASAIPRIYA/BankingSystem" target="_blank">GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
