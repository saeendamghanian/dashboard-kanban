import React from "react";
import logo from "./logo.svg";
import "./App.css";
import IconContainer from "./components/IconContainer";

function App() {
  // The fake data instead of the data which should get from DB.
  let callStatus = ["successful", "unsuccessful", "not yet"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <IconContainer hasMet={true} callStatus={callStatus[0]} />
      </header>
    </div>
  );
}

export default App;
