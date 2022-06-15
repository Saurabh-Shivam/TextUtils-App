import React, { useState } from "react";

export default function TextForm(props) {
  // Updatation of state is done in this function
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState("Enter text here");
  // Here we have set the initial value in the state variable text as string which is -> Enter text here

  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state

  return (
    <div>
      <h1> {props.heading} </h1>{" "}
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>{" "}
      </div>{" "}
      {/* // here handleUpClick function is called which is actually used for upating the state */}{" "}
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase{" "}
      </button>{" "}
    </div>
  );
}
