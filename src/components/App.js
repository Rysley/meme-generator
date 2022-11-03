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

  function changeText(e) {
    const { name, value } = e.target;

    setCurrMeme((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  return (
    <div className="app--wrapper">
      <div className="app--container">
        <Header />
        <Form
          handleImage={() => changeMeme()}
          handleText={(e) => changeText(e)}
          meme={setCurrMeme}
          memeData={currMeme}
        />
        <View memeData={currMeme} />
        <Footer />
      </div>
    </div>
  );
}
