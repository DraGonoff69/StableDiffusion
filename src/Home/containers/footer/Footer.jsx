import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css"
// import logoUrl from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others?
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <Link to='/Landing'>Request Early Access</Link>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src="src\assets\logowhite.png" className="w-[100px] contrast-300" alt="gpt3 logo" />
          <p> All Rights Reserved</p>
        </div>
        <div className="flex flex-col">
          <h4 className="mr-4 ml-4 font-bold">Follow us</h4>
          <div className='flex flex-row'>

            <svg className="h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
            </svg>
            <svg className="h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
            </svg>
            
          </div>
        </div>
        <div className="gpt3__footer-links_div">
          <h4 className='font-bold'>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div font-sans font-bold">
          <h4>Get in touch</h4>
          <p>085-132567</p>
          <p>info@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyrights">
        ©2023 ImagePrompt. All rights reserved.
      </div>
    </div>
  )
}

export default Footer