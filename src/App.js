import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbox from "./components/Navbox";
// import AfterNav from "./components/AfterNav";
import Routing from "./components/Routing";
import { useSelector } from "react-redux";
import AfterNav from "./components/AfterNav";

function App() {
  const loggedInStatus = useSelector((state) => state.status);
  return (
    <>
      {loggedInStatus ? <AfterNav /> : <Navbox />}
      <Routing />
    </>
  );
}

export default App;
