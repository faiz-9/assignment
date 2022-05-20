import React from "react";
import {Routes, Route } from "react-router-dom";
import RegiForm from "./components/RegiForm/RegiForm";
import Bar from "./components/Graph/Bar";

function App() {
  return (
      <Routes>        
        <Route path="/" element={< RegiForm />} />
        <Route path="/bar" element={< Bar />} />
      </Routes>
  
  );
}

export default App;
