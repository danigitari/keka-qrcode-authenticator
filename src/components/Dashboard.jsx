import React from "react";
import "../index.css";
import { Table } from "./Table.jsx";
import { useState, useEffect } from "react";
import { BiChevronRight, BiRefresh } from "react-icons/bi";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import RadialChart from "./RadialChart";
import { StackedChart } from "./Chart.jsx";
import { useAuthContext } from "../hooks/useAuthContext";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [chartData, setChartData] = useState({});
  const [radialChartData, setRadialChartData] = useState({});
const { user } = useAuthContext();
  

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);

    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July" , "August" , "September", "October", "November", "December"],
      datasets: [
        {
          type: "bar",
          label: "Number of Scans",
          backgroundColor: documentStyle.getPropertyValue("--blue-500"),
          data: [50, 25, 12, 48, 90, 76, 42 , 50 , 25, 12, 48, 90],
        },
      ],
    };
    const radialData = {
      labels: ["real", "Fake"],
      datasets: [
        {
          data: [300, 10],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    setChartData(data);
    setRadialChartData(radialData);
  }, []);

  return (
    <>
      <div className=" flex-1 rounded-lg  p-3">
        <div className="flex items-center justify-between pb-5 px-3">
          <div className="bg-gray-200   ">
            <span className="px-1 hidden  md:flex">
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
              <BiRefresh />
            </p>
            <p className="pl-1 pr-2"> Refresh</p>
          </button>
        </div>
        {user ? (
          <div className="flex px-4 text-gray-500 text-xl">
            Hello {"  "}
            {  user.user?.name.charAt(0).toUpperCase() + user.user?.name.slice(1)}
            👋
          </div>
        ) : null}

        <div className=" bg-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xlg:grd-cols-2 place-items-center ">
            <div className="row-span-1 lg:row-span-2  grid grid-row-4 shadow-md h-32 w-[250px] my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-1 ">
              <div className="row-span-1">
                <div className="flex justify-end p-2 text-green-500 text-xl ">
                  <FiTrendingUp />
                  <p className="px-2 text-sm"> + 2 % </p>
                </div>
              </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1">
                <div className="flex flex-col justify-start p-2 ">
                  <span className="text-3xl mb-1">7 </span>
                  <span className="text-md text-gray-400"> Total Scans</span>
                </div>
              </div>
            </div>
            <div className="row-span-1 lg:row-span-2  grid grid-row-4 shadow-md h-32 w-[250px] my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-1 ">
              <div className="row-span-1">
                <div className="flex justify-end p-2 text-green-500 text-xl ">
                  <FiTrendingUp />
                  <p className="px-2 text-sm"> + 2 % </p>
                </div>
              </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1">
                <div className="flex flex-col justify-start p-2 ">
                  <span className="text-3xl mb-1">2 </span>
                  <span className="text-md text-gray-400"> Total Items </span>
                </div>
              </div>
            </div>
            <div className="row-span-1 lg:row-span-2  grid grid-row-4 shadow-md h-32 w-[250px] my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-1">
              <div className="row-span-1">
                <div className="flex justify-end p-2 text-green-500 text-xl ">
                  <FiTrendingUp />
                  <p className=" px-2 text-sm"> + 2 % </p>
                </div>
              </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1">
                <div className="flex flex-col justify-start p-2 ">
                  <span className="text-3xl mb-1">7 </span>
                  <span className="text-md text-gray-400"> scans today</span>
                </div>
              </div>
            </div>
            <div className="row-span-1 lg:row-span-2  grid grid-row-4 shadow-md h-32 w-[250px] my-5 rounded-lg bg-white sm:m-3 lg:m-0 lg:my-1">
              <div className="row-span-1">
                <div className="flex justify-end p-2 text-red-500 text-xl  ">
                  <span className="px-2 test-lg">
                    <FiTrendingDown />
                  </span>

                  <p className="text-sm"> - 2 % </p>
                </div>
              </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1"> </div>
              <div className="row-span-1">
                <div className="flex flex-col justify-start p-2 ">
                  <span className="text-3xl mb-1">7 </span>
                  <span className="text-md text-gray-400"> scans today</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={` ${
              open
                ? "hidden sm:flex sm:flex-col sm:justify-around"
                : " flex  flex-wrap justify-around "
            } `}
          >
            <div className="bg-white flex-1 w-full  lg:w-2/3 overflow-auto mr-2 ml-2 my-2 rounded-lg shadow-lg">
              <StackedChart data={chartData} />
            </div>

            <div className="shadow-lg w-full lg:w-1/3 bg-white px-5 mx-2 my-2 rounded-lg ">
              <p className="text-gray-700 pt-5 text-md font-bold p-2">
                Percentage of fake scans
              </p>
              <RadialChart data={radialChartData} />
            </div>
          </div>
          <div
            className={` ${
              open
                ? "hidden sm:flex sm:flex-col sm:justify-around"
                : " flex  flex-wrap justify-around "
            } max-w-screen `}
          >
            <div className="w-full px-5">
              <p className="text-gray-500 text-md py-3 "> List of Scans</p>

              <Table
                name={"Scans"}
                columns={[
                  "Item ID",
                  "Title",
                  "Numbers of Scans",
                  "Numbers of Fake Scans",
                  "Last Update",
                ]}

              />
            </div>
            <div className="w-full  ">
              <div className="p-3 w-full rounded-md flex flex-col justify-center  items-center">
                <p className="text-gray-500 text-lg font-bold py-3  ">
                  Last Fake Scan location
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8148194775436!2d36.82062467330691!3d-1.2850766987027047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d64f021b73%3A0xd4ff709886c9ee07!2s20th%20Century%20House!5e0!3m2!1sen!2ske!4v1687191200842!5m2!1sen!2ske"
                  width="600"
                  height="400"
                  loading="lazy"
                  className="rounded-lg p-5 bg-white "
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
