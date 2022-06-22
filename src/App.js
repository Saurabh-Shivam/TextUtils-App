import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enable or not

  const [alert, setAlert] = useState(null); // show alert

  const showAlert = (message, type) => {
    // type parameter will take the bootstrap types for whowing different types of alert
    // here alert has become an object
    setAlert({
      msg: message,
      type: type,
    });
    // code to automatically hide the alert message after few seconds
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // function for alert mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#192734";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter your text to analyze below"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>

      {/* <About /> */}
    </>
  );
}

export default App;
