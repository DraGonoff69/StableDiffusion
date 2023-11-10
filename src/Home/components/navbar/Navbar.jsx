import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
// import Login from ''
// import Login from '../login/Login'
const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is ImagePrompt?</a></p>
    <p><a href='#possibility'>Early Access</a></p>
    <p><a href='#features'>Case Studies</a></p>
    {/* <p><a href='#blog'>Library</a></p> */}
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  // const [showLogin, setShowLogin] = useState(false);

  // const handleSignInClick = () => {
  //   setShowLogin(true);
  // }
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src="src\assets\logowhite.png" alt="Logo" className='' />
          {/* <p>Image Prompt</p> */}
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-wrapper">

          <div className="gpt3__navbar-sign">
                  <Link to="/Landing">
                  <button type='button'>Login</button>
                  </Link>
          </div>
          {/* Responsive part for mobiles devices */}
          {/* hamburger menu */}
          <div className="gpt3__navbar-menu">
            {/* {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            } */}
            {toggleMenu &&
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu />
                </div>
                <div className="gpt3__navbar-menu_container-links-sign">
                  <Link to="/Landing">
                  <button type='button'>Login</button>
                  </Link>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
