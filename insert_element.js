function insertElement(){
    const filter = document.querySelector(".filter");
    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjustElement";
    // Apply insertAdjacentElement can only apply once to the same element
    // filter.insertAdjacentElement("beforebegin",h1);
    filter.insertAdjacentElement("afterbegin",h1);
    const h1colone = h1.cloneNode(true);
    filter.insertAdjacentElement("beforeend",h1colone);
}

insertElement();

function insertText(){
    const item = document.querySelector("li:first-child");
    item.insertAdjacentText("afterbegin","insertAdjustText");
    item.insertAdjacentText("beforeend","insertAdjustText");
}

insertText();

function insertHtml(){
    const cleanbtn = document.querySelector("#clear");
    cleanbtn.insertAdjacentHTML("afterbegin","<h2>insertAdjacentHTML</h2>");
    cleanbtn.insertAdjacentHTML("beforeend","<h2>insertAdjacentHTML</h2>")
}
insertHtml();

function insertBeforeItem(){
    const ul = document.querySelector("ul");
    const li = document.querySelector("li");
    li.textContent = "insertBefore";
    const thirdItem = document.querySelector("li:nth-child(3)");
    ul.insertBefore(li,thirdItem);
}

insertBeforeItem();

function insertAfter(newE, exsistingE){
    exsistingE.parentElement.insertBefore(newE, exsistingE.nextSibling);
}

const li = document.querySelector("li");

li.textContent = "insertAfter";
const firstItem = document.querySelector("li:nth-child(2)");    
insertAfter(li,firstItem);