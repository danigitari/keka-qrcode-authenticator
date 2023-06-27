import React from "react";
import { Table } from "./Table.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { Modal } from "./Modal";
import { AddForm } from "./AddForm.jsx";
import { createNewItem } from "../api/services.js";

function Items() {
  const data = [];
  const onEdit = () => {};
  const onDelete = () => {};
  const [visible, setVisible] = useState(false);

  const onSubmit = async (itemData) => {
    const formData = new FormData();
    formData.append("image", itemData.image);
    formData.append("title", itemData.title);
    formData.append("description", itemData.description);
;
    await createNewItem({
     itemData
    });
  };

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
        <button
          className="flex px-4 py-2  items-center rounded-md text-white bg-kekaBlue shadow-lg"
          onClick={() => setVisible(true)}
        >
          <p className="text-white font-extrabold">
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
          "Last Update",
        ]}
        data={data}
        onEdit={onEdit}
        onDelete={onDelete}
      />{" "}
      <Modal header={"Add New Asset"} visible={visible} setVisible={setVisible}>
        <AddForm onSubmit={onSubmit} />
      </Modal>
    </div>
  );
}

export default Items;
