import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import axios, * as others from "https://cdn.skypack.dev/axios@0.21.1";
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

//Alright, so this is the url I'm using for my random quotes.
const baseAPI = "https://api.quotable.io";

//Here's the React Component to display the quotes.
const QuoteDisplay = () => {
  const [quoteInfo, setQuoteInfo] = React.useState({});

  const tweetURL = `https://twitter.com/intent/tweet?text=${quoteInfo.content} - ${quoteInfo.author}`;
  const regex = /\s/g;
  //Fetching with axios, wasn't working with the original fetch.
  //Well, it was working but the button didn't function. 
  const fetchData = () => {
    const data = axios.get(`${baseAPI}/random`).
    then(response => {
      setQuoteInfo(response.data);
    });
  };

  //Loading to the DOM refreshes the DOM with refreshes the API.
  //Infinite loop, so I used an effect. 
  React.useEffect(() => {
    event.preventDefault();
    fetchData();
  }, []);

  //Here's the JSX stuff.
  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("p", { id: "text" }, "\"", quoteInfo.content, "\""), /*#__PURE__*/
    React.createElement("h2", { id: "author" }, quoteInfo.author), /*#__PURE__*/
    React.createElement("div", { class: "buttons" }, /*#__PURE__*/
    React.createElement("button", { id: "new-quote", onClick: fetchData }, "fetch quote"), /*#__PURE__*/
    React.createElement("a", { id: "tweet-quote", href: tweetURL, target: "_top" }, "send tweet"))));



};

//Here's the display. 
const App = () => {
  return /*#__PURE__*/(
    React.createElement(QuoteDisplay, null));

};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));