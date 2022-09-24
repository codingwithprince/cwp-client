import React from 'react'
import Image from 'next/image'




const Projects = () => {
  return (
    <div className="text-gray-200" id="projects">
        <div className="title">
            <h2 className="text-center text-2xl font-bold underline">Projects</h2>
        </div>
        <div className="images py-5 flex items-center justify-center">
          {/* <Image src={'/images/projects/jagger.png'} height={350} width={800} alt="Projects Mockup" /> */}
         
        </div>
    </div>
  )
}

export default Projects