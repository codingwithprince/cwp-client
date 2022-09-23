import React from "react";
import Image from "next/image";
import {
  AiTwotoneMail,
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const About = () => {
  return (
    <div className="about py-10" id="about">
      <div className="flex flex-wrap-reverse justify-between items-center">
        <div className="text py-5 cursor-pointer md:w-1/2 ">
          <p className="text-zinc-400 text-center md:text-left text-xl  py-2 font-semibold">
            Hello, I'm
          </p>
          <p className="text-zinc-200 text-6xl text-center md:text-8xl name-font md:text-left font-bold">
            Prince <span className="text-orange-500">Ahmed</span>
          </p>
          <p className="text-zinc-400 text-center text-justify md:text-left text-xl py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi corrupti ducimus fuga eveniet veritatis quisquam mollitia debitis qui facilis!
          </p>
          <div className="mt-5 flex items-center gap-3 justify-center md:justify-start">
            <button className=" text-orange-500 flex gap-2 items-center hover:bg-orange-500 hover:text-white ease-in-out duration-300 border-2 border-orange-500 rounded-md px-3 py-2 font-semibold">
              {" "}
              <AiTwotoneMail size={20} />
              Inbox Me
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
        <div className="image py-5 px-[10%] md:px-0">
          <Image
            className="m-5"
            src={`/images/profile.png`}
            height={500}
            width={500}
            alt="profile-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
