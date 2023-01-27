import React from "react";
import "./App.css";

// pages import test1
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForOFor from "./pages/404";
import Home from "./pages/homepage";
import Layout from "./pages/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout data-testid="layout" />}>
          <Route index element={<Home data-testid="home" />} />
          <Route path="*" element={<ForOFor data-testid="404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
