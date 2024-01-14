import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useAuth } from "./context/AuthContext";
import Profile from "./pages/Profile/Profile";
function App() {
  const { authenticated } = useAuth()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {authenticated ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        ) : (
          <Route
            path="/*"
            element={<Navigate to="/login" />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
