import React, { useState } from "react";
import Link from "next/link";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { GiCrossedBones } from "react-icons/gi";

const menuItem = [
  {
    title: "about",
    icon: "",
  },
  {
    title: "projects",
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
    <nav className="py-2 cursor-pointer bg-[#2A2A2A] flex justify-between px-5 md:px-[15%] shadow-lg">
      <div className="logo font-semibold text-white text-4xl name-font">
        C<span className="text-orange-500">W</span>P
      </div>
      <ul className={"hidden gap-5 capitalize md:flex"}>
        {menuItem.map((item, i) => (
          <li
            onClick={() => setActive(item.title)}
            key={i}
            className={`${
              active == item.title ? "text-orange-500" : "text-white"
            } font-semibold uppercase`}
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
      <ul
        className={`${
          toggle ? "flex" : "hidden"
        } border-2 border-zinc-800 gap-5 text-center rounded-lg shadow-lg capitalize flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform z-10 bg-[#1f1e1e] bg-opacity-80 py-[300px] md:hidden px-[150px]`}
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
            } text-xl hover:bg-orange-500 hover:text-white font-semibold uppercase`}
          >
            <Link href={`#${item.title}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
