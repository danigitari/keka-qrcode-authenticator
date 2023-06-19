import React from 'react'
import { Table } from './Table.jsx'

function Orders() {
    const data = []
    const onEdit = () => {}
    const onDelete = () => {}


  return (
    <div className="p-10">
      <Table
        name={"Orders"}
        columns={["type", "description", "quantity"]}
        data={data}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Orders