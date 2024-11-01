// remove item

function removeClearButton(){
    const clearBtn = document.querySelector("#clear");
    clearBtn.remove();
}

removeClearButton();

// remove child from parent
function removeFirstItem(){
    const ul = document.querySelector("ul");
    const li = document.querySelector("li:first-child");
    ul.removeChild(li);
}

// removeFirstItem();

// case 1
function removeItem(itemNumber){
    const ul = document.querySelector("ul");
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}

// removeItem(3);

// case 2 : delete item from parent by index
function removeItem2(itemNumber){
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li")[itemNumber - 1];
    ul.removeChild(li);
}

// removeItem2(3);

function removeItem3(itemNumber){
    const li = document.querySelectorAll("li");
    li[itemNumber - 1].remove();
}

// removeItem3(3);

function removeItem4(itemNumber){
    // case 4 : delete item direct by element
    document.querySelectorAll("li")[itemNumber-1].remove();
}

removeItem4(3);