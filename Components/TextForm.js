import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowerClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const [text, setText] = useState();
  //text = "Saurabh Upreti" // Wrong way to change the state
  //setText("New Text"); // Correct way to change the state
  return (
    <>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control my-3"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          placeholder="Enter text here"
        ></textarea>
        <button className="btn btn primary my-3" onClick={handleUpClick}>
          Convert to Upercase
        </button>
        <button className="btn btn primary my-3" onClick={handleLowerClick}>
          Convert to lowercase
        </button>
      </div>

      <div className="container my-2">
        <h2>Text summray</h2>
        <p>
          {} characters.
        </p>
      </div>
    </>
  );
}
