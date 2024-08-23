import React from "react";

const Suggestion = ({ handleSearch, data, setdata }) => {
  return (
    <div>
      <div className="wrapper">
        <input
          type="text"
          placeholder="Enter destination"
          value={data}
          onChange={(e) => setdata(e.target.value)}
        />
        <button onClick={handleSearch}>Seach</button>
      </div>
    </div>
  );
};

export default Suggestion;
