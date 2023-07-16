import { useRef } from "react";
import { UserAuth } from "../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";

function NavBar() {
  const { user, logout } = UserAuth();
  const Navigate = useNavigate();
  const menuRight = useRef(null);
  const items = [
    {
      label: "Email",
      icon: "pi pi-refresh",
      command: () => {
        toast.current.show({
          severity: "success",
          summary: "Updated",
          detail: "Data Updated",
        });
      },
    },
    {
      label: "Logout",
      icon: "pi pi-times",
      command: () => {
        toast.current.show({
          severity: "warn",
          summary: "Delete",
          detail: "Data Deleted",
        });
      },
    },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between relative bg-gray-50 w-full px-5 py-3">
        <div
          className={` ${
            open ? " hidden sm:inline" : " inline "
          } text-md text-md text-gray-900 font-[13px] px-2 `}
        >
          <p className="pl-5 text-xl ">Dashboard</p>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex items-center ">
            <Avatar
              label=""
              icon="pi pi-align-right"
              className="mr-2"
              onClick={(event) => menuRight.current.toggle(event)}
              aria-controls="popup_menu_right"
              aria-haspopup
            />
            <Menu model={items} popup ref={menuRight} />
            <span className="text-gray-500"> asjkdfna;sdjkf</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
