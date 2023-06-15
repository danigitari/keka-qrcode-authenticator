import React from "react";

import { data } from "../data";
import "../index.css";
import BarChart from "./BarChart.jsx";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import MyChartComponent from "./MyChartComponent.jsx";

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
  const location = useLocation();
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
        <div className=" bg-gray-200">
          <div
            className={` ${
              open ? " hidden sm:flex " : "flex "
            } flex flex-row flex-wrap justify-around mx-2`}
          >
            <div className="one flex flex-wrap justify-around gap-x-4">
              {" "}
              <div className="  grid grid-row-4 shadow-md h-32 w-64 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
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
              <div className="  grid grid-row-4 shadow-md h-32 w-64 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
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
            <div className="two flex flex-wrap justify-around  gap-x-4">
              <div className="  grid grid-row-4 shadow-md h-32 w-64 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
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
              <div className="  grid grid-row-4 shadow-md h-32 w-64 my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-5 ">
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
            <div className="bg-white flex-1 w-1/2  md:w-2/3   overflow-auto mr-2 ml-5 my-2 rounded-lg shadow-lg">
              <MyChartComponent />
            </div>

            <div className="shadow-lg w-4/5 md:w-1/3 bg-white px-5 mx-3 my-2 rounded-lg ">
              <p className="text-gray-400 text-md p-2">
                {" "}
                last fake scan location
              </p>
              <div className="p-2 relative w-full">
                <iframe
                  width="300"
                  height="350"
                  frameborder="0"
                  scrolling="yes"
                  marginheight="0"
                  marginwidth="0"
                  className="absolute"
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
