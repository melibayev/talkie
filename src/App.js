import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
