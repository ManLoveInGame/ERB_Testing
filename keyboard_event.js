const itemInput = document.getElementById("item-input");

// a. simple keypress

const onKeyPress = (e) => {
    console.log("keypress");
};

itemInput.addEventListener("keypress", onKeyPress);

// b. onkeydown

const onKeyDown = (e) => {
    console.log("keyDown");
    // check key code
    // if(e.key === "Enter"){
    //     // console.log("enter");
    //     alert("enter");
    // }

    if(e.keyCode === 13){
        // console.log("enter");
        alert("pressed enter");
    }

    if(e.code === "Digit1"){
        // console.log("enter");
        alert("pressed 1");
    }

    if(e.repeat){
        console.log("you are holding down " + e.key);
    }

    console.log("Shift " + e.shiftKey);
    console.log("Alt "+ e.altKey);
    console.log("Control " + e.ctrlKey);
    if(e.shiftKey && e.key === "K"){
        console.log("You pressed shift and K")
    }

};

itemInput.addEventListener("keydown", onKeyDown);

// c. onkeyup

const onKeyUp = (e) => {
    console.log("keyUp");
};

itemInput.addEventListener("keyup", onKeyUp);