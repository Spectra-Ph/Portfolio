import React from 'react';
//import LinkedInIcon from '@material-ui/icons/LinkedIn';
//import InstagramIcon from '@material-ui/icons/Instagram';
import "../styles/Home.css"
import stars from '../styles/stars.mp4'
import lp from '../styles/LI_pic.jpeg'
//import wrmhls from '../styles/wormhole.jpeg'
import 'typeface-roboto';

function Home() {

    const languages = [
        "Java",
        "Python",
        "C/C++",
        "Javascript",
        "Matlab",
        "C#",
        "RISC-V",
      ];
      
      const toolsFrameworks = [
        "React",
        "Express",
        "MongoDB",
        "Node.js",
        "FastAPI",
        "Flask",
        "VScode",
      ];
      

  return (
    <div className='home'>       
        <div className='about'>
            <video src={stars} autoPlay loop muted/>
            <div className='prompt'>
                <h2> WELCOME TO MY PORTFOLIO</h2> 
                <h1> I am Hassan.</h1>
            </div>
        </div>
        <div className='more_about'>
            <h1 id>About me:</h1>
            <img src={lp} alt=''/> 
                <div className='about_me_paragraph'>
                <p>I am a third year computer/software engineering student at York University.<br/>
                I was a Systems Engineering team member in Canadian Space Agency's CubeSat mission called ESSENCE.<br/>
                For this mission we had to build a CubeSat (a really small satellite) and have it launched to space.<br/>
                Furthermore, I was a Research Assistant at York university and was given two projects. <br/>
                One was to 3D model and 3D print a flexible conductive robotic finger,<br/>
                and the other one was to program Embedded Hardware to work in Simulink Real-Time.<br/>
                To learn more, please check out my "Experience" page.
                </p>
                </div>
        </div>
        <div className='skills'>
        <video src={stars} autoPlay loop muted/>
          
        </div>

            
    </div>
  )
}

export default Home;
