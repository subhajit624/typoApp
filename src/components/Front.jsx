import React, { useState } from "react";
import "./Front.css";
import logo from "../image/typologo2.png";
import boylogo from "../image/boy.png";
import Title from "./Title";
import Box from "./Box";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

function Front() {
  const [show, setShow] = useState(true);
  const [response, setResponse] = useState(""); 
  const [userInput, setUserInput] = useState(""); 

  const handleBoxClick = (text) => {
    setUserInput(text); 
    setShow(true); 
  };

  return (
    <div className="front">
      <div className="navbar" style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={logo} style={{ height: "80px", width: "80px" }} alt="Logo" />
        <img src={boylogo} alt="user" style={{ height: "30px", width: "30px", margin: "25px", cursor: "pointer" }} />
      </div>

      {show ? (
        <>
          <Title />
          <Box onBoxClick={handleBoxClick} /> 
        </>
      ) : (
        <div className="result">
    <p><img src={boylogo} alt="user" style={{ height: "30px", width: "30px"}} /> {userInput} <br /><br /><br /><br /></p>
    <p>
    <strong>Ans:</strong>{response}
  </p>
  </div>
      )}

      <SearchBar setResponse={setResponse} setShow={setShow} userInput={userInput} setUserInput={setUserInput} />

      {show ? <Footer /> : null}
    </div>
  );
}

export default Front;


