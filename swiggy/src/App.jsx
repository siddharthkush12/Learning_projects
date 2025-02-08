import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Restorants from "./components/Restorants";

function App() {
  return (
    <>
      <Header />
      <Category />
      <Restorants/>
    </>
  );
}

export default App;
