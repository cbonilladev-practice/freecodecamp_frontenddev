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
const Buttons = props => {
  const [decimalOK, setDecimalOK] = React.useState(true);
  const [operationOK, setOperationOK] = React.useState(true);

  const handleOp = e => {
    const value = e.target.value;
    switch (value) {
      case '0':
        if (props.displayNum === "0") {
          break;
        }
      case '=':
        props.setAnswer(eval(props.displayNum));
        props.setDisplayNum("0");
        setDecimalOK(true);
        setOperationOK(true);
        break;
      case '.':
        if (decimalOK === true) {
          props.setDisplayNum(props.displayNum + value);
          setDecimalOK(false);
        } else {
          break;
        }
        // console.log(((props.displayNum).match(/\./g||[])).length)
        break;
      case 'clear':
        props.setDisplayNum("0");
        props.setAnswer("0");
        setDecimalOK(true);
        setOperationOK(true);
        break;
      default:
        if (Number.isNaN(parseInt(value))) {
          if (operationOK === false) {
            break;
          }
          if (operationOK === true) {
            setDecimalOK(true);
            setOperationOK(false);
          }
        }

        props.setDisplayNum((props.displayNum + e.target.value).replace(/^0+/, ''));}

  };

  return /*#__PURE__*/(
    React.createElement("div", { class: "buttons" },
    props.values.map((x, idx) => /*#__PURE__*/
    React.createElement("input", { type: "button", className: "clickable", value: x.number, id: x.word, onClick: handleOp })), /*#__PURE__*/


    React.createElement("div", { class: "operations" }, /*#__PURE__*/
    React.createElement("input", { type: "button", id: "add", value: "+", onClick: handleOp }), /*#__PURE__*/
    React.createElement("input", { type: "button", id: "subtract", value: "-", onClick: handleOp }), /*#__PURE__*/
    React.createElement("input", { type: "button", id: "multiply", value: "*", onClick: handleOp }), /*#__PURE__*/
    React.createElement("input", { type: "button", id: "divide", value: "/", onClick: handleOp }), /*#__PURE__*/
    React.createElement("input", { type: "button", id: "decimal", value: ".", onClick: handleOp }), /*#__PURE__*/
    React.createElement("input", { type: "button", id: "equals", value: "=", onClick: handleOp }), /*#__PURE__*/
    React.createElement("input", { type: "button", id: "clear", value: "clear", onClick: handleOp }))));



};

const Calculator = props => {

  return /*#__PURE__*/(
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("p", { id: "display" }, props.answer), /*#__PURE__*/
    React.createElement("p", { id: "display" }, props.displayNum), /*#__PURE__*/
    React.createElement(Buttons, {
      values: props.values,
      displayNum: props.displayNum,
      setDisplayNum: props.setDisplayNum,
      answer: props.answer,
      setAnswer: props.setAnswer })));



};

const App = () => {
  const [answer, setAnswer] = React.useState('0');
  const [displayNum, setDisplayNum] = React.useState('0');

  const values = [
  { word: "zero", number: 0 },
  { word: "one", number: 1 },
  { word: "two", number: 2 },
  { word: "three", number: 3 },
  { word: "four", number: 4 },
  { word: "five", number: 5 },
  { word: "six", number: 6 },
  { word: "seven", number: 7 },
  { word: "eight", number: 8 },
  { word: "nine", number: 9 }];



  return /*#__PURE__*/(
    React.createElement(Calculator, {
      values: values,
      displayNum: displayNum,
      setDisplayNum: setDisplayNum,
      answer: answer,
      setAnswer: setAnswer }));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));