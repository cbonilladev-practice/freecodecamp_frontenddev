import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import marked from "https://cdn.skypack.dev/marked@2.1.3";
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




const MarkdownInput = props => {
  return /*#__PURE__*/(
    React.createElement("textarea", { id: "editor", value: props.mdInput, onChange: props.handleInput }));

};

const MarkdownPreviewer = props => {
  marked.setOptions({
    breaks: true });


  return /*#__PURE__*/(
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(props.mdInput) } }));


};

const App = () => {
  const [mdInput, setMdInput] = React.useState("");

  const initialState = `
   This is a paragraph.
   
   # This is a Heading.
   ## This is a smaller Heading.
   
   - This is a listing.
   - This is a listing.
   - This is a listing.
   
   [This is a link.](https://codepen.io/cbonilla/pen/ZEKyQaY)
   
   \`This is inline code.\`
   
   \`\`\`
    ***
    This is a block of code. 
   
    See.
    ***
   \`\`\`
   
   >"This is quote.
   > > This is a nested quote.
   >
   >This is the end of the quote."
   
   **This is bold.**
 
   ![this is an image](https://i.imgur.com/G29Xy2X.png "image")
   `;

  const handleInput = () => {
    setMdInput(event.target.value);
  };

  React.useEffect(() => {
    setMdInput(initialState);
    console.log(mdInput);
  }, []);

  return /*#__PURE__*/(
    React.createElement("div", { className: "mdContainer" }, /*#__PURE__*/
    React.createElement("p", null, "Input"), /*#__PURE__*/
    React.createElement(MarkdownInput, { handleInput: handleInput, mdInput: mdInput, setMdInput: setMdInput }), /*#__PURE__*/
    React.createElement("p", null, "Output"), /*#__PURE__*/
    React.createElement(MarkdownPreviewer, { mdInput: mdInput })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));