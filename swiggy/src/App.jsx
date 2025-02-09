import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Restorants from "./components/Restorants";
import Avaiable from "./components/Avaiable";

function App() {
  return (
    <>
      <Header />
      <Category />
      <Restorants/>
      <Avaiable/>
    </>
  );
}

export default App;
