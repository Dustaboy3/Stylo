import React from 'react';
import './App.css';

// pages import 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForOFor from './pages/404';
import Home from './pages/homepage';
import Layout from './pages/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<ForOFor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
