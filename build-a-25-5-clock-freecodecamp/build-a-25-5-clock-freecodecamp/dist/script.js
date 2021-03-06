import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as reactCountdown from "https://cdn.skypack.dev/react-countdown@2.3.2";

const Controls = props => {
  const tickAway = () => {
    const timer = setTimeout(() => {
      props.setCurrentTime(prev => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  };

  React.useEffect(() => {
    if (props.isPlaying === true) {
      if (props.sessionPlaying === true) {
        {tickAway();}
      }
    }
  }, [props.isPlaying, tickAway]);

  React.useEffect(() => {
    if (props.isPlaying === true) {
      if (props.breakPlaying === true) {
        {tickAway();}
      }
    }
  }, [props.breakPlaying, tickAway]);

  const Reset = () => {
    props.setSessionTime(props.sessionTime);
    props.setBreakTime(props.breakTime);
    props.setCurrentTime(props.sessionTime);
    props.setSessionPlaying(true);
    props.setBreakPlaying(false);
    props.setIsPlaying(false);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "Controls" },
    props.isPlaying ? /*#__PURE__*/React.createElement("img", { id: "start_stop", onClick: props.doTimer, src: "https://image.flaticon.com/icons/png/512/151/151859.png" }) : /*#__PURE__*/
    React.createElement("img", { id: "start_stop", onClick: props.doTimer, src: "https://image.flaticon.com/icons/png/512/27/27223.png" }), /*#__PURE__*/
    React.createElement("img", { id: "reset", src: "https://image.flaticon.com/icons/png/512/44/44650.png", onClick: Reset })));


};

const Countdown = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "Countdown" }, /*#__PURE__*/
    React.createElement("span", { id: "timer-label" }, props.sessionPlaying ? 'session left:' : 'break left:'), /*#__PURE__*/
    React.createElement("h2", { id: "time-left" }, props.properTime(props.currentTime))));


};

const SessionTimer = props => {
  const changeSessionTimer = e => {
    switch (e.target.value) {
      case "-":
        if (props.sessionTime === "01:00") {
          break;
        }
        props.setSessionTime(prev => prev - 60);
        props.setCurrentTime(prev => prev - 60);
        break;
      case "+":
        props.setSessionTime(prev => prev + 60);
        props.setCurrentTime(prev => prev + 60);
        break;}

  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "SessionTimer" }, /*#__PURE__*/
    React.createElement("input", { id: "session-decrement", type: "button", value: "-", onClick: e => changeSessionTimer(e), className: "session-controls", src: "https://image.flaticon.com/icons/png/512/56/56889.png" }), /*#__PURE__*/
    React.createElement("span", { id: "session-label" }, "session time:"), /*#__PURE__*/
    React.createElement("h2", { id: "session-length" }, +props.sessionTime.slice(0, -3)), /*#__PURE__*/
    React.createElement("input", { id: "session-increment", type: "button", value: "+", onClick: e => changeSessionTimer(e), className: "session-controls", src: "https://image.flaticon.com/icons/png/512/1237/1237946.png" })));


};

const BreakTimer = props => {
  const changeBreakTimer = e => {
    switch (e.target.value) {
      case "-":
        if (props.breakTime === "01:00") {
          break;
        }
        props.setBreakTime(prev => prev - 60);
        break;
      case "+":
        props.setBreakTime(prev => prev + 60);
        break;}

  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "BreakTimer" }, /*#__PURE__*/
    React.createElement("input", { id: "break-decrement", type: "button", value: "-", onClick: e => changeBreakTimer(e), className: "session-controls", src: "https://image.flaticon.com/icons/png/512/56/56889.png" }), /*#__PURE__*/
    React.createElement("span", { id: "break-label" }, "break time:"), /*#__PURE__*/
    React.createElement("h2", { id: "break-length" }, +props.breakTime.slice(0, -3)), /*#__PURE__*/
    React.createElement("input", { id: "break-increment", type: "button", value: "+", onClick: e => changeBreakTimer(e), className: "session-controls", src: "https://image.flaticon.com/icons/png/512/56/56889.png" })));


};

const App = () => {
  const [sessionTime, setSessionTime] = React.useState(25 * 60);
  const [breakTime, setBreakTime] = React.useState(5 * 60);
  const [currentTime, setCurrentTime] = React.useState(sessionTime);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [sessionPlaying, setSessionPlaying] = React.useState(true);
  const [breakPlaying, setBreakPlaying] = React.useState(false);
  const [playAudio, setPlayAudio] = React.useState(new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"));

  const triggerAudio = () => {
    playAudio.currentTime = 0;
    playAudio.play();
  };

  if (currentTime === 0) {
    if (sessionPlaying === true) {
      setSessionPlaying(false);
      setBreakPlaying(true);
      setCurrentTime(breakTime);
      triggerAudio();
    } else {
      setSessionPlaying(true);
      setBreakPlaying(false);
      setCurrentTime(sessionTime);
      triggerAudio();
    }
  }

  const properTime = time => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" + (
      seconds < 10 ? "0" + seconds : seconds));

  };

  const doTimer = () => {
    setIsPlaying(!isPlaying);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "TimerComplete" }, /*#__PURE__*/
    React.createElement("h2", null, "pomodoro timer"), /*#__PURE__*/
    React.createElement("div", { className: "Timers" }, /*#__PURE__*/
    React.createElement(SessionTimer, {
      sessionTime: properTime(sessionTime),
      setSessionTime: setSessionTime,
      currentTime: properTime(currentTime),
      setCurrentTime: setCurrentTime }), /*#__PURE__*/

    React.createElement(BreakTimer, {
      breakTime: properTime(breakTime),
      setBreakTime: setBreakTime })), /*#__PURE__*/


    React.createElement(Countdown, {
      properTime: properTime,
      currentTime: currentTime,
      sessionTime: sessionTime,
      setSessionTime: setSessionTime,
      breakTime: breakTime,
      setBreakTime: setBreakTime,
      sessionPlaying: sessionPlaying,
      setSessionPlaying: setSessionPlaying,
      breakPlaying: breakPlaying,
      setBreakPlaying: setBreakPlaying }), /*#__PURE__*/

    React.createElement(Controls, {
      isPlaying: isPlaying,
      setIsPlaying: setIsPlaying,
      sessionPlaying: sessionPlaying,
      breakPlaying: breakPlaying,
      breakTime: breakTime,
      setBreakTime: setBreakTime,
      setSessionTime: setSessionTime,
      doTimer: doTimer,
      setCurrentTime: setCurrentTime,
      sessionTime: sessionTime,
      setSessionPlaying: setSessionPlaying,
      setBreakPlaying: setBreakPlaying })));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));