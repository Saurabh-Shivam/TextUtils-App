import React, { useState } from "react";

export default function TextForm(props) {
  // Updatation of state is done in this function
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  // For Lowering text
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // For Clearing text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  // For Copying text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied");
  };

  // For Removing Extra Spaces
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/); // Used javascript regex
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState("");
  // Here we have set the initial value in the state variable text as string which is -> "Enter text here"

  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#192734",
        }}
      >
        <h1> {props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            // here we have used double urly braces bcz we are creating object inside javascript here
            style={{
              backgroundColor: props.mode === "dark" ? "#192734" : "white",
              color: props.mode === "dark" ? "white" : "#192734",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        {/* // here handleUpClick function is called which is actually used for upating the state */}
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#192734",
        }}
      >
        <h2>Your text summary</h2>
        {/* here split will give an array which will have words */}
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here!!"}
        </p>
      </div>
    </>
  );
}
