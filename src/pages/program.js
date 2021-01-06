import React from "react"

import Preloader from "../components/Preloader/Preloader";
import Timer from "../components/Countdown/Timer";

import "../components/styles.css";

const Program = () => (
  <div className="App">
    <div className="container">
      <h1>
        Program
        <br />
        Coming Soon
      </h1>
      <Timer />
      <Preloader />
    </div>
  </div>
)

export default Program
