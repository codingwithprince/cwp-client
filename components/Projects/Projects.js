import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SkillBar from 'react-skillbars';
import ProgressBar from "@ramonak/react-progress-bar";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const projectList = [
  {
    url: "/images/projects/jagger.png",
    title: "Jagger Welding d.o.o",
    tech: [
      {
        type: "Next JS",
        level: 100
      },
      {
        type: "Tailwind CSS",
        level: 100
      },
      {
        type: "JavaScript",
        level: 66
      },
      {
        type: "Swiper",
        level: 10
      }
    ]
  },
  {
    url: "/images/projects/wedding-glory.png",
    title: "Wedding Glory",
    tech: [
      {
        type: "Next JS",
        level: 90
      },
      {
        type: "CSS",
        level: 40
      },
      {
        type: "JavaScript",
        level: 20
      },
    ]
  },
];


const CL = {
  bar: '#f97316',
  title: {
    text: '#999',
    background: 'transparent'
  }
}

const Projects = () => {
  return (
    <div className="text-gray-200  overflow-hidden" id="projects">
      <div className="title">
        <h2 className="text-center text-4xl font-bold underline">Projects</h2>
      </div>
      <div className="images py-10">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          {projectList.map((project, i) => (
            <SwiperSlide className="grid grid-cols-1 md:justify-items-center md:grid-cols-2 pt-10 md:pt-20">
              <Image
                src={project.url}
                height={350}
                width={850}
                alt="Project Image"
              />
              <div className="project-info md:w-1/2 w-full mt-10">
                <h3 className="title text-zinc-300 tracking-wider text-2xl mb-3">{project.title}</h3>
                <p className="text-zinc-500 text-lg mb-3">Technologies :</p>
                <SkillBar colors={CL} skills={project.tech} height={'1vh'} animationDelay={50} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
};

export default Projects;
