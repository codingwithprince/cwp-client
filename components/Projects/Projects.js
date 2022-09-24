import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
// import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

const projectList = [
  {
    url: "/images/projects/jagger.png",
  },
  {
    url: "/images/projects/wedding-glory.png",
  },
];

const Projects = () => {
  return (
    <div className="text-gray-200 overflow-hidden" id="projects">
      <div className="title">
        <h2 className="text-center text-2xl font-bold underline">Projects</h2>
      </div>
      <div className="images py-10">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="ws"
        >
          {projectList.map((project, i) => (
            <SwiperSlide>
              <Image
                src={project.url}
                height={350}
                width={850}
                alt="Project Image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </div>
  );
};

export default Projects;
