console.log("Day 19 - JavaScript Events");
// What will we learn today?

// - What is an Event?
// - Event Handling and Why?
// - Event Handling in Markup
// - Event Handling in Script
// - addEventListener and removeEventListener
// - DOM Content Loaded
// - Event Object
// - Event Capturing and Bubbling
// - Event Delegation
// - Event Default Behaviour
// - Custom Events
// - Project(s)
// - Tasks

// Event Handling in Markup

function handleClick(greating) {
  console.log(`Button click with ${greating}`);
}

// Event Handling in Script
const myBtn2Element = document.querySelector("#myBtn2");
myBtn2Element.onclick = function () {
  console.log("My Button 2 onclick");
};

// Can not add multiple
myBtn2Element.onclick = function () {
  console.log("My Button 2 onclick again");
};

// Separating fundtion
myBtn2Element.onclick = handleClick;
myBtn2Element.onclick = () => {
  console.log("Hola");
}