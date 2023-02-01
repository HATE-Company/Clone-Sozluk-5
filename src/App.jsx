import React from "react";

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/global.scss";


import { NavSearch } from "/src/components/Navbar";
import { Layout } from "./components/Layout";
import { Loginbox } from "./components/Loginbox";

function App() {
  return (
    <>
      <NavSearch />
      <Layout />
      <Loginbox />
    </>
  );
}

export default App;
