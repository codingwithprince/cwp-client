import React, { useRef, useState } from "react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SkillBar from "react-skillbars";
import { TbLivePhoto } from "react-icons/tb";

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
        level: 70,
      },
      {
        type: "Tailwind CSS",
        level: 100,
      },
      {
        type: "JavaScript",
        level: 66,
      },
      {
        type: "Swiper",
        level: 10,
      },
    ],
    liveLink: "https://jagger-welding.netlify.app/",
  },
  {
    url: "/images/projects/wedding-glory.png",
    title: "Wedding Glory",
    tech: [
      {
        type: "Next JS",
        level: 60,
      },
      {
        type: "CSS",
        level: 40,
      },
      {
        type: "JavaScript",
        level: 20,
      },
    ],
    liveLink: "https://wedding-glory.netlify.app/",
  },
];

const CL = {
  bar: "#f97316",
  title: {
    text: "#999",
    background: "transparent",
  },
};

const Projects = () => {
  return (
    <div className="text-gray-200  overflow-hidden cursor-pointer pb-10" id="projects">
      <div className="title">
        <h2 className="text-center text-2xl font-bold underline md:py-20 text-zinc-400">Projects</h2>
      </div>
      <div className="images py-10">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          loop={true}
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
                <h3 className="title text-zinc-300 tracking-wider text-2xl mb-3 text-center md:text-left">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-lg mb-3">Technologies :</p>
                <SkillBar
                  colors={CL}
                  skills={project.tech}
                  height={"1vh"}
                  animationDelay={50}
                />
                <div className="flex justify-end items-center w-full mt-10">
                  <Link href={project.liveLink}>
                    <a
                      target="_blank"
                      className="text-sm w-full bg-transparent text-orange-500  flex gap-2 justify-center items-center  hover:bg-orange-500 hover:text-white ease-in-out duration-300 border-2 border-orange-500/50 rounded-md px-2 py-1 font-semibold"
                    >
                      <TbLivePhoto className="animate-ping" size={15} /> Live
                      Site
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
