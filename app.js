'use strict'
// Get the element with id="myDIV" (a div), then get all elements inside div with class="example"
//var x = document.getElementById("myDIV").querySelectorAll(".example"); 

function submit() {
    console.clear();
    const s = "&nbsp;";
    var spans = document.getElementsByTagName('span'),
        obj = {};
    var formIds = ['ipay-amt','ipay-date','i-city','ipay-type','iref-no'];
    var alertMsg = ['Please enter a valid amount.', 'Invalid payment date.',
        'Please check given location.', 'Select payment type.', 'Please provide a valid reference number.'];
    var alertDialogue = "";
    for (let i = 0; i < spans.length; i++) {
        let input = document.getElementById(formIds[i]).value;
        console.log(i,input);

        let isValid = false;
        switch (i) {
            case 0:
                isValid = !isNaN(input) && input > 0;
                break;
            case 1:
                isValid = input.length  > 3;
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
        alert("Invalid entries on :"+alertDialogue);
    }
}

function openSlider() {
    document.getElementById("slider").style.width = "90%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSlider() {
    document.getElementById("slider").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
}

var modal = document.getElementById("idetails");
var plusButtons = document.getElementsByTagName("img");

for (let btn of plusButtons) {
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