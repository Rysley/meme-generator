import React from "react";
import Header from "./Header";
import Form from "./Form";
import memesData from "../assets/memesData";
import View from "./View";
import Footer from "./Footer";

export default function App() {
  const [allMemeImg, setAllMemeImg] = React.useState(memesData.data.memes);

  const [currMeme, setCurrMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  return (
    <div className="app--wrapper">
      <div className="app--container">
        <Header />
        <Form data={allMemeImg} setCurrMeme={setCurrMeme} />
        <View src={currMeme.randomImage} />
        <Footer />
      </div>
    </div>
  );
}
