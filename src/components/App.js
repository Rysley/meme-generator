import React from "react";
import Header from "./Header";
import Form from "./Form";
import memesData from "../assets/memesData";
import View from "./View";
import Footer from "./Footer";

export default function App() {
  const [allMemeImg, setAllMemeImg] = React.useState(memesData.data.memes);

  const [currMeme, setCurrMeme] = React.useState({
    topText: "TOP TEXT",
    bottomText: "BOTTOM TEXT",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  function changeMeme() {
    const randNum = Math.floor(Math.random() * allMemeImg.length);
    const { url } = allMemeImg[randNum];

    setCurrMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  function changeText(e, name) {
    console.log(e.target.value);
    setCurrMeme((prevInput) => {
      return {
        ...prevInput,
        [name]: e.target.value
          ? e.target.value.toUpperCase()
          : e.target.placeholder.toUpperCase(),
      };
    });
  }

  return (
    <div className="app--wrapper">
      <div className="app--container">
        <Header />
        <Form
          handleImage={() => changeMeme()}
          handleText={(e) => changeText(e, e.target.name)}
          meme={setCurrMeme}
        />
        <View memeData={currMeme} />
        <Footer />
      </div>
    </div>
  );
}
