import React from 'react'
import './projectshowcase.css'
import project1Image from './portfolio.png' 
import project2Image from './todo-list.png' 
import project3Image from './e -commerce.png' 

const ProjectShowcase = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className='card'>
        <div className='card-content'>
        <img src={project1Image} alt="Profile" className="" />
          <h1>Portfolio App</h1>
          <p> Created a Basic Portfolio App using React and CSS COVERS All the Aspects</p>
          <button>View on Github</button>
      
      </div>
      <div className='card-content'>
      <img src={project2Image} alt="Profile" className="" />
          <h1>Todo App</h1>
          <p> Created a Basic Portfolio App using React and CSS COVERS All the Aspects</p>
          <button>View on Github</button>
      </div>
      <div className='card-content'>
      <img src={project3Image} alt="Profile" className="" />
          <h1>E-Commerce App</h1>
          <p> Created a Product Listing Page with Checkout functionality Working. React Router,UseState,Usefffect,UseContext Concepts used</p>
          <button>View on Github</button>
      </div>
      </div>
      </div>
     
  )
}

export default ProjectShowcase