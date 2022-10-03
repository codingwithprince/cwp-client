import React, { useState } from "react";
import { RiSendPlaneFill } from 'react-icons/ri' 

const Contact = () => {
  const [ contactForm, setContactForm ] = useState({
    name: "",
    email: "",
    description: ""
  })

  const onChangeForm = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name] : e.target.value
    })
  }

  console.log(contactForm);

  return (
    <div
      className="text-gray-200 overflow-hidden cursor-pointer pb-10"
      id="contact"
    >
      <div className="title">
        <h2 className="text-center text-2xl font-bold underline md:py-10 text-zinc-400">
          Contact
        </h2>
      </div>
      <div className="form-section md:w-1/2 mx-auto mt-10">
        <form className="flex flex-col gap-7">
          <div className="flex flex-col relative">
            <input required onChange={(e) => onChangeForm(e)} className="px-3 w-full py-2 text-zinc-800 rounded-md focus:outline-none peer" type="text" name="name" id="name" />
            <label htmlFor="name" className={`text-zinc-500 absolute top-2 peer-focus:-top-6 peer-focus:left-0  ease-in-out duration-300 ${contactForm.name != "" ? "-top-6" : "left-2"}`}>Name</label>
          </div>
          <div className="flex flex-col relative">
            <input required onChange={(e) => onChangeForm(e)} className="px-3 w-full py-2 text-zinc-800 rounded-md focus:outline-none peer" type="email" name="email" id="email" />
            <label htmlFor="email" className={`text-zinc-500 absolute top-2 peer-focus:-top-6 peer-focus:left-0  ease-in-out duration-300 ${contactForm.email != "" ? "-top-6" : "left-2"}`}>Email</label>
          </div>
          <div className="flex flex-col relative">
            <textarea required onChange={(e) => onChangeForm(e)} className="px-3 w-full h-[150px] py-2 text-zinc-800 rounded-md focus:outline-none peer" type="text" name="description" id="description" />
            <label htmlFor="description" className={`text-zinc-500 absolute top-2 peer-focus:-top-6 peer-focus:left-0  ease-in-out duration-300 ${contactForm.description != "" ? "-top-6" : "left-2"}`}>Description</label>
          </div>
          <div className="flex justify-end">
            <button className="hover:bg-orange-500 border-2 hover:text-white text-orange-500 ease-in-out duration-300 border-orange-500 flex items-center gap-2 px-3 py-2 rounded-md md:text-md text-sm font-semibold" type="submit">
              <RiSendPlaneFill size={18} />
              Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
