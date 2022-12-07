import React from "react";

const MemeContext = React.createContext({
  topText: "TOP TEXT",
  bottomText: "BOTTOM TEXT",
  randomImage: "https://i.imgflip.com/1g8my4.jpg",
  changeMeme: () => {},
  changeText: () => {},
});

export const MemeContextProvider = (props) => {
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
    <MemeContext.Provider
      value={{
        changeMeme: changeMeme,
        changeText: changeText,
        currMeme: currMeme,
      }}
    >
      {props.children}
    </MemeContext.Provider>
  );
};

export default MemeContext;
