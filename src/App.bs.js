'use strict';

var React = require("react");
var Timer$ReasonmlReactPlayground = require("./Timer.bs.js");

((require('./assets/style.css')));

function App(Props) {
  return React.createElement("div", {
              className: "app-container"
            }, React.createElement(Timer$ReasonmlReactPlayground.make, {}));
}

var make = App;

exports.make = make;
/*  Not a pure module */
