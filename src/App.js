import React, { useState } from "react";
import "./styles.css";

const moviesCollection = {
  Action: [
    { name: "6 Underground", rating: "6.1/10" },
    { name: "Old Guard", rating: "6.6/10" },
    { name: "Triple Frontier", rating: "6.4/10" }
  ],

  Horror: [
    { name: "Sabrina", rating: "4.2/10" },
    { name: "The Silence", rating: "5.3/10" },
    { name: "The 3rd Eye", rating: "5.1/10" }
  ],
  Adventure: [
    { name: "Aquaman", rating: "6.9/10" },
    { name: "Mowgli: Legend of the Jungle", rating: "6.5/10" },
    { name: "Nancy Drew and the Hidden Staircase", rating: "5.7/10" }
  ]
};

const buttonStyle = {
  cursor: "pointer",
  fontFamily: "Montserrat",
  background: "#E5E7EB",
  borderRadius: "0.5rem",
  boxShadow: "0.2rem 0.2rem",
  padding: "0.5rem  1rem",
  border: "1px solid black",
  margin: "1rem 0.3rem",
  outline: "none"
};

const listItemStyle = {
  listStyle: "none",
  padding: "1rem",
  border: "1px solid #F9FAFB",
  boxShadow: "0.2rem 0.2rem",
  width: "60%",
  margin: "1rem 0rem",
  borderRadius: "0.5rem"
};
export default function App() {
  const [genre, setGenre] = useState("Action");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Lights! 💡 Camera! 🎥 Action! 🎬</h1>
      <p>Check out these movies on Netflix, pick up a genre to get started.</p>
      <div>
        {Object.keys(moviesCollection).map((genre) => (
          <button onClick={() => genreClickHandler(genre)} style={buttonStyle}>
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ border: "1px solid black" }} />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesCollection[genre].map((movie) => (
            <li key={movie.name} style={listItemStyle}>
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
