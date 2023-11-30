function curWriting() {
    let input = document.getElementById("search-box");

    input.addEventListener("click", function() {
        input.placeholder = "Currently typing";
    });

    input.addEventListener("blur", function() {
        input.placeholder = "Create a new todo...";
    });
}
curWriting();

function line_through() {
    containerList = document.querySelectorAll(".dropdown-option");
    let input = document.querySelectorAll(".input");

    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("click", function() {
            containerList[i].classList.toggle("Textline-through");
        });
    }
};

line_through();


function newItem(){
    let inputValue = document.getElementById("search-box");
    let valueText = inputValue.value;

    let text = document.createTextNode(valueText);

    let newItemElement = document.createElement("lable");
    newItemElement.className  = "dropdown-option";


    let input = document.createElement("input");
    input.className = "input";
    input.type = "checkbox";
    input.name = "dropdwon-list";

    let checkmark = document.createElement("span");
    checkmark.className = "checkmark";

    let close = document.createElement("span");
    let closeText = document.createTextNode('X');
    close.appendChild(closeText);
    close.className = "close";

    let div = document.createElement("div");
    div.className = "lable-container";
    div.draggable = true;
    div.classList.add("item");


    newItemElement.append(input, checkmark, text);

    if (valueText === "") {
        alert("No input");
    }else {
        div.append(newItemElement, close);
        let dropdown_contain = document.getElementById("dropdown-contain");
        dropdown_contain.appendChild(div);
    }


    let i;

    closebuttom = document.getElementsByClassName("close");

    for (i = 0; i < closebuttom.length; i++) {
        closebuttom[i].addEventListener("click", function() {
            this.parentElement.remove();
        });
    }
    
    marked();
    itemsLeft();
    //itemReduction();
    
    inputValue.value = "";
    dragDrop();
}


function marked() {
    let op = document.getElementsByClassName("dropdown-option");
    let checkmark = document.getElementsByClassName("checkmark");

    let Lastop = op[op.length - 1];
    let Lastcheckmark = checkmark[checkmark.length - 1];


    let marker = document.createElement("span");
    marker.textContent = "";
    marker.style.position = "absolute";

    Lastop.addEventListener("click", function() {
        op.clicked = !op.clicked;
        Lastop.checked  = !Lastop.checked;

        if (op.clicked) {
            Lastcheckmark.style.backgroundImage =  "linear-gradient(90deg, #55DDFF, #C058F3)";
            Lastop.classList.add("Textline-through");
            marker.style.display = "block";
            marker.style.height = "11px";
            marker.style.width = "7px";
            marker.style.border =  "solid white";
            marker.style.left = "3px";
            marker.style.top = "0";
            marker.style.borderWidth = "0 3px 3px 0";
            marker.style.transform = "rotate(45deg)";
            Lastcheckmark.appendChild(marker);
        }else {
            Lastcheckmark.style.backgroundImage =  "linear-gradient(90deg, #FFFFFF, #FFFFFF)";
            Lastop.classList.remove("Textline-through");
            Lastcheckmark.appendChild(marker);
            marker.style.display = "none";
        }
    });
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        newItem();
    }
}
function closeItem() {
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function() {
            this.parentElement.style.display = 'none';
        });
    }
}
closeItem();



function itemsLeft() {
    let itemLeft = document.getElementById("item-left");
    let dropdownOption = document.getElementsByClassName("dropdown-option");
    let count = 0;



    for (let i = 0; i < dropdownOption.length; i++) {
        count++;
    }
    itemLeft.textContent = count;
}

itemsLeft();

function itemReduction() {
    let itemLeft = document.getElementById("item-left");
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function() {
            itemLeft.textContent = itemLeft.textContent - 1;
        });
    }

}


itemReduction();

function clearAll() {
    let dropdownOption = document.getElementsByClassName("dropdown-option");
    let lableContainer = document.getElementsByClassName("lable-container");
    let itemLeft = document.getElementById("item-left");
    let count = 0;

        for (let i = 0; i < dropdownOption.length; i++) {
            let cls = dropdownOption[i].classList.contains("Textline-through");
            if (cls) {
                lableContainer[i].style.display = "none";
            }
            else {
                count++;
            }
        }
    itemLeft.textContent = count;
}

function showComplete() {
    let dropdownOption = document.getElementsByClassName("dropdown-option");
    let lableContainer = document.getElementsByClassName("lable-container");
    let itemLeft = document.getElementById("item-left");

    let count = 0;

    for (let i = 0; i < lableContainer.length; i++) {
        let cls = dropdownOption[i].classList.contains("Textline-through");
        if (cls) {
            lableContainer[i].style.display = "flex";
            count++;
        }
        else {
            lableContainer[i].style.display = "none";
        }
    }
    itemLeft.textContent = count;
}

function showAll() {
    let dropdownOption = document.getElementsByClassName("dropdown-option");
    let lableContainer = document.getElementsByClassName("lable-container");
    let itemLeft = document.getElementById("item-left");
    let count = 0;

    for (let i = 0; i < dropdownOption.length; i++) {
        let cls = dropdownOption[i].classList.contains("Textline-through");
        if (cls || !cls) {
            lableContainer[i].style.display = "flex"
            count++;
        }
    }
    itemLeft.textContent = count;
}

function darkMode() {
    let imgMoon = document.getElementById("image-moon");
    let dragDropText = document.querySelector(".drag-drop-text");
    let contibution = document.querySelector(".attribution");
    let header = document.querySelector(".header");
    let imgSun = document.getElementById("image-sun");
    let section = document.querySelector(".section");
    let checkmark = document.getElementsByClassName("checkmark");
    let input = document.querySelector("#search-box");
    let inputCheckmark = document.querySelector("#input-checkmark");
    let userActionMoblie = document.querySelector(".user-action-moblie");


    imgMoon.addEventListener("click", function() {
        header.style.backgroundImage = "url(./images/bg-desktop-dark.jpg)";
        document.body.style.backgroundColor = "black";
        dragDropText.style.color = "white";
        contibution.style.color = "white";
        imgMoon.style.display = "none";
        imgSun.style.display = "block";
        section.style.backgroundColor = "#393A4B";
        input.style.backgroundColor = "#25273D";
        inputCheckmark.style.backgroundColor = "#25273D";
        userActionMoblie.style.backgroundColor = "#25273D";

        for (let i = 0; i < checkmark.length; i++) {
            checkmark[i].style.backgroundColor = "#25273D";
        }
    });
}
darkMode();

function lightMode() {
    let imgMoon = document.getElementById("image-moon");
    let dragDropText = document.querySelector(".drag-drop-text");
    let contibution = document.querySelector(".attribution");
    let header = document.querySelector(".header");
    let imgSun = document.getElementById("image-sun");
    let section = document.querySelector(".section");
    let input = document.querySelector("#search-box");
    let inputCheckmark = document.querySelector("#input-checkmark");
    let checkmark = document.getElementsByClassName("checkmark");
    let userActionMoblie = document.querySelector(".user-action-moblie");

    imgSun.addEventListener("click", function() {
        header.style.backgroundImage = "url(./images/bg-desktop-light.jpg)";
        document.body.style.backgroundColor = "white";
        dragDropText.style.color = "black";
        contibution.style.color = "black";
        imgMoon.style.display = "block";
        imgSun.style.display = "none";
        section.style.backgroundColor = "white";
        input.style.backgroundColor = "white";
        inputCheckmark.style.backgroundColor = "white";
        userActionMoblie.style.backgroundColor = "white";
        document.body.style.backgroundColor = "#f2f2f2";

        for (let i = 0; i < checkmark.length; i++) {
            checkmark[i].style.backgroundColor = "white";
        }
    });
}
lightMode();

function dragDrop() {
    const sortableList = document.querySelector(".sortable-list");
    const items = sortableList.querySelectorAll(".item");

    items.forEach(item => {
        item.addEventListener("dragstart", () => {
            item.classList.add("dragging");
        });

        item.addEventListener("dragend", () => {
            item.classList.remove("dragging");
        });
    });

    sortableList.addEventListener("dragover", e => {
        e.preventDefault();
        const item = document.querySelector(".dragging");

        const afterElement = getDragElement(sortableList, e.clientY);
        if (afterElement == null) {
            sortableList.appendChild(item);
        }else {
            sortableList.insertBefore(item, afterElement);
        }
    })

    function getDragElement(sortableList, y) {
        const dragItemElement = [...sortableList.querySelectorAll(".item:not(.dragging)")];

        return dragItemElement.reduce((closet, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closet.offset) {
                return {offset: offset, element: child}
            }else {
                return closet;
            }
        }, {offset: Number.NEGATIVE_INFINITY}).element
    }
    sortableList.addEventListener("dragenter", e => e.preventDefault());
}
dragDrop();