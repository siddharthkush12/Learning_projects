import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Restorants from "./components/Restorants";
import Avaiable from "./components/Avaiable";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Category />
      <Restorants/>
      <Avaiable/>
      <Footer/>
    </>
  );
}

export default App;
