import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
      <div className="images py-10 flex items-center justify-center">
        <Carousel
          autoPlay={true}
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          infiniteLoop={true}
        >
          {projectList.map((project, i) => (
            <div key={i} className="flex w-full">
              <Image
                src={project.url}
                height={350}
                width={800}
                alt="project-list"
              />
              <div className="description">
                <p className="title text-2xl font-semibold text-white text-center">
                  Coming soon!!
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
