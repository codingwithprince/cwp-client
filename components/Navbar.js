import React, { useState } from "react";
import Link from "next/link";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { GiCrossedBones } from "react-icons/gi";

const menuItem = [
  {
    title: "home",
    icon: "",
  },
  {
    title: "projects",
    icon: "",
  },
  {
    title: "services",
    icon: "",
  },
  {
    title: "expertise",
    icon: "",
  },
  {
    title: "contact",
    icon: "",
  },
];
const Navbar = () => {
  const [active, setActive] = useState("about");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="py-2 md:py-3 z-10 sticky top-0 cursor-pointer bg-[#2A2A2A] flex justify-between px-5 md:px-[15%] shadow-lg">
      <div className="logo font-semibold text-white text-4xl name-font">
        <Link href={'/'}>
          <a>
          C<span className="text-orange-500">W</span>P
          </a>
        </Link>
      </div>
      <ul className={"hidden gap-5 capitalize md:flex items-center"}>
        {menuItem.map((item, i) => (
          <li
            onClick={() => setActive(item.title)}
            key={i}
            className={`${
              active == item.title ? "text-orange-500" : "text-white"
            } font-semibold hover:text-orange-300 uppercase`}
          >
            <Link href={`#${item.title}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="menu-icons md:hidden flex items-center">
        {toggle ? (
          <GiCrossedBones
            onClick={() => setToggle(!toggle)}
            className="block md:hidden text-orange-500"
            size={25}
          />
        ) : (
          <BsFillMenuButtonWideFill
            onClick={() => setToggle(!toggle)}
            className="block md:hidden text-orange-500"
            size={25}
          />
        )}
      </div>
      <div className={`${
          toggle ? "block" : "hidden"
        } ease-in-out duration-500 border-2 border-zinc-800 shadow-lg
        fixed top-[55px] left-0 bg-[#1f1e1e] bg-opacity-80
        md:hidden w-full h-screen z-10`}>
      <ul
        className={`capitalize justify-center w-full items-center flex flex-col absolute transform top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        {menuItem.map((item, i) => (
          <li
            onClick={() => {
              setActive(item.title);
              setToggle(!toggle);
            }}
            key={i}
            className={`${
              active == item.title ? "text-orange-500" : "text-white"
            } text-lg hover:bg-orange-500 w-full text-center hover:text-white font-semibold ease-in-out duration-500 uppercase py-2`}
          >
            <Link href={`#${item.title}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
      </div>
     
    </nav>
  );
};

export default Navbar;
