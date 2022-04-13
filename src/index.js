import React from "react";
import  ReactDOM  from "react-dom";

import "./index.css"


import HeaderNameDescription from "./components/headerNameDescription.js"

import Board from "./components/game.js"

ReactDOM.render(
    <Board/>,
    document.getElementById("root")
 );