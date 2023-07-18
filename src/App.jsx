import { Route, Routes } from "react-router-dom";
import SidebarNavigation from "./components/SidebarNavigation.jsx";
import Login from "./components/Login.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import Register from "./components/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Items from "./components/Items.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Orders from "./components/Orders.jsx";
import  Editor  from "./components/Editor.jsx";
import Groups from "./components/Groups.jsx";

function App() {
  return (
    <>
      <div>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <SidebarNavigation />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/dashboard/items"
                element={
                  <ProtectedRoute>
                    <Items />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/dashboard/orders"
                element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/dashboard/groups"
                element={
                  <ProtectedRoute>
                    <Groups />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/dashboard/editor"
                element={
                  <ProtectedRoute>
                    <Editor/>
                  </ProtectedRoute>
                }
              ></Route>
            </Route>
          </Routes>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
