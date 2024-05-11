import React from 'react';
import './home.css';
import Headshotcopy from '../images/Headshotcopy.jpg';
import ResumeSpring2024 from './ResumeSpring2024.pdf'
import headshotCircle from '../images/headshotCircle.png'

function HomePage() {

  return (
    <div id = 'body'>
      <div className = 'header'>
        <br></br>
        <img 
            src={headshotCircle} 
            alt="Jazmin Reyna Headshot Circle" 
            id = "headshotCircle"
        />
        <div id = 'name'>
          <b>Hi, I'm Jazmin Reyna</b>
        </div>
        <h2>Mathematics student interested in Data Analysis</h2>
        <h2>Eager to make data driven decisions!</h2>
      </div>
    </div>
  );
}

export default HomePage;

