import React from "react";
import "./home.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import HS2Circle from "../images/HS2Circle.png";
import Resume2026 from "./Resume2026.pdf";

function AboutMe() {
  return (
    <div className = "container-fluid" id = "body">
      <div className = "row">
      <div className="col-4 text-center">

      <img 
        src={HS2Circle} 
        alt="About me photo" 
        id="aboutMeImg"
      />

      <div className="icon-links">
        <a href="mailto:jazminreyna.atx@gmail.com"><FaEnvelope /></a> 
        <a href="http://www.linkedin.com/in/jazmin-reyna"><FaLinkedin /></a> 
        <a href="https://github.com/lystalin"><FaGithub /></a>
      </div>

      <div className="profile-actions">
        <a href={Resume2026} target="_blank" rel="noreferrer" className="resume-btn">
          View Resumé
        </a>
      </div>

      </div>
        <div className="col-8" id = "content">
          <div id = "my-headers">
            About Me
          </div>
          <div className="about-me">
            <p>
              I am a software engineer based in Austin, Texas, and a recent graduate of the University of Texas at Austin, where I earned a degree in Mathematics with a certificate in Elements of Computing. My academic background has provided me with a strong foundation in quantitative analysis and technical problem-solving, allowing me to approach complex challenges with data-driven and software-based solutions.
            </p>

            <p>
              I have professional experience working on backend development, data processing pipelines, and engineering tools used to support data workflows and application functionality. In my current role, I have gained exposure to both Python and C++ development in production environments.
            </p>

            <p>
              I am proficient in a wide range of tools and technologies, including Python, C++, SQL, and JavaScript, as well as data analysis tools such as Pandas. I also have experience with PostgreSQL, Docker, Git, Linux, CI/CD workflows, and web development frameworks including React.js and Flask, along with data visualization tools such as Tableau, matplotlib, and Plotly.
            </p>

            <p>
              As I continue to grow in my career, I am excited about opportunities to work on impactful engineering problems, expand my technical expertise, and contribute to building reliable and efficient software systems.
            </p>
          </div>
          <div id = "my-headers">
            Work Samples
          </div>
          <h4>
            <a href="https://gitlab.com/michael0403/cs331e-idb">Software Engineering Project (4/2024)</a>
          </h4>
          <h4>
            <a href="https://github.com/lystalin/CS-329E">Data Analysis using Jupyter Notebook</a>
          </h4>
          <h4>
            <a href="https://github.com/lystalin/CS-313E">Assignments using a variety of algorithms</a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;