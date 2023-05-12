import React from "react";
import { Routes, Route } from "react-router-dom"; 
import { useState, useEffect } from "react";

function SidebarNavigation() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "file-text" },
    { title: "Items", src: "mail", gap: true },
    { title: "Groups ", src: "layers" },
    { title: "Orders ", src: "list" },
    { title: "Asset Manager", src: "folder", gap: true },
    { title: "Content Editor ", src: "file" },
  ];
  useEffect(() => {
    feather.replace();
  });

  return (
    <>
      {" "}
      <div className="flex w-full ">
        <aside
          className={` ${
            open ? " w-3/4 sm:w-72" : "w-20 "
          } bg-kekaBlue h-screen p-5  pt-8 sticky top-0 duration-300`}
        >
          {" "}
          <span
            onClick={() => setOpen(!open)}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full bg-white ${!open && "rotate-180"}`}
          >
            <i data-feather="chevron-left"> </i>
          </span>
          <div className="flex gap-x-4 items-center justify-center">
            <img
              src="../logo.jpeg"
              alt="Keka Logo"
              className="cursor-pointer duration-500 w-12 h-12  "
            />
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-100 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white" 
                } `}
              >
                <i data-feather={Menu.src}></i>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </aside>

  
      </div>
    </>
  );
}

export default SidebarNavigation;
