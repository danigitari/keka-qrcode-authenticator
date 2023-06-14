import React from "react";
import { Dropdown, Avatar } from "flowbite-react";
import { data } from "../data";
import "../index.css";
import BarChart from "./BarChart.jsx";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/authContext";
import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const { user, logout } = UserAuth();

  const [scanData, setScanData] = useState({
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Number of Scans",
        data: data.map((item) => item.amount),
        backgroundColor: ["#1762E2"],
      },
    ],
  });




  const Navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    feather.replace();
  });

  return (
    <>
      <div className=" flex-1 rounded-lg  ">
        <div className="flex items-center justify-end relative  px-5 py-3">
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

        <div className=" bg-gray-200">
          <div
            className={` ${
              open ? " hidden sm:flex " : "flex "
            } flex flex-row flex-wrap justify-around `}
          >
            <div className="one flex flex-wrap justify-around gap-x-12">
              {" "}
              <div className="  grid grid-row-4 shadow-md h-32 w-56 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
                <div className="row-span-1">
                  {" "}
                  <div className="flex justify-end p-2 text-green-500 text-sm ">
                    <i data-feather="chevron-up" className="text-xs "></i>
                    <p className=""> + 2 % </p>
                  </div>
                </div>
                <div className="row-span-1"> </div>
                <div className="row-span-1"> </div>
                <div className="row-span-1">
                  {" "}
                  <div className="flex flex-col justify-start p-2 ">
                    {" "}
                    <span className="text-3xl mb-1">7 </span>{" "}
                    <span className="text-md text-gray-400"> scans today</span>{" "}
                  </div>
                </div>
              </div>
              <div className="  grid grid-row-4 shadow-md h-32 w-56 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
                <div className="row-span-1">
                  {" "}
                  <div className="flex justify-end p-2 text-green-500 text-sm ">
                    <i
                      data-feather="chevron-up"
                      className="text-xs font-extrabold"
                    ></i>
                    + 2%
                  </div>
                </div>
                <div className="row-span-1"> </div>
                <div className="row-span-1"> </div>
                <div className="row-span-1">
                  {" "}
                  <div className="flex flex-col justify-start p-2 ">
                    {" "}
                    <span className="text-3xl mb-1">575 </span>{" "}
                    <span className="text-md text-gray-400">
                      {" "}
                      scans this week
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="two flex flex-wrap justify-around  gap-x-12">
              <div className="  grid grid-row-4 shadow-md h-32 w-56 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
                <div className="row-span-1">
                  {" "}
                  <div className="flex justify-end py-2 px-4 text-red-500 ">
                    <i data-feather="chevron-down" className="text-sm"></i>
                    <span className="text-md"> 8% </span>
                  </div>
                </div>
                <div className="row-span-1"> </div>
                <div className="row-span-1"> </div>
                <div className="row-span-1">
                  {" "}
                  <div className="flex flex-col justify-start p-2 ">
                    {" "}
                    <span className="text-3xl mb-1">1 </span>{" "}
                    <span className="text-md text-gray-400">
                      {" "}
                      fake scans this week
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="  grid grid-row-4 shadow-md h-32 w-56 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
                <div className="row-span-1">
                  {" "}
                  <div className="flex justify-end p-2 text-green-500 text-sm ">
                    {/* <i data-feather="chevron-up" className="text-xs"></i> */}
                    + 2 this week
                  </div>
                </div>
                <div className="row-span-1"> </div>
                <div className="row-span-1"> </div>
                <div className="row-span-1">
                  {" "}
                  <div className="flex flex-col justify-start p-2 ">
                    {" "}
                    <span className="text-3xl mb-1"> 205 </span>{" "}
                    <span className="text-md text-gray-400">
                      {" "}
                      Items registered
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` ${
              open
                ? "hidden sm:flex sm:flex-wrap sm:justify-around"
                : " flex flex-wrap justify-around "
            } `}
          >
            <div className="bg-white flex-1 w-1/2 h-[300px]  md:w-1/2 px-5 m-5 rounded-lg shadow-md">
              <BarChart data={scanData} className="h-[500px]" />
            </div>

            <div className="shadow-md  w-4/5 md:w-1/3 bg-white px-5 m-5 rounded-lg ">
              <p className="text-gray-400 text-md p-2">
                {" "}
                last fake scan location
              </p>
              <div className="p-2 w-1/2">
                <iframe
                  width="50%"
                  height="100 %"
                  frameborder="0"
                  scrolling="yes"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=670&amp;height=363&amp;hl=en&amp;q=Nairobi garage&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
