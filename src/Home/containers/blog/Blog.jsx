import React from 'react'
import Article from '../../components/article/Article'
import "./blog.css"


const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          About the Team
        </h1>
      </div>
      <div className="gpt3__blog-container">
        {/* <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Jul 05,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgUrl={blog04} date="Jul 05,2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div> */}
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl="src\assets\blog02.png" date="Chintlapudi Sushmanth" title="Machine Learning Engineer" />
          <Article imgUrl="src\assets\blog03.png" date="Ayush Mishra" title="Web Devloper Engineer" />
          <Article imgUrl="src\assets\blog04.png" date="Akhil Chandra" title="Machine Learning Engineer" />
        </div>
      </div>
    </div>
  )
}

export default Blog