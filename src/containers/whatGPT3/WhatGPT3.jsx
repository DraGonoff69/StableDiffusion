import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature 
        title="What is Image Prompt?" 
        text="ImagePrompt, a cutting-edge website designed to transform your textual ideas into stunning visual creations. At the heart of this platform lies an stable diffusion language model coupled with a stable diffusion model, allowing users to provide text-based input and seamlessly generate corresponding images. Here's a closer look at what ImagePrompt offers" 
        titleStyle={{ width: '250px' }} // Added style for title
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature 
        title="Text-to-Image Generation: " 
        text="The core feature of ImagePrompt is its ability to convert your textual descriptions, prompts, or concepts into captivating visual representations. Whether you're looking to visualize a scene from a story, design a concept for a product, or simply explore your creativity, ImagePrompt can bring your ideas to life" 
        titleStyle={{ width: '250px' }} // Added style for title
      />
      <Feature 
        title="Image Enhancement:" 
        text=" Users can upload their existing images, and the platform's stable diffusion model will apply advanced techniques to enhance the visual quality. Whether it's improving sharpness, adjusting colors, reducing noise, or enhancing overall aesthetics, ImagePrompt's image enhancement feature ensures that your pictures look their absolute best." 
        titleStyle={{ width: '250px' }} // Added style for title
      />
      <Feature 
        title="Customization Options:" 
        text="Tailor your image generation process to meet your specific needs. Adjust parameters, styles, and artistic preferences to fine-tune the output and match your creative vision." 
        titleStyle={{ width: '250px' }} // Added style for title
      />
    </div>
  </div>
);

export default WhatGPT3;
