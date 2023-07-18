import { useEffect, useState } from "react";
import { Table } from "./Table.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { Modal } from "./Modal";
import { AddForm } from "./AddForm.jsx";
import { ViewItemForm } from "../forms/ViewItemForm.jsx";
import { createNewItem, getItems, deleteItem } from "../api/services.js";
import { Toast } from "primereact/toast";

function Items() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const onEdit = () => {
    setIsEdit(true);
    setViewModalVisisble(true);
    setItem(data);
  };
  const onDelete = async (item) => {
    const res = await deleteItem(item.id);
    if (res) {
      toast.current.show({
        severity: "danger",
        summary: "Success Message",
        detail: "Item Deleted",
        life: 3000,
      });
      await getItems();
    }
  };
  const onView = (data) => {
    setIsEdit(false);
    setViewModalVisisble(true);
    setItem(data);
  };
  const [visible, setVisible] = useState(false);
  const [viewModalVisible, setViewModalVisisble] = useState(false);
  const getItemsdata = async () => {
    const res = await getItems();
    setData(res.data);
    console.log(data);
  };
  const getItem = async (id) => {
    const res = await getItem(id);
    setItem(res.data);
  };
  const onSubmit = async (itemData) => {
    const formData = new FormData();
    formData.append("name", itemData.name);
    formData.append("image", itemData.image);
    formData.append("id", itemData.id);
    formData.append("description", itemData.description);
    const res = await createNewItem({
      formData,
    });
    if (res) {
      setVisible(false);
    }
  };

  useEffect(() => {
    getItemsdata();
  }, []);

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
        columns={["unique_id", "name", "Numbers of Scans", "created at"]}
        data={data}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
      />
      <Modal header={"Add New Item"} visible={visible} setVisible={setVisible}>
        <AddForm onSubmit={onSubmit} />
      </Modal>
      <Modal
        header={isEdit ? "Edit" : "View Item"}
        visible={viewModalVisible}
        setVisible={setViewModalVisisble}
      >
        <ViewItemForm data={item}  isEdit={isEdit}/>
      </Modal>
    </div>
  );
}

export default Items;
