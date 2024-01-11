import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
