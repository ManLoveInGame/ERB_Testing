const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(1)");
const form = document.querySelector("form");

// Check the node
// console.log(document.querySelectorAll("form div"));


button.addEventListener("click",(e) => {
    alert("button clicked");
    e.stopPropagation();    
});

div.addEventListener("click",() => {
    alert("div clicked");
});

form.addEventListener("click",() => {
    alert("form clicked");
});

document.addEventListener("click",() => {
    alert("body clicked");
});