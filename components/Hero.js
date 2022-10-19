import React from "react";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineCloudDownload
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="about pt-10 md:pt-20 " id="about">
      <div className="flex flex-wrap-reverse justify-between items-center">
        <div className="text py-5 cursor-pointer md:w-1/2">
          <p className="text-zinc-400 tracking-wide text-center md:text-left text-xl font-semibold">
            Hello, I'm
          </p>
          <p className="text-zinc-200 text-6xl text-center md:text-8xl name-font md:text-left font-bold">
            Prince <span className="text-orange-500">Ahmed</span>
          </p>
          <p className="text-zinc-400 text-center lg:hidden  text-md tracking-wide">Full Stack <span className="text-orange-500 animate-pulse tracking-tight font-semibold">Web</span> Developer</p>
          <p className="text-zinc-400 text-justify hidden lg:block  md:text-left text-lg tracking-wide">
            A <span className="text-orange-500 animate-pulse tracking-tight font-semibold">MERN</span> Stack Web Developer with 3 years
            of experience. Mostly specialize in <u className="hover:text-orange-400">Next</u>, <u className="hover:text-orange-400">React</u>, <u className="hover:text-orange-400">Express JS</u>, <u className="hover:text-orange-400">MongoDB</u> as well as React Native and Tailwind CSS. I
            use my skills with pure dedication and deliver work on time. If you
            are looking for a MERN developer then feel free to share your
            projects with me.
          </p>
          <div className="mt-10 flex items-center gap-3 justify-center md:justify-start">
            <button className=" text-orange-500 text-sm flex gap-2 items-center  hover:bg-orange-500 hover:text-white ease-in-out duration-300 border-2 border-orange-500/50 rounded-full px-2 py-1 font-semibold">
              <AiOutlineCloudDownload size={17} />
             Download CV
            </button>
            <AiFillGithub
              className="hover:text-zinc-200 text-orange-500"
              size={30}
            />
            <AiFillFacebook
              className="hover:text-zinc-200 text-orange-500"
              size={30}
            />
            <AiFillLinkedin
              className="hover:text-zinc-200 text-orange-500"
              size={30}
            />
          </div>
        </div>
        <div className="image px-[10%] md:px-0 relative">
          <Image
            className="f"
            src={`/images/profile.png`}
            height={500}
            width={500}
            alt="profile-picture"
          />
          
          <div className="hidden hover:animate-pulse md:block ease-in-out duration-500 bg-gradient-to-b from-orange-500/50 hover:opacity-100 opacity-0 bg-opacity-50 absolute md:w-full h-full top-0 rounded-full">
            <p className="absolute top-1/2 left-1/2 text-center drop-shadow-xl transform -translate-x-1/2 -translate-y-1/2 text-lg md:text-4xl font-normal text-zinc-50 bg-clip-text">
              I'm just a guy who is very curious about technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
