import React from 'react';
import './about.css';
import Headshotcopy from '../images/Headshotcopy.jpg';
import HS2Circle from '../images/HS2Circle.png';
import ResumeSpring2025 from './ResumeSpring2025.pdf';

function AboutMe() {

  return (
    <div className = 'container' id = 'body'>
      <div className = 'row'>
        <div className = 'col-4'>
            <img 
              src={HS2Circle} 
              alt="About me photo" 
              id = "aboutMeImg"
            />
          <h2>Email: lystalin@utexas.edu</h2>
          <h2><a href="http://www.linkedin.com/in/jazmin-reyna">Connect with me!</a></h2>
          <div id = 'my-headers'>
            Resume
          </div>
          <h4><a href = {ResumeSpring2025}>ResumePDF</a> (Last updated 2/2025)</h4>
        </div>
        <div class ='col-8' id = 'content'>
          <div id = 'my-headers'>
            About Me
          </div>
            <h4>
            I am a first-generation student at the University of Texas at Austin 
            pursuing a degree in Mathematics with a certificate in Elements of 
            Computing. My academic journey has equipped me with a strong foundation 
            in both quantitative analysis and technical skills, allowing me to tackle 
            complex problems with data-driven solutions. 
            
            I am proficient in a wide range of tools and technologies, including 
            Python, data analysis (Pandas, Scikit-learn, SQL, RStudio), data 
            visualization (Tableau, matplotlib, Plotly), and web development (HTML, 
            CSS, React.js). I have a passion for leveraging data to drive insights 
            and informed decisions and am eager to apply these skills to real-world 
            challenges and contribute meaningfully to my team.
            
            As I continue to develop my professional career, I am excited about the 
            opportunities to collaborate on innovative projects, expand my technical 
            expertise, and make an impact through data-driven decision making.
            </h4>
          <div id = 'my-headers'>
            Work Samples
          </div>
          <h4><a href="https://gitlab.com/michael0403/cs331e-idb">Software Engineering Project (4/2024) (Python)</a></h4>
            <h4><a href="https://github.com/lystalin/CS-329E">Data Analysis using Jupyter Notebook (Python)</a></h4>
            <h4><a href="https://github.com/lystalin/CS-313E">Assignments using a variety of algorithms (Python)</a></h4>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

