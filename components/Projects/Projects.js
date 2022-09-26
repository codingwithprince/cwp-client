import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
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
        name: "Next JS",
        pgrs: 100
      },
      {
        name: "Tailwind CSS",
        pgrs: 100
      },
      {
        name: "JavaScript",
        pgrs: 66
      },
      {
        name: "Swiper",
        pgrs: 10
      }
    ]
  },
  {
    url: "/images/projects/wedding-glory.png",
    title: "Wedding Glory",
    tech: [
      {
        name: "HTML",
        pgrs: 70
      },
      {
        name: "CSS",
        pgrs: 40
      },
      {
        name: "JavaScript",
        pgrs: 20
      },
    ]
  },
];

const isBrowser = typeof window !== "undefined";

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
                <table className="table-auto w-full">
                  <tbody>
                    {
                      project.tech && project.tech.map((ptech, i)=> (
                        <tr>
                        <td className="pr-5 font-semibold text-zinc-400">{ptech.name}</td>
                        <td className="w-full">
                        <ProgressBar 
                          height="8px"
                          baseBgColor="#2A2A2A"
                          bgColor="#f97316"
                          isLabelVisible={false}
                          animateOnRender={true} completed={ptech.pgrs} />
                        </td>
                      </tr>
                      ))

                    }
                  </tbody>
                </table>
                
              
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
};

export default Projects;
