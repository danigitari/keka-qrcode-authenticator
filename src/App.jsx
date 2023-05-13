import { Route, Routes } from "react-router-dom";
import SidebarNavigation from "./components/SidebarNavigation.jsx";
import Login from "./components/Login.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import Register from "./components/Register.jsx"; 
import ProtectedRoute from "./components/ProtectedRoute.jsx";
function App() {
  return (
    <>
      <div>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<SidebarNavigation />}></Route>
            <Route
              path="/register"
              element={
                <ProtectedRoute>
                  <Register />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
