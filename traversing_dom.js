let output;
// get child element from a parent
const parent = document.getElementById("item-form");
const children = parent.children;
console.log(children);
// children[1].innerText = "hello";
console.log(children[1].className);
console.log(children[1].nodeName);
console.log(children[1].localName);

// parent.firstElementChild.innerText = "hello";

console.log(parent.firstElementChild.innerText);
console.log(parent.lastElementChild.innerText);
console.log(parent.children[0].nextElementSibling.innerText);
// console.log(parent.children[0].previousElementSibling.innerText);
// Null

console.log(parent.parentElement); // class : container

parent.parentElement.style.backgroundColor = "lightBlue";

const secondItem = document.querySelector(".item:nth-child(2)");
console.log(secondItem);
secondItem.nextElementSibling.style.color = "red";
secondItem.previousElementSibling.style.color = "blue";