import React from "react";
import { Table } from "./Table.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { useLocation } from "react-router-dom";

function Orders() {
  const data = [];
  const onEdit = () => {};
  const onDelete = () => {};

  return (
    <div className="px-10 pt-5 h-screen">
      <div className="flex items-center justify-between pb-5 ">
        <div className="bg-gray-200  pt-3 ">
          {" "}
          <span className="px-1 flex">
            Home
            <p className="text-[#1762E2] px-2 flex gap-x-2">
              <p className="text-xl flex items-center">
                <BiChevronRight />
              </p>
              {location.pathname.slice(1).replace("/", "  / ")}
            </p>
          </span>
        </div>
        <button className="flex px-4 py-2  items-center rounded-md text-white bg-kekaBlue shadow-lg">
          <p className="text-white font-bold">
            <AiOutlinePlus />
          </p>
          <p className="pl-1 pr-2"> Add New Item</p>
        </button>
      </div>
      <Table
        name={"Items"}
        columns={[
          "Item ID",
          "Title",
          "Numbers of Scans",
          "Numbers of Fake Scans",
        ]}
        data={data}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Orders;
