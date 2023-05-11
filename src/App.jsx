import { Routes, Route } from "react-router-dom";
import Nav from "./Dashboard.jsx";
import SidebarNavigation from "./SidebarNavigation.jsx";
function App() {
  return (
    <>
      <div className="w-screen">
        <SidebarNavigation />
      </div>
    </>
  );
}

export default App;
