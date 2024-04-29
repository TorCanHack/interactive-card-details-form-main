const form = document.querySelector("form");
const cardName = document.querySelector("#card-name");
const cardNumber =document.querySelector("#card-number");
const mm = document.querySelector("#mm")
const yy = document.querySelector("#yy")
const cvc = document.querySelector("#cvc")



const nameOnCardOutput = document.querySelector(".name-on-card-output");
const cardNumberOutput = document.querySelector(".card-number-output");
const mmOutput = document.querySelector(".mm-output");
const yyOutput = document.querySelector(".yy-output");
const cvcOutput = document.querySelector(".cvc-output");


const cardNumberError = document.querySelector(".card-number-error");
const mm_yy_Error = document.querySelector(".mm-yy-error");

const cvcError = document.querySelector(".cvc-error");
const completedState = document.querySelector(".completed-state");

document.querySelector("form").addEventListener("submit", function(event){

    event.preventDefault();

    

    

    cardNumberError.textContent = "";
    mm_yy_Error.textContent = "";
    cvcError.textContent = "";

    let isValid = true;

 

    if (cardNumber.value.trim() === "") {
        cardNumberError.textContent = "Can't be blank"
        cardNumber.style.border = '1px solid red'
        isValid = false;
    } else if (!validateNumber(cardNumber.value.trim())){
        cardNumberError.textContent = "wrong format, numbers only"
        cardNumber.style.border = '1px solid red'
        isValid = false;
    }

    if (mm.value.trim() === "") {
        mm_yy_Error.textContent = "Can't be blank"
        mm.style.border = '1px solid red'
        isValid = false;
    } else if (!validateNumber(mm.value.trim())){
        mm_yy_Error.textContent = "wrong format, numbers only"
        mm.style.border = '1px solid red'
        isValid = false;
    }

    if (yy.value.trim() === "") {
        mm_yy_Error.textContent = "Can't be blank"
        yy.style.border = '1px solid red'
        isValid = false;
    } else if (!validateNumber(yy.value.trim())){
        mm_yy_Error.textContent = "wrong format, numbers only"
        yy.style.border = '1px solid red'
        isValid = false;
    }

    if (cvc.value.trim() === "") {
        cvcError.textContent = "Can't be blank"
        cvc.style.border = '1px solid red'
        isValid = false;
    } else if (!validateNumber(cvc.value.trim())){
        cvcError.textContent = "wrong format, numbers only"
        cvc.style.border = '1px solid red'
        isValid = false;
    }



    if (isValid) {
        form.style.display = 'none';
        completedState.style.display = 'flex';
    } else {
        event.preventDefault();
    }


});

function validateNumber(number) {
    //define the email patter
    let cardNumberRegex = /^\d+$/
    return cardNumberRegex.test(number);
}



cardName.addEventListener('input', function(){
    nameOnCardOutput.textContent = cardName.value;
});

cardNumber.addEventListener('input', function(){
    cardNumberOutput.textContent = cardNumber.value;
});

mm.addEventListener('input', function(){
    mmOutput.textContent = mm.value;
});

yy.addEventListener('input', function(){
    yyOutput.textContent = yy.value;
});

cvc.addEventListener('input', function(){
    cvcOutput.textContent = cvc.value;
});

const continueButton = document.querySelector(".continue-button");

continueButton.addEventListener('click', function(){
    form.reset()

    form.style.display = 'flex';
    completedState.style.display = 'none';


})