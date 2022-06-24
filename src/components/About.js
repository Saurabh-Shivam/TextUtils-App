import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#192734",
    backgroundColor: props.mode === "dark" ? "#192734" : "white",
  };

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#192734" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn  btn-block text-left collapsed"
                style={myStyle}
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze your text</strong>
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-block text-left collapsed"
                style={myStyle}
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="card" style={myStyle}>
          <div className="card" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-block text-left collapsed"
                style={myStyle}
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong> Browser Compatible</strong>
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body" style={myStyle}>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="container" style={myStyle}>
    //   <h1 className="my-3">About Us</h1>
    //   <div className="accordion" id="accordionExample">
    //     <div className="accordion-item">
    //       <h2 className="accordion-header" id="headingOne">
    //         <button
    //           className="accordion-button"
    //           style={myStyle}
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseOne"
    //           aria-expanded="true"
    //           aria-controls="collapseOne"
    //         >
    //           Analyze your text
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseOne"
    //         className="accordion-collapse collapse show"
    //         aria-labelledby="headingOne"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body" style={myStyle}>
    //           <strong>This is the first item's accordion body.</strong> It is
    //           shown by default, until the collapse plugin adds the appropriate
    //           classes that we use to style each element. These classes control
    //           the overall appearance, as well as the showing and hiding via CSS
    //           transitions. You can modify any of this with custom CSS or
    //           overriding our default variables. It's also worth noting that just
    //           about any HTML can go within the <code>.accordion-body</code>,
    //           though the transition does limit overflow.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="accordion-item" style={myStyle}>
    //       <h2 className="accordion-header" id="headingTwo">
    //         <button
    //           className="accordion-button collapsed"
    //           style={myStyle}
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseTwo"
    //           aria-expanded="false"
    //           aria-controls="collapseTwo"
    //         >
    //           Free to use
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseTwo"
    //         className="accordion-collapse collapse"
    //         aria-labelledby="headingTwo"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body" style={myStyle}>
    //           <strong>This is the second item's accordion body.</strong> It is
    //           hidden by default, until the collapse plugin adds the appropriate
    //           classes that we use to style each element. These classes control
    //           the overall appearance, as well as the showing and hiding via CSS
    //           transitions. You can modify any of this with custom CSS or
    //           overriding our default variables. It's also worth noting that just
    //           about any HTML can go within the <code>.accordion-body</code>,
    //           though the transition does limit overflow.
    //         </div>
    //       </div>
    //     </div>
    //     <div className="accordion-item">
    //       <h2 className="accordion-header" id="headingThree">
    //         <button
    //           className="accordion-button collapsed"
    //           style={myStyle}
    //           type="button"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#collapseThree"
    //           aria-expanded="false"
    //           aria-controls="collapseThree"
    //         >
    //           Browser Compatible
    //         </button>
    //       </h2>
    //       <div
    //         id="collapseThree"
    //         className="accordion-collapse collapse"
    //         aria-labelledby="headingThree"
    //         data-bs-parent="#accordionExample"
    //       >
    //         <div className="accordion-body" style={myStyle}>
    //           <strong>This is the third item's accordion body.</strong> It is
    //           hidden by default, until the collapse plugin adds the appropriate
    //           classes that we use to style each element. These classes control
    //           the overall appearance, as well as the showing and hiding via CSS
    //           transitions. You can modify any of this with custom CSS or
    //           overriding our default variables. It's also worth noting that just
    //           about any HTML can go within the <code>.accordion-body</code>,
    //           though the transition does limit overflow.
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Dark Mode Button */}
    //   {/* <div className="container my-3">
    //     <button onClick={toggleStyle} type="button" className="btn btn-primary">
    //       {btnText}
    //     </button>
    //   </div> */}
    // </div>
  );
}
