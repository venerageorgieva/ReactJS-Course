import "../node_modules/react/umd/react.production.min.js";
import "../node_modules/react-dom/umd/react-dom.production.min.js";

const rootDomElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootDomElement);

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

// JSX Syntax
const headerJSX = (
<header className="site-header">
    <h1>Hello fromJSX</h1>
    <h2>The best syntax ever!</h2>

    <p>something else here</p>
</header>
);

root.render(headerJSX);
