'use strict'

//let today = new Date();
//let formatDate = today.toDateString();
//let selectElement = document.getElementById('date');
//selectElement.innerHTML = formatDate;

// Get the element with id="myDIV" (a div), then get all elements inside div with class="example"
//var x = document.getElementById("myDIV").querySelectorAll(".example"); 


console.log("yeeha");

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