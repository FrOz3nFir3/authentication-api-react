import React from "react";
import "./App.css";
import {NavLink, Outlet} from "react-router-dom";

function App() {

 return <>
  <ul className="navigation">
   <NavLink to="login">Login</NavLink>
   <NavLink to="profile">Profile</NavLink>
  </ul>
  <Outlet/>
 </>
}

export default App;
