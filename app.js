'use strict'
// Get the element with id="myDIV" (a div), then get all elements inside div with class="example"
//var x = document.getElementById("myDIV").querySelectorAll(".example"); 

function openSlider() {
    document.getElementById("slider").style.width = "90%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSlider() {
    document.getElementById("slider").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
}



let modal = document.getElementById("idetails");
let plusButtons = document.querySelectorAll("div.plus-icon-box > i");

for (let btn of plusButtons) {
    console.log('yehu');
    btn.onclick = function () {
        modal.style.display = "block";
    }
}

document.getElementById("modal-close").onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function submit() {
    console.clear();
    const s = "&nbsp;";
    let spans = document.getElementsByTagName('span'),
        obj = {};
    let formIds = ['ipay-amt', 'ipay-date', 'i-city', 'ipay-type', 'iref-no'];
    let alertMsg = ['Please enter a valid amount.', 'Invalid payment date.',
        'Please check given location.', 'Select payment type.', 'Please provide a valid reference number.'];
    let alertDialogue = "";
    for (let i = 0; i < spans.length; i++) {
        let input = document.getElementById(formIds[i]).value;
        console.log(i, input);

        let isValid = false;
        switch (i) {
            case 0:
                isValid = !isNaN(input) && input > 0;
                break;
            case 1:
                isValid = input.length > 3;
                break;
            case 4:
                isValid = !isNaN(input) && input !== "" && input > 0;
                break;
            default:
                isValid = true;
                break;
        }

        if (isValid) {
            spans[i].innerHTML = s;
        } else {
            spans[i].innerHTML = "*";
            alertDialogue += "\n    " + alertMsg[i];
        }
    }

    if (alertDialogue.length > 2) {
        alert("Invalid entries on :" + alertDialogue);
    }
}
