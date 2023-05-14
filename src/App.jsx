import { Route, Routes } from "react-router-dom";
import SidebarNavigation from "./components/SidebarNavigation.jsx";
import Login from "./components/Login.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import Register from "./components/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ItemsTable from "./components/ItemsTable.jsx";
function App() {
  return (
    <>
      <div>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/items" element={<ItemsTable />}></Route>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <SidebarNavigation />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
