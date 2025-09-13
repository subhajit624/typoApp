import React, { useState } from "react";
import "./Front.css";
import logo from "../image/typologo2.png";
import boylogo from "../image/boy.png";
import Title from "./Title";
import Box from "./Box";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Slidebar from "./Slidebar";
import { fetchOpenRouterMessage } from "./Api";

function Front() {
  const [show, setShow] = useState(true);
  const [response, setResponse] = useState("");
  const [userInput, setUserInput] = useState("");
  const [searchedInput, setSearchedInput] = useState(""); 
  const [recentTasks, setRecentTasks] = useState([]);

  const handleSearch = async () => {
    if (!userInput) return;

    try {
      const message = await fetchOpenRouterMessage(userInput);
      setResponse(message);
      setShow(false);

      setSearchedInput(userInput); 

      if (!recentTasks.includes(userInput)) {
        setRecentTasks((prev) => [...prev, userInput]);
      }
    } catch (error) {
      setResponse("Error fetching data.");
    }
  };

  const handleBoxClick = (text) => {
    setUserInput(text);
    setShow(true);
  };

  const handleRecentClick = (item) => {
    setUserInput(item);
    handleSearch();
  };

  return (
    <div className="container">
      <Slidebar recentTasks={recentTasks} onRecentClick={handleRecentClick} />
      <div className="front">
        <div className="navbar" style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={logo} style={{ height: "80px", width: "80px" }} alt="Logo" />
          <img
            src={boylogo}
            alt="user"
            style={{ height: "30px", width: "30px", margin: "25px", cursor: "pointer" }}
          />
        </div>

        {show ? (
          <>
            <Title />
            <Box onBoxClick={handleBoxClick} />
          </>
        ) : (
          <div className="result">
                        <p style={{paddingBottom:"70px"}}>
              <img
                src={boylogo}
                alt="user"
                style={{
                  height: "30px",
                  width: "30px",
                  verticalAlign: "middle",
                  marginRight: "8px"
                }}
              />
              <span style={{ verticalAlign: "middle" }}>{searchedInput}</span>
            </p>

            <p>
              <strong>Ans:</strong> {response}
            </p>
          </div>
        )}

        <SearchBar
          setResponse={setResponse}
          setShow={setShow}
          userInput={userInput}
          setUserInput={setUserInput}
          onSearch={handleSearch}
        />

      </div>
    </div>
  );
}

export default Front;



