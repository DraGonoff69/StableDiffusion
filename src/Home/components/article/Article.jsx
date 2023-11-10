import React from 'react'
import "./article.css"

// Parameter Destructuring
const Article = () => {
  return (
<div className="mx-auto max-w-7xl px-2 md:px-0">
      <div className="my-4">
        <p className=" text-teal-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[30px]">
        <div className="flex flex-col items-center text-start">
          <div
            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="z-0 h-full w-full rounded-[10px] object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">John Doe</h1>
              <h6 className="text-base text-white">Frontend Developer</h6>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Article;