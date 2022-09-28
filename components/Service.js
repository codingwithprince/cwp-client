import React from "react";
import Image from "next/image";

const service_items = [
  {
    title: "Custom Application",
    logo: "/images/services/custom-web.png",
    description: "I will utilize MERN Stack to build state-of-the-art dynamic web applications and websites for diverse business verticals.",
  },
  {
    title: "Web Application",
    logo: "/images/services/web-application.png",
    description: "I will create fast, secure, dynamic, and best-suited web applications for various businesses. "
  },
  {
    title: "eCommerce Application",
    logo: "/images/services/ecommerce-website.png",
    description:  "I will create eCommerce website and will build intuitive, responsive, and secure dashboards for ecommerce sites."
  },
  {
    title: "CMS Development",
    logo: "/images/services/cms.png",
    description:  "I will create a high-performance, feature-rich, secure, user-friendly, scalable custom content management system or CMS for your business."
  }
];

const Service = () => {
  return (
    <div
      className="text-gray-200 overflow-hidden cursor-pointer pt-10"
      id="expertise"
    >
      <div className="title">
        <h2 className="text-center text-2xl font-bold underline md:py-10 text-zinc-400">
          Services
        </h2>
      </div>
      <div className="services-section gap-5 flex flex-wrap justify-center py-10 w-full">
        {
            service_items.map((sItem, index)=> (
        <div key={index} className="service-card  w-[300px] ease-in-out duration-300 rounded-md bg-[#2A2A2A] px-5 py-10 shadow-md hover:scale-105 hover:shadow-xl">
          <div className="logo flex items-center justify-center pb-5">
            <Image className="opacity-80 hover:opacity-100" src={sItem.logo} height={80} width={80} />
          </div>
          <div className="title pb-5">
            <h2 className="text-center text-lg text-orange-500 capitalize font-semibold">
              {sItem.title}
            </h2>
          </div>
          <div className="description">
            <p className="text-center text-zinc-500">
              {sItem.description}
            </p>
          </div>
        </div>
        ))
    }
      </div>
    </div>
  );
};

export default Service;
