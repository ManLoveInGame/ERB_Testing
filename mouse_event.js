const clearBtn = document.querySelector('#clear');

const OnClick = () => {
    console.log("click event");
};

clearBtn.addEventListener("click",OnClick);

const onDoubleClick = () => {
    if(document.body.style.backgroundColor !== "purple"){
        document.body.style.backgroundColor = "purple";
        document.body.style.color = "white";
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
};

clearBtn.addEventListener("dblclick",onDoubleClick);

const onMouseDown = () => console.log("mouse down");
clearBtn.addEventListener("mousedown",onMouseDown);
const onMouseup = () => console.log("mouse up");
clearBtn.addEventListener("mouseup",onMouseup);
const onMouseWheel = () => console.log("mouse Wheel");
clearBtn.addEventListener("wheel",onMouseWheel);
const onMouseOver = () => console.log("mouse Over");
clearBtn.addEventListener("mouseover",onMouseOver);
const onMouseOut = () => console.log("mouse Out");
clearBtn.addEventListener("mouseout",onMouseOut);
const onDragStart = () => console.log("Drag Out");
clearBtn.addEventListener("dragstart",onDragStart);
const onDragEnd = () => console.log("Drag End");
clearBtn.addEventListener("dragend",onDragEnd);