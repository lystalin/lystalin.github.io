import React from 'react';
import './about.css';
import Headshotcopy from '../images/Headshotcopy.jpg';
import aboutMeCircle from '../images/aboutMeCircle.png';
import ResumeSpring2024 from './ResumeSpring2024.pdf';

function AboutMe() {

  return (
    <div className = 'container' id = 'body'>
      <div className = 'row'>
        <div className = 'col-4'>
            <img 
              src={aboutMeCircle} 
              alt="About me photo" 
              id = "aboutMeImg"
            />
          <h2>Email: lystalin@utexas.edu</h2>
          <h2><a href="http://www.linkedin.com/in/jazmin-reyna">Connect with me!</a></h2>
        </div>
        <div class ='col-8' id = 'content'>
          <div id = 'my-headers'>
            About Me
          </div>
            <h4>
              I am a first generation student at the University of Texas at Austin majoring in Mathematics. 
              While also pursuing a certificate in Elements of Computing, I have gained technical skills such 
              as proficiency in Python, data analysis (Pandas, Scikit-learn, SQL, RStudio), data visualization 
              (Tableau, matplotlib), web development (HTML, CSS, React.js), and more. I am eager to apply my 
              skills to make data driven decisions and develop my professional career.
            </h4>
          <div id = 'my-headers'>
            Work Samples
          </div>
            <h4><a href="https://github.com/lystalin/CS-329E">Data Analysis using Jupyter Notebook (Python)</a></h4>
            <h4><a href="https://github.com/lystalin/CS-313E">Assignments using a variety of algorithms (Python)</a></h4>
          <div id = 'my-headers'>
            Resume
          </div>
            <h4><a href = {ResumeSpring2024}>ResumePDF</a></h4>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

