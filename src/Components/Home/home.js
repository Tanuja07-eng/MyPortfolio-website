import React from 'react';
import './home.css';
import {Bio} from '../../data/constants';
import HeroImg from '../../images/MyImg.png'
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div id="about">
    <div className="HeroContainer">
        <div className="HeroInnerContainer" >
            <div id="HeroLeftContainer">
                <div className="HomeTitle">Hi, I am <br /> {Bio.name}</div>
                <div className="TextLoop">
                    I am a
                    <div className="HomeSpan">
                        <Typewriter 
                            options={{
                                strings: Bio.roles,
                                autoStart: true,
                                loop: true,
                            }}
                             />
                    </div>
                </div>
                <div className="SubTitle">{Bio.description}</div>
                <button className="ResumeButton" href={Bio.resume} target='display'>Check Resume</button>
            </div>

            <div id="HeroRightContainer">

                <img className='MyImg' src={HeroImg} alt="hero-image" />
            </div>
        </div>

    </div>
</div>

  )
}

export default Home;