import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app--wrapper">
      <div className="app--container">
        <Header />
        <Form />
        <Footer />
      </div>
    </div>
  );
}
