import React from "react";

function NavBar() {
  return (
    <div className="flex items-center justify-end relative  px-5 py-3">
      <div
        className={` ${
          open ? "hidden md:flex justify-end" : "flex justify-end "
        }`}
      >
        <Dropdown
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
              className="rounded-full"
            />
          }
          arrowIcon={false}
          inline={true}
        >
          <Dropdown.Header>
            <span
              className={` ${
                open
                  ? "hidden sm:flex text-md text-gray-400"
                  : "flex text-md text-gray-400"
              }`}
            >
              {user && user.email} <i data-feather="chevron-down"></i>
            </span>
            <span className="block truncate text-sm font-medium">
              {user && user.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            {" "}
            <div onClick={handleLogout}> Sign out </div>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div
        className={` ${
          open ? " hidden sm:inline" : " inline "
        } text-md text-md text-gray-400 font-[13px] px-2 `}
      >
        {" "}
        Daniel Gitari
      </div>
    </div>
  );
}

export default NavBar;
