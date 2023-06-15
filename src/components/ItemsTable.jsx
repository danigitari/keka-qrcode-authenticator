import React from "react";
import DataTable from "react-data-table-component";

function ItemsTable() {
  const columns = [
    { selector: (row) => row.name, title: "Name", field: "name", width: 150 },
    {
      selector: (row) => row.age,
      title: "Age",
      field: "age",
      hozAlign: "left",
      formatter: "progress",
    },
    { selector: (row) => row.col, title: "Favourite Color", field: "col" },
    {
      selector: (row) => row.dob,
      title: "Date Of Birth",
      field: "dob",
      hozAlign: "center",
    },
  ];
  var data = [
    { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
    { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
    {
      id: 3,
      name: "Christine Lobowski",
      age: "42",
      col: "green",
      dob: "22/05/1982",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "125",
      col: "orange",
      dob: "01/08/1980",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "16",
      col: "yellow",
      dob: "31/01/1999",
    },
  ];
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center m-20 ">
        <DataTable columns={columns} data={data}></DataTable>
      </div>
    </div>
  );
}

export default ItemsTable;
