import React, { useContext } from "react";
import Header from "./Header";
import Form from "./Form";
import View from "./View";
import Footer from "./Footer";
import MemeContext from "../context/meme-context";

export default function App() {
  const ctx = useContext(MemeContext);

  return (
    <div className="app--wrapper">
      <div className="app--container">
        <Header />
        <Form
          handleImage={() => ctx.changeMeme()}
          handleText={(e) => ctx.changeText(e)}
          meme={ctx.setCurrMeme}
          memeData={ctx.currMeme}
        />
        <View memeData={ctx.currMeme} />
        <Footer />
      </div>
    </div>
  );
}
