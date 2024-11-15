import React from "react"; 
import ReactDOM from "react-dom/client";

// React.createElement: This is a React method that creates a React element.React elements are the smallest building blocks of React applications, describing what you want to appear on the screen.
// "h1": The first argument specifies the type of HTML element to create, which in this case is an h1 heading.
// { id: "head" }: The second argument is an object representing the element’s attributes(or properties).Here, { id: "head" } gives the element an id attribute with the value "head".
// "Learning React Js...": The third argument represents the content or children of the h1 element.In this case, it’s a string that will be displayed within the h1 element.
// ReactElement (Object) => HTML (Browser Understands)
const heading = React.createElement("h1", { id: "head" }, "Learning React Js..."); // return an object
const para = React.createElement("p", {id: "content"}, "Fall in love with React!");
const child = React.createElement("div", { id: "child" }, [heading, para]); // 3rd argument - Array of sibling elements inside the parent div
const parent = React.createElement("div", { id: "parent" }, child);

// ReactDOM.createRoot: It creates a React root, which is required for rendering components in a React application.
// document.getElementById("root"): This part selects the HTML element with the id of "root".
// const root: Here, root is a reference to the root instance created by ReactDOM.createRoot. This reference allows us to control rendering for the entire React application.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Using root.render will render the entire React app inside the <div id="root"></div> container in the HTML file.
root.render(parent);
