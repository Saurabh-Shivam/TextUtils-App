import React, { useState } from "react";

export default function TextForm(props) {
  // Updatation of state is done in this function
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!!", "success");
  };

  // For Lowering text
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!!", "success");
  };

  // For Clearing text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!!", "success");
  };

  // For Copying text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // alert("Copied");
    props.showAlert("Copied to clipboard!!", "success");
  };

  // For Removing Extra Spaces
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/); // Used javascript regex
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!!", "success");
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
        <h2 className="mb-4"> {props.heading} </h2>
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
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Lowercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
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
        {/* This will show number of words in the line */}
        <p>
          {
            /* \s = Any time of white space including new lines */
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>

        {/* This will show time to read the line */}
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!!"}</p>
      </div>
    </>
  );
}
