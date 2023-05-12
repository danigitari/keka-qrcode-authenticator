import { Route, Routes } from "react-router-dom";
import SidebarNavigation from "./components/SidebarNavigation.jsx";
import Login from "./components/Login.jsx";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/dashboard" element={<SidebarNavigation />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
