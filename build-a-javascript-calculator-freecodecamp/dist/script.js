import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const Buttons = props => {
  const [decimalOK, setDecimalOK] = React.useState(true);
  const [operationOK, setOperationOK] = React.useState(true);
  const [negativeOK, setNegativeOK] = React.useState(true);
  const [operationCount, setOperationCount] = React.useState(0);


  const handleOp = e => {
    const value = e.target.value;
    switch (value) {
      case '-':
        if (negativeOK) {
          props.setDisplayNum(props.displayNum + e.target.value);
          setDecimalOK(true);
          setOperationOK(true);
          setNegativeOK(false);
        } else {
          break;
        }
        break;
      case '=':
        props.setDisplayNum(eval(props.displayNum));
        setOperationCount(0);
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
        props.setDisplayNum(props.displayNum + e.target.value);
        break;
      case 'clear':
        props.setDisplayNum("0");
        setDecimalOK(true);
        setOperationOK(true);
        setOperationCount(0);
        break;
      case '0':
        if (props.displayNum === "0") {
          break;
        }
      default:
        //These are the operations. 
        if (Number.isNaN(parseInt(value))) {
          setOperationCount(operationCount + 1);
          setOperationOK(false);
          if (operationOK === false) {
            props.setDisplayNum(props.displayNum.replace(/.$/, value));
            break;
          }
          if (operationOK === true) {
            setDecimalOK(true);
            setNegativeOK(true);
          }
          if (operationCount === 1) {
            props.setDisplayNum(props.displayNum.replace(/..$/g, value));
            break;
          }
          console.log(operationCount);
        }

        //These are the numbers.
        if (!Number.isNaN(parseInt(value))) {
          setOperationOK(true);
          setOperationCount(0);
        }

        //Takes the 0 off the top. 
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
    React.createElement("input", { type: "button", id: "equals", value: "=", onClick: handleOp }))));



};

const Calculator = props => {

  return /*#__PURE__*/(
    React.createElement("div", { className: "calc" }, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("p", { id: "display" }, props.displayNum), /*#__PURE__*/
    React.createElement(Buttons, {
      values: props.values,
      displayNum: props.displayNum,
      setDisplayNum: props.setDisplayNum }))));




};

const App = () => {
  const [displayNum, setDisplayNum] = React.useState('0');

  const values = [
  { word: "one", number: 1 },
  { word: "two", number: 2 },
  { word: "three", number: 3 },
  { word: "four", number: 4 },
  { word: "five", number: 5 },
  { word: "six", number: 6 },
  { word: "seven", number: 7 },
  { word: "eight", number: 8 },
  { word: "nine", number: 9 },
  { word: "decimal", number: "." },
  { word: "zero", number: 0 },
  { word: "clear", number: "clear" }];


  return /*#__PURE__*/(
    React.createElement(Calculator, {
      values: values,
      displayNum: displayNum,
      setDisplayNum: setDisplayNum }));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));