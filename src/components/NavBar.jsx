import React from "react";
import { UserAuth } from "../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Dropdown, Avatar } from "flowbite-react";

function NavBar() {
  const { user, logout } = UserAuth();
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between relative  px-5 py-3">
        <p className="pl-5  text-xl">Dashboard</p>

        <div className="flex items-center">
          <div
            className={` ${
              open ? "hidden md:flex justify-end" : "flex justify-end "
            }`}
          >
            <Dropdown
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                  className="rounded-full"
                />
              }
              arrowIcon={false}
              inline={true}
            >
              <Dropdown.Header>
                <span
                  className={` ${
                    open
                      ? "hidden sm:flex text-md text-gray-400"
                      : "flex text-md text-gray-400"
                  }`}
                >
                  {user && user.email} <i data-feather="chevron-down"></i>
                </span>
                <span className="block truncate text-sm font-medium">
                  {user && user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                {" "}
                <div onClick={handleLogout}> Sign out </div>
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div
            className={` ${
              open ? " hidden sm:inline" : " inline "
            } text-md text-md text-gray-400 font-[13px] px-2 `}
          >
            {" "}
            {user.email}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
