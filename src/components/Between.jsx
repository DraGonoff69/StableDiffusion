import React from 'react';

const Between = () => {
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center bg-white'>
    <img className="mx-auto w-[240px] my-8 rounded-md object-cover" src="src\assets\logo.png"alt='Logo'/>
    <div className="flex justify-center items-center w-3/4 mx-auto">
      <div className="pb-100 grid grid-cols-3 gap-4">
        <div className="bg-[#FFF6F6] rounded-md py-12 pb-64 px-8 shadow-lg transform hover:scale-105 transition duration-300 flex-grow hover:bg-[#FFDFDF] ">
          <h2 className="text-xl font-bold mb-4">Text-To-Image Generation</h2>
          <p className='text-justify'>Interact with our flagship AI model and genreate image based on user input</p>
        </div>
        <div className="bg-[#FFF6F6] rounded-md py-12 px-8 shadow-lg transform hover:scale-105 transition duration-300 flex-grow hover:bg-[#FFDFDF]">
          <h2 className="text-xl font-bold mb-4">Image Enhancement</h2>
          <p className='text-justify'>Interact with  our flagship AI modle to Enhance your image</p>
        </div>
        <div className="bg-[#FFF6F6] rounded-md py-12 px-8 shadow-lg transform hover:scale-105 transition duration-300 flex-grow hover:bg-[#FFDFDF]">
          <h2 className="text-xl font-bold mb-4 viewBox= ">Customizing Tools Options</h2>
          <p className='text-justify'>Editing tools to edit image.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Between;
