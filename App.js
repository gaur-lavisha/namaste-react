import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement: This is a React method that creates a React element.React elements are the smallest building blocks of React applications, describing what you want to appear on the screen.
// "h1": The first argument specifies the type of HTML element to create, which in this case is an h1 heading.
// { id: "head" }: The second argument is an object representing the element’s attributes(or properties).Here, { id: "head" } gives the element an id attribute with the value "head".
// "Learning React Js...": The third argument represents the content or children of the h1 element.In this case, it’s a string that will be displayed within the h1 element.
// React.createElement => ReactElement (Object) => HTML (Browser Understands)
const heading = React.createElement(
  "h1",
  { id: "head" },
  "Learning React Js..."
); // returns an object
const para = React.createElement(
  "h3",
  { id: "content" },
  "Fall in love with React!"
);
const child = React.createElement(
  "div",
  { id: "child", class: "containerOne" },
  [heading, para]
); // 3rd argument - Array of sibling elements inside the parent div

// JSX : javascript syntax makes it easy to create a react element.
// JSX and React are different. (Note : we can write react without jsx also, jsx is not a part of react)
// JSX is a convention where we can merge html and javascript.
// JSX is just a syntax.
// JSX is not html inside javascript, JSX is html like syntax.
// (How code works ?) JSX (babel transpiles it to) => React.createElement => ReactElement (JS Object) => HTMLElement (Render)
// Attribute in JSX - use camelCase.
// In HTML we use "class" as attribute whereas in JSX we use "className" as attribute.
const childTwo = (
  <div className="containerTwo">
    <h1>Dive Deeper in React Js 🥰</h1>
  </div>
); // Creating a React element using JSX

// Can use :
// 1. a react element inside react element
// 2. a react element inside functional component
// 3. a functional component inside a react element
// 4. a functional component inside another functional component (i.e. Component Compostion)

// # Different ways of Using Components inside JSX: 
// {Title()}
// OR
// <Title/>
// OR
// <Title></Title>

const elem = <h3>Child Element!</h3>;
const childThree = (
  <div id="containerFour">
    <h2>Parent Element!</h2>
    {/* 1. Using react element inside another element. */}
    {elem}
  </div>
);

const ComponentThree = () => <h2>Keep Learning, Keep Growing!❤️</h2>;

const childFour = (
  <div id="containerFive">
    <h1>Loving the React JS!</h1>
    {/* 3. Using a functional component inside a React element. */}
    {ComponentThree()} 
    <ComponentThree/>
    <ComponentThree></ComponentThree>
  </div>
);

const parent = React.createElement("div", { id: "parent" }, [
  child,
  childTwo,
  childThree,
  childFour,
]); // main div

// React Functional component (JS Function which returns some JSX)
const HeadingComponent = () => {
  return <h1>First React Functional Component!</h1>;
};

// Looks similar to a react element, then what's the difference ?
const ComponentTwo = () => {
  return (
    <div id="containerThree">
      {/* 4. Component Compositon - Using functional component inside another component. */}
      <HeadingComponent />
      <h2>I am the second component.</h2>
      {/* 2. Using React element inside React component. */}
      {parent}
    </div>
  );
};

// ReactDOM.createRoot: It creates a React root, which is required for rendering components in a React application.
// document.getElementById("root"): This part selects the HTML element with the id of "root".
// const root: Here, root is a reference to the root instance created by ReactDOM.createRoot. This reference allows us to control rendering for the entire React application.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Using root.render will render the entire React app inside the <div id="root"></div> container in the HTML file.
root.render(<ComponentTwo />);