import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import ReadMore from "./components/work/ReadMore";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/readmore/:id" element={<ReadMore />} />
      </Routes>
    </>
  );
}

export default App;
