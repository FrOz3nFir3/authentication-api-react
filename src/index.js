import React from "react";
import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from "./App";
import {Profile} from "./Profile";
import {Login} from "./Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/authentication-api-react" element={<App/>}>
          <Route path="profile" element={<Profile/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
