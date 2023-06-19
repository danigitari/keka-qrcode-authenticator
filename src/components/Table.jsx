import React, { useState, useRef } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { AiOutlineSearch } from "react-icons/ai";

export function Table({ name, columns, data, onEdit, onDelete }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [currentRowData, setCurrentRowData] = useState({});
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const goToFarmDashboard = (rowData) => {
    navigate(`/dashboard/${rowData.id}`);
  };
  const onSubmit = async (data) => {
    setEditModal(false);
  };

  const deleteItem = async (rowData) => {
    // setIsLoading(true)
    onDelete(rowData).then(() => {
      refreshOnUpdateData();
    });
  };
  const accept = (rowData) => {
    toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have accepted",
      life: 3000,
    });
  };

  const reject = () => {
    setVisible(false);
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

  useEffect(() => {}, [name, columns, data, onEdit, onDelete]);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    "country.name": {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    date: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    balance: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const toast = useRef(null);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const deleteActionBodyTemplate = (rowData) => {
    return (
      <button
        className="text-white bg-red-500 text-md rounded-full shadow-md py-2 px-6 flex gap-x-2"
        onClick={() => {
          setIsLoading(true), deleteItem(rowData);
        }}
      >
        {isLoading ? (
          <ProgressSpinner
            style={{ width: "20px", height: "30px" }}
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
            className="text-green-500"
          />
        ) : null}

        <p className="flex items-center">Delete</p>
      </button>
    );
  };

  const editActionBodyTemplate = (rowData) => {
    return (
      <button
        className="text-white bg-blue-500 text-md rounded-full shadow-md py-2 px-6"
        onClick={() => onEdit(rowData)}
      >
        Edit
      </button>
    );
  };

  const refreshOnUpdateData = () => {
    if (localStorage.getItem("reloaded")) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem("reloaded");
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem("reloaded", "1");
      window.location.reload(true);
    }
  };

  const header = (() => {
    return (
      <div className="flex justify-between flex-wrap gap-2 justify-content-between align-items-center h-8">
        <h4 className="m-0 pt-2 ">{name}</h4>
        <span className="p-input-icon-left">
          <AiOutlineSearch />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
            className="h-8 text-sm"
          />
        </span>
      </div>
    );
  })();

  return (
    <div className=" w-full ">
      <Toast ref={toast} />
      <ConfirmDialog />
      {/* <Modal visible={editModal} setVisible={setEditModal}>
        <FarmForm onSubmit={onSubmit} />
      </Modal> */}
      <div className="card bg-white p-5 rounded-md shadow-md  ">
        <DataTable
          value={data}
          paginator
          header={header}
          rows={10}
          showGridlines
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          rowsPerPageOptions={[10, 25, 50]}
          dataKey="id"
          selectionMode="checkbox"
          selection={selectedItems}
          onSelectionChange={(e) => setSelectedItems(e.value)}
          filters={filters}
          filterDisplay="menu"
          globalFilterFields={[
            "name",
            "country.name",
            "representative.name",
            "balance",
            "status",
          ]}
          emptyMessage={`No ${name} found.`}
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "1rem" }}
          ></Column>
          {columns.map((column, idx) => (
            <Column
              key={idx}
              field={column}
              header={column.charAt(0).toUpperCase() + column.slice(1)}
              filter
              sortable
              filterPlaceholder="Search by name"
              style={{ minWidth: "6rem" }}
              className="text-sm"
            />
          ))}

          <Column
            header="Edit"
            body={editActionBodyTemplate}
            exportable={false}
            style={{ minWidth: "6rem" }}
            className="text-sm"
          ></Column>
          <Column
            header="Delete"
            body={deleteActionBodyTemplate}
            exportable={false}
            style={{ minWidth: "6rem" }}
            className="text-sm"
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
