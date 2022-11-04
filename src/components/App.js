import React from "react";
import Header from "./Header";
import Form from "./Form";
/* import memesData from "../assets/memesData"; */
import View from "./View";
import Footer from "./Footer";

export default function App() {
  const [allMemeImg, setAllMemeImg] = React.useState({});

  const [currMeme, setCurrMeme] = React.useState({
    topText: "TOP TEXT",
    bottomText: "BOTTOM TEXT",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImg(data.data.memes));
  }, []);

  function changeMeme() {
    const randNum = Math.floor(Math.random() * allMemeImg.length);
    const { url } = allMemeImg[randNum];

    setCurrMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  function changeText(e) {
    const { name, value } = e.target;
    setCurrMeme((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
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
