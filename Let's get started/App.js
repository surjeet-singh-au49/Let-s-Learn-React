
// The below code is Hello World using DOM manipulation without using react CDN links
/* 
const heading = document.getElementById('root')

const createEle = document.createElement('h1');
const node = document.createTextNode('Hello world');
createEle.appendChild(node);

heading.appendChild(createEle); */


// ---------------------------------------------------------


// Here we will see how to create Hello World program using React by importing CDN links in html file.

// Firstly, creating a variable heading and using react createElement method.

// createElement consists of 3 parameters 1.type of element 2.An object for attributes and props. 
// 3. children of the element which can be another react element or string, number,etc.

const heading = React.createElement("h1",{},"Hello World in React")

// then we will create the root for our react to render the heading.
const root = ReactDOM.createRoot(document.getElementById("root"));

// then by using render method we make heading render on browser.
root.render(heading);


