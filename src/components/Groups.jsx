
import { Table } from "./Table.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import { Modal } from "./Modal";
import { AddForm } from "./AddForm.jsx";

function Groups() {
  const data = [];
  const onEdit = () => {};
  const onDelete = () => {};
  const [visible, setVisible] = useState(false);
  const onSubmit = async (data) => {};

  return (
    <div className="px-10 pt-5 h-screen">
      <div className="flex items-center justify-between pb-5 ">
        <div className="bg-gray-200  pt-3 ">
          <span className="px-1 flex">
            Home
            <p className="text-[#1762E2] px-2 flex gap-x-2">
              <p className="text-xl flex items-center">
                <BiChevronRight />
              </p>
              {location.pathname.slice(1).replace("/", " / ")}
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
          <p className="pl-1 pr-2"> Add New Group</p>
        </button>
      </div>
      <Table
        name={"Groups"}
        columns={[
          "Group ID",
          "Group Name",
          "Numbers of Items",
          "Creation Date",
          "Last Update",
        ]}
        data={data}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <Modal header={"Add New Asset"} visible={visible} setVisible={setVisible}>
        <AddForm onSubmit={onSubmit} />
      </Modal>
    </div>
  );
}

export default Groups;
