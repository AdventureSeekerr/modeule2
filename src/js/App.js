import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Sign-in";

export default function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav> */}


      <Routes>
        <Route path="/" element={<Registration />} />
      </Routes>
    </>

  )
}
