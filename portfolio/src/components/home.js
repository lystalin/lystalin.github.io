import React from 'react';
import './home.css';
import Headshotcopy from '../images/Headshotcopy.jpg';
import ResumeSpring2024 from './ResumeSpring2024.pdf'

function HomePage() {

  return (
    <div>
      <div className = 'header'>
        <h1>Jazmin Reyna</h1>
          <img 
            src={Headshotcopy} 
            alt="Jazmin Reyna Headshot" 
            id = "headshot"
          />
        <h2>Email: lystalin@utexas.edu</h2>
        <h2><a href="http://www.linkedin.com/in/jazmin-reyna">Connect with me!</a></h2>
      </div>
      <h2>About Me</h2>
        <p>
          I am a first generation student at the University of Texas at Austin majoring in Mathematics. 
          While also pursuing a certificate in Elements of Computing, I have gained several technical 
          skills such as proficiency in python (Pandas, Scikit-learn, Numpy), data analysis, and data 
          visualization. I am eager to apply my skills to make data driven decisions and develop my professional career.
        </p>
      <h2>Work Samples</h2>
        <p><a href="https://github.com/lystalin/CS-329E">Data Analysis using Jupyter Notebook (Python)</a></p>
        <p><a href="https://github.com/lystalin/CS-313E">Assignments using a variety of algorithms (Python)</a></p>
      <h2>Resumé</h2>
        <p><a href = {ResumeSpring2024}>ResuméPDF</a></p>
    </div>
  );
}

export default HomePage;

