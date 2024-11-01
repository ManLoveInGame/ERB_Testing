const clearBtn = document.querySelector("#clear");
// case 1 : old style to add event to a button
// clearBtn.onclick = () => {
//     alert("clear all");
// };

// clearBtn.onclick = () => {
//     console.log("clear all");
// }

// case 2 : add event listener to a button

// clearBtn.addEventListener("click", () => {
//     console.log("clear all");
// });

// clearBtn.addEventListener("click", () => {
//     alert("clear all");
// });

// case 3 : use callback function name

function onClear() {
    const itemList = document.querySelector("ul");
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}


clearBtn.addEventListener("click", onClear);


// case 4 : event Listener with web API

// setTimeout(()=>clearBtn.addEventListener("click", onClear),5000);

setTimeout(()=>clearBtn.removeEventListener("click", onClear),5000);
