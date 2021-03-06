import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
const DrumMachine = props => {
  const { tracks, keys } = props;
  const [activate, setActivate] = React.useState("");

  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
    React.createElement("h2", null, "Drum Machine"), /*#__PURE__*/
    React.createElement("p", null, "Please type (or click) the letter."), /*#__PURE__*/
    React.createElement("div", { id: "display" }, /*#__PURE__*/
    React.createElement("p", { className: "letterText" }, "letter: ", activate),
    tracks.map((track, index) => /*#__PURE__*/
    React.createElement(BeatBox, { text: track.keyTrigger, id: index, audio: track.url, activate: activate, setActivate: setActivate })))));




};

const BeatBox = props => {
  const audioPlay = React.createRef();


  const handleKeyDown = e => {
    const currKey = e.key.toUpperCase();
    if (currKey === props.text) {
      audioPlay.current.play();
      props.setActivate(props.text);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    //This next line is the single most important line in the project. This will allow us to push our prop without getting a weird Ref error after button clicks. I think this is the shortest way to code this project I've seen. Hooray! 
  }, [handleKeyDown]);

  const playSound = () => {
    audioPlay.current.play();
    props.setActivate(props.text);
  };

  const boxStyling = "drum-pad";

  return /*#__PURE__*/(
    React.createElement("div", { className: boxStyling, id: props.id, onClick: playSound },
    props.text, /*#__PURE__*/
    React.createElement("audio", { ref: audioPlay, src: props.audio, className: "clip", id: props.text })));


};

const App = () => {
  const letterKeys = React.useState({
    keys: [
    'Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'] });



  //Remember, when you use hooks you're importing both the elements and corresponding setState function. Only import the state, or the [0] value. Sure, I could've just used a state constant, but I wouldn't have learned that. 

  const { keys } = letterKeys[0];

  //From the original freeCodeCamp project, I'm not tracking beats down.
  const tracks = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



  return /*#__PURE__*/(
    React.createElement(DrumMachine, { tracks: tracks, keys: keys }));

};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));