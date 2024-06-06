import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

var rootDomElement = document.getElementById("root");
var root = ReactDOM.createRoot(rootDomElement);

// const reactHeadingElement = React.createElement("h1", {}, "Hello from JSX");
// const reactSecondHeading = React.createElement(
//   "h2",
//   {},
//   "The best syntax ever!"
// );
// const header = React.createElement(
//   "header",
//   { className: "site-header" },
//   reactHeadingElement,
//   reactSecondHeading
// );


// const Footer = () => {
//     return React.createElement(
//         'div',
//         {className:"site-header"},
//         React.createElement('p',{},"All rights reserved"),
//     );
// }

var Footer = function Footer() {
    return React.createElement(
        "div",
        { className: "site-footer" },
        React.createElement(
            "p",
            null,
            "All rights reserved "
        )
    );
};

// JSX Syntax
var body = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        { className: "site-header" },
        React.createElement(
            "h1",
            null,
            "Hello fromJSX"
        ),
        React.createElement(
            "h2",
            null,
            "The best syntax ever!"
        ),
        React.createElement(
            "p",
            null,
            "something else here"
        )
    ),
    React.createElement(Footer, null)
);

root.render(body);