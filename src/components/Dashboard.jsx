import React from "react";

import { data } from "../data";
import "../index.css";

import { useState, useEffect } from "react";
import MyChartComponent from "./MyChartComponent.jsx";
import { BiChevronRight, BiRefresh } from "react-icons/bi";
import RadialChart from "./RadialChart";

function Dashboard() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    feather.replace();
  });

  return (
    <>
      <div className=" flex-1 rounded-lg  p-3">
        <div className="flex items-center justify-between pb-5 px-3">
          <div className="bg-gray-200   ">
            {" "}
            <span className="px-1  flex">
              Home
              <p className="text-[#1762E2] px-2 flex gap-x-2">
                <p className="text-xl flex items-center">
                  <BiChevronRight />
                </p>
                {location.pathname.slice(1).replace("/", "  / ")}
              </p>
            </span>
          </div>
          <button className="flex px-4 py-2  items-center rounded-md text-white text-sm bg-yellow-400 shadow-lg">
            <p className="text-lg">
              {" "}
              <BiRefresh />
            </p>
            <p className="pl-1 pr-2"> Refresh</p>
          </button>
        </div>
        <div className=" bg-gray-200">
          <div
            className={` ${
              open ? " hidden sm:flex " : "flex "
            } flex flex-row flex-wrap justify-around `}
          >

          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 place-items-center ">
            <div className="row-span-1 md:row-span-2  grid grid-row-4 shadow-md h-32 w-[250px] my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-1 ">
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
            <div className="row-span-1 md:row-span-2 grid grid-row-4 shadow-md h-32 w-[250px] my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-1 ">
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
            <div className="row-span-1 md:row-span-2 grid grid-row-4 shadow-md h-32 w-[250px] my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-1 ">
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
            <div className="row-span-1 md:row-span-2 grid grid-row-4 shadow-md h-32 w-[250px] my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-1 ">
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
          </div>
          <div
            className={` ${
              open
                ? "hidden sm:flex sm:flex-wrap sm:justify-around"
                : " flex flex-wrap justify-around "
            } `}
          >
            <div className="bg-white flex-1 w-1/2  md:w-2/3 overflow-auto mr-2 ml-2 my-2 rounded-lg shadow-lg">
              <MyChartComponent />
            </div>

            <div className="shadow-lg w-4/5 md:w-1/3 bg-white px-5 mx-3 my-2 rounded-lg ">
              <p className="text-gray-700 pt-5 text-md font-bold p-2">
                {" "}
                Percentage of fake scans
              </p>
              <RadialChart />
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
