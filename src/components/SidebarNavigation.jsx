import React from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./NavBar.jsx";

function SidebarNavigation() {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState();
  const location = useLocation();

  useEffect(() => {
    setWidth(window.innerWidth);
    if (width > 1000) {
      setOpen(true);
    }
  }, []);

  const Menus = [
    { title: "Dashboard", src: "file-text", route: "/dashboard" },
    { title: "Items", src: "mail", gap: true, route: "/dashboard/items" },
    { title: "Groups ", src: "layers", route: "/dashboard/groups" },
    { title: "Orders ", src: "list", route: "/dashboard/orders" },
    {
      title: "Editor ",
      src: "file",
      gap: true,
      route: "/dashboard/editor",
    },
  ];
  useEffect(() => {
    feather.replace();
  });

  return (
    <>
      <div className="flex max-w-screen h-screen">
        <aside
          className={` ${
            open ? "  w-3/4 md:w-80" : "w-20 "
          } bg-kekaBlue  p-5 pt-8 sticky top-0 duration-300`}
        >
          <span
            onClick={() => setOpen(!open)}
            className={`absolute cursor-pointer -right-3 top-16 w-7 shadow-md
        rounded-full bg-white ${!open && "rotate-180"}`}
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
          <div className="flex flex-col justify-between w-full pt-6 text-white">
            {Menus.map((Menu) => (
              <div className="">
                <NavLink
                  key={Menu.title}
                  to={Menu.route}
                  className={({ isActive }) =>
                    isActive
                      ? `flex  rounded-md p-2 cursor-pointer hover:bg-gray-400 text-sm items-center gap-x-4 bg-white text-kekaBlue hover:text-kekaBlue ${
                          Menu.gap ? "mt-9" : "mt-2"
                        }`
                      : ` flex  rounded-md p-2 cursor-pointer hover:bg-gray-400 text-gray-100 text-sm items-center gap-x-4 ${
                          Menu.gap ? "mt-9" : "mt-2"
                        }`
                  }
                  end
                >
                  <i data-feather={Menu.src}></i>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </NavLink>
              </div>
            ))}
          </div>
        </aside>
        <div
          className={` ${
            open ? "hidden md:block" : "block"
          } overflow-auto w-full`}
        >
          <Navbar />
          <div className="bg-gray-200">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarNavigation;
