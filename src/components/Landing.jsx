import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  const [prompts, setPrompts] = useState([
    "A serene sunset over a calm lake, with vibrant colors reflecting in the water.",
    "A mystical forest with ancient trees, illuminated by soft moonlight.",
    "A futuristic cityscape with towering skyscrapers and flying vehicles.",
    "A cozy cabin nestled in a snowy mountain valley, surrounded by tall pine trees.",
    "An underwater world teeming with colorful coral reefs and exotic marine life."
  ]);

  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [prompts.length]);

  useEffect(() => {
    setCurrentPrompt(prompts[currentPromptIndex]);
  }, [currentPromptIndex, prompts]);

  return (
    <div className="flex h-screen w-full">
      {/* Left Side */}
      <div className="w-3/5 p-10 flex flex-col bg-[#FFFBF5] text-white">
        <div className="text-6xl font-bold mb-20 text-[#7743DB]">ImagePrompt
          <span className="font-circle">●</span></div> {/* Added heading */}
        <div className="mb-5 text-3xl pt-40 font-serif text-[#F875AA] justify-center items-center">Generate an image for -</div>
        <div className="mb-10 text-3xl text-justify font-serif text-[#F875AA] justify-center items-center">{currentPrompt}</div> {/* Added text-center and font-serif */}
        {/* <img src="src\assets\landing.jpeg" alt="ImagePrompt" className="max-w-full mb-4" /> */}
      </div>

      {/* Right Side */}
      <div className="w-2/5 p-10 bg-[#F7EFE5] text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4 text-[#7743DB]">Get Started</h1>
        <div className='grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0'>
          <Link to="/Login" className="flex h-16 items-center justify-center rounded-md text-center text-lg font-medium px-20 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline" >Log in</Link>
          <Link to="/SignUp" className="flex h-16 items-center justify-center rounded-md text-center text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline">Sign up</Link>

        </div>
         
        <div className="mt-4 text-sm text-gray-500">
          <span>Terms of Condition | Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
