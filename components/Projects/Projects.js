import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const projectList = [
  {
    url: "/images/projects/jagger.png",
    title: "Jagger Welding d.o.o"
  },
  {
    url: "/images/projects/wedding-glory.png",
    title: "Wedding Glory"
  },
  {
    url: "/images/projects/jagger.png",
    title: "Jadgger Weldgarging d.o.o"
  },
  {
    url: "/images/projects/wedding-glory.png",
    title: "asdfsdfasdf Glory"
  },
  {
    url: "/images/projects/jagger.png",
    title: "Jagger Welding d.o.o"
  },
  {
    url: "/images/projects/wedding-glory.png",
    title: "Wedding Glory"
  },
  {
    url: "/images/projects/jagger.png",
    title: "Jadgger Weldgarging d.o.o"
  },
  {
    url: "/images/projects/wedding-glory.png",
    title: "asdfsdfasdf Glory"
  },
];

const Projects = () => {
  return (
    <div className="text-gray-200 overflow-hidden" id="projects">
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
            <SwiperSlide className="flex flex-wrap pt-10 md:pt-20">
              <Image
                src={project.url}
                height={350}
                width={850}
                alt="Project Image"
              />
              <div className="project-info">
                <h3 className="title text-zinc-300 tracking-wider text-2xl mb-5">{project.title}</h3>
                <p className="text-zinc-400">Technologies :</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
