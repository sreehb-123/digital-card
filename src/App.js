import React from "react";
import Header from "./components/header";
import Content from "./components/content";
import Contacts from "./components/contacts"; 

export default function App() {
  return(
    <div className="app-container">
      <Header />
      <Content />
      <Contacts />
    </div>
  )
}