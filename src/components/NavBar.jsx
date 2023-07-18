import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { useAuthContext } from "../hooks/useAuthContext";
import { BiLogOut } from "react-icons/bi";
import { logout } from "../api/services.js";

function Navbar() {
  const Navigate = useNavigate();
  const menuRight = useRef(null);
  const { user } = useAuthContext();
  const items = [

    {
      label: "Logout",
      icon: <BiLogOut />,
      command: () => {
        handleLogout();
      },
    },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("token");
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(user);
  }, []);

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
            <span className="text-gray-500"> { user ? ( user.user?.email ) : null } </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
