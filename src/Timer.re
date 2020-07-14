[%bs.raw {| require('./Timer.css') |}];

type timerState =
  | Start
  | Running
  | Stop;

[@react.component]
let make = _ => {
    let (timeLeft,setTimeLeft) = React.useState(_ => 3);
    let (timerRef, setTimerRef) = React.useState(_ => None);
    let (timerState, setTimerState) = React.useState(_ => Start);
    let minutes = _ => timeLeft / 60;
    let seconds = _ => timeLeft mod 60;
    let buttonText = _ => {
      switch timerState {
      | Start => "START"
      | Running => "PAUSE"
      | Stop => "START OVER"
      };
    };
    let timerStart = _ => {
      let timer = Js.Global.setInterval(_ => {
        setTimeLeft(time => {
          if (time > 0) {
            time - 1
          } else {
            setTimerState(_ => Stop);
            switch timerRef {
              | Some(t) => Js.Global.clearInterval(t)
              | None => ()
            };
            0
          }
        })
      }, 1000);
      setTimerState(_ => Running);
      setTimerRef(_ => Some(timer));
      Js.log("Timer should start");
    };
    let buttonBehavior = _ => {
      switch timerState {
        | Start => timerStart();
        | Running => {
            setTimerState(_ => Stop);
            switch timerRef {
              | Some(t) => Js.Global.clearInterval(t)
              | None => ()
            }
        }
        | Stop => {
            setTimeLeft(_ => 25 * 60);
            setTimerState(_ => Start);
            switch timerRef {
              | Some(t) => Js.Global.clearInterval(t)
              | None => ()
            }
        }
      };
    };
    <div className="timer">
      <div className="mode-menu">
      <button disabled={timerState == Running} className="timer-button">{React.string("Work")}</button>
      <button disabled={timerState == Running} className="timer-button">{React.string("Short Break")}</button>
      <button disabled={timerState == Running} className="timer-button">{React.string("Long Break")}</button>
      </div>
      <h1 className="timer-header">{React.string("Pomodoro Timer")}</h1>
      <h2 className="timer-time">{React.int(minutes())}{React.string(":")}{React.int(seconds())}</h2>
      <button onClick={buttonBehavior} className="timer-button">{React.string(buttonText())}</button>
    </div>
}