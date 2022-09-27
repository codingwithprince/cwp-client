import React from "react";
import SkillBar from "react-skillbars";


const FRONT_END = [
    {
        type: "HTML",
        level: 95
    },
    {
        type: "CSS",
        level: 70
    },
    {
        type: "JavaScript",
        level: 52
    },
    {
        type: "React",
        level: 65
    },
    {
        type: "React Native",
        level: 30
    },
    {
        type: "Bootstrap",
        level: 80
    },
    {
        type: "Material UI",
        level: 63
    },
    {
        type: "Tailwind CSS",
        level: 90
    },
    {
        type: "Redux",
        level: 74
    },
    {
        type: "Netlify/Vercel",
        level: 92
    }
]

const BACK_END = [
    {
        type: "Node JS",
        level: 60
    },
    {
        type: "Express JS",
        level: 78
    },
    {
        type: "MongoDB",
        level: 80
    },
    {
        type: "Heroku",
        level: 90
    }
]

const CL = {
    bar: "#f97316",
    title: {
      text: "#999",
      background: "transparent",
    },
  };
  

const Expertise = () => {
  return (
    <div
      className="text-gray-200 overflow-hidden cursor-pointer pb-10"
      id="expertise"
    >
      <div className="title">
        <h2 className="text-center text-2xl font-bold underline md:py-10 text-zinc-400">Expertise</h2>
      </div>
      <div className="skill-list py-10 md:w-1/2 mx-auto">
        <p className="py-5 text-zinc-300 animate-pulse font-semibold text-lg">Front-end</p>
        <SkillBar
          colors={CL}
          skills={FRONT_END}
          height={"1vh"}
          animationDelay={50}
        />
         <p className="py-5 text-zinc-300 animate-pulse font-semibold text-lg">Back-end</p>
        <SkillBar
          colors={CL}
          skills={BACK_END}
          height={"1vh"}
          animationDelay={50}
        />
      </div>
    </div>
  );
};

export default Expertise;
