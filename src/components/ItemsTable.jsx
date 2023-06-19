import React from "react";
import { Table } from "./Table.jsx";

function Orders() {
  const data = [];
  const onEdit = () => {};
  const onDelete = () => {};

  return (
    <div className="p-10">
      <Table
        name={"Items"}
        columns={["Item ID", "Title", "Numbers of Scans", "Numbers of Fake Scans"  ]}
        data={data}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Orders;
