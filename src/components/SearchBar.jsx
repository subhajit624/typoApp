import React, { useState } from "react";
import "./SearshBar.css";

function SearchBar({ setResponse, setShow, userInput, setUserInput, onSearch }) {
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!userInput) return;
    setLoading(true);

    try {
      await onSearch(); // 👈 trigger parent-side logic
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Enter your prompt..."
        className="search"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="searchbtn" onClick={handleSearch}>
        <img src="https://img.icons8.com/?size=100&id=RHtRRB1E4DKI&format=png&color=000000" alt="send" style={{height:"15px"}} />
      </button>

      {loading && <p>Loading...</p>}
    </div>
  );
}

export default SearchBar;

