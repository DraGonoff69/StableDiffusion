import React from 'react'
import "./header.css"
import { Link } from "react-router-dom";
// import people from "../../assets/people.png"


const Header = () => {
  return (
    <div className="gpt3__header section_padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Build Something amazing with ImagePrompt</h1>
        <p>
          ImagePrompt: Your Creative Hub! Generate visuals from text and enhance your images with our machine learning models. Be a pioneer, sign up for exclusive early access today!</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <Link to="/Contact">
            <button type="button">Get Started</button>
          </Link>
        </div>

        {/* <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div> */}

      </div>
      <div className="gpt3__header-image">
        <img src="src\assets\ai.png" alt="AI" />
      </div>
    </div>
  )
}

export default Header