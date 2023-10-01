import React from 'react';
import './navbar.css';
import { Bio } from '../../data/constants';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <section id="Nav">
      <div className="NavbarContainer">
        <span className="NavLogo" to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <span className="NavSpan">Portfolio</span>
          </a>
        </span>
        <div className="MobileIcon">
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </div>
        <div className="NavItems">
          <a className="NavLink" href="#about">About</a>
          <a className="NavLink" href='#skills'>Skills</a>
          <a className="NavLink" href='#experience'>Experience</a>
          <a className="NavLink" href='#projects'>Projects</a>
          <a className="NavLink" href='#education'>Education</a>
        </div>
        {/* <button className="ButtonContainer"> */}
          <button className="ContactButton" target="_blank">
            <a href="#contact">Contact Me</a>
          </button>
        {/* </button> */}
      </div>
      {
        isOpen &&
        <div className="MobileMenu" isOpen={isOpen}>
          <a className="MobileLink" href="#about" onClick={() => {
            setIsOpen(!isOpen)
          }}
          >About</a>
          <a className="MobileLink" href='#skills' onClick={() => {
            setIsOpen(!isOpen)
          }}
          >Skills</a>
          <a className="MobileLink" href='#experience' onClick={() => {
            setIsOpen(!isOpen)
          }}>Experience</a>
          <a className="MobileLink" href='#projects' onClick={() => {
            setIsOpen(!isOpen)
          }}
          >Projects</a>
          <a className="MobileLink " href='#education' onClick={() => {
            setIsOpen(!isOpen)
          }}
          >Education</a>
          <button className="ConButton" style={{ padding: '10px 16px', width: 'max-content' }} href="#contact" target="_blank">Contact Me</button>
        </div>
      }

    </section>
  )
}

export default Navbar;