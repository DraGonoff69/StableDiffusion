import React from 'react'
import "./App.css"
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from "./containers";
import {CTA,Navbar} from "./components";

function Index() {
  return (
    <div className="Index">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>

      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default Index;
