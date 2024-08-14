document.getElementById("btn").addEventListener("click", (e) => {
    console.log("Btn clicked");
    // e.stopPropagation();
}, true)
document.querySelector("section").addEventListener("click", () => {
    console.log("Event reached section");
}, true)

document.querySelector("div").addEventListener("click", () => {
    console.log("Event reached div")
}, true)

document.querySelector("main").addEventListener("click", () => {
    console.log("Event reached main");
}, true)

/*
onclick on btn -> 
Btn clicked
Event reached section
Event reached main

- This is event bubbling
-   e.stopPropagation(); - help to stop the bubbling 
*/

// Event Delegation

/**
Event capturing - 
Event reached main
Event reached section
Event reached div
Btn clicked 
 - when third peramiter of eventListener is pass "true" then is reverse the event bubbling oder.
 */