'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

((require('./Timer.css')));

function Timer(Props) {
  var match = React.useState(function () {
        return 1500;
      });
  var setTimeLeft = match[1];
  var timeLeft = match[0];
  var match$1 = React.useState(function () {
        
      });
  var setTimerRef = match$1[1];
  var timerRef = match$1[0];
  var match$2 = React.useState(function () {
        return /* Start */0;
      });
  var setTimerState = match$2[1];
  var timerState = match$2[0];
  var buttonText = function (param) {
    switch (timerState) {
      case /* Start */0 :
          return "START";
      case /* Running */1 :
          return "PAUSE";
      case /* Stop */2 :
          return "START OVER";
      
    }
  };
  var timerStart = function (param) {
    var timer = setInterval((function (param) {
            if (timeLeft > 0) {
              return Curry._1(setTimeLeft, (function (time) {
                            return time - 1 | 0;
                          }));
            } else if (timerRef !== undefined) {
              clearInterval(Caml_option.valFromOption(timerRef));
              return Curry._1(setTimerState, (function (param) {
                            return /* Stop */2;
                          }));
            } else {
              return ;
            }
          }), 1000);
    Curry._1(setTimerState, (function (param) {
            return /* Running */1;
          }));
    return Curry._1(setTimerRef, (function (param) {
                  return Caml_option.some(timer);
                }));
  };
  return React.createElement("div", {
              className: "timer"
            }, React.createElement("div", {
                  className: "mode-menu"
                }, React.createElement("button", {
                      className: "timer-button"
                    }, "Work"), React.createElement("button", {
                      className: "timer-button"
                    }, "Short Break"), React.createElement("button", {
                      className: "timer-button"
                    }, "Long Break")), React.createElement("h1", {
                  className: "timer-header"
                }, "Pomodoro Timer"), React.createElement("h2", {
                  className: "timer-time"
                }, timeLeft / 60 | 0, ":", timeLeft % 60), React.createElement("button", {
                  className: "timer-button",
                  onClick: timerStart
                }, buttonText(undefined)));
}

var make = Timer;

exports.make = make;
/*  Not a pure module */
