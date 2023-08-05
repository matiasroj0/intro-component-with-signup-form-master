const firstNameInput = document.querySelector(".first-name-input");
const lastNameInput = document.querySelector(".last-name-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");

const firstNameError = document.querySelector(".first-name-error");
const lastNameError = document.querySelector(".last-name-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

const firstNameErrorIcon = document.querySelector(".first-name-error-icon");
const lastNameErrorIcon = document.querySelector(".last-name-error-icon");
const emailErrorIcon = document.querySelector(".email-error-icon");
const passwordErrorIcon = document.querySelector(".password-error-icon");

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", ()=> {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
    if(checkFirstName() && checkLastName && checkEmail && checkPassword) {
        window.location.reload();
    }
})


function checkFirstName(){
    if (firstNameInput.value == "") {
        firstNameError.classList.remove("hidden");
        firstNameErrorIcon.classList.remove("hidden");
        firstNameInput.classList.add("error-outline");
    } else {
        firstNameError.classList.add("hidden");
        firstNameErrorIcon.classList.add("hidden");
        firstNameInput.classList.remove("error-outline");
        return true;
    }
}

function checkLastName(){
    if (lastNameInput.value == "") {
        lastNameError.classList.remove("hidden");
        lastNameErrorIcon.classList.remove("hidden");
        lastNameInput.classList.add("error-outline");
    } else {
        lastNameError.classList.add("hidden");
        lastNameErrorIcon.classList.add("hidden");
        lastNameInput.classList.remove("error-outline");
        return true;
    }
}

function checkEmail(){
    if(!validateEmail()) {
        emailError.classList.remove("hidden");
        emailInput.classList.add("email-input-error");
        emailErrorIcon.classList.remove("hidden");
        emailInput.classList.add("error-outline");
    }
    else {
        emailError.classList.add("hidden");
        emailInput.classList.remove("email-error");
        emailInput.classList.remove("email-input-error");
        emailErrorIcon.classList.add("hidden");
        emailInput.classList.remove("error-outline");
        return true;
    }
}

function checkPassword(){
    if (passwordInput.value == "") {
        passwordError.classList.remove("hidden");
        passwordErrorIcon.classList.remove("hidden");
        passwordInput.classList.add("error-outline");
    } else {
        passwordError.classList.add("hidden");
        passwordErrorIcon.classList.add("hidden");
        passwordInput.classList.remove("error-outline");
        return true;
    }
}

function validateEmail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)){
        return true;
    }
    else {
        return false;
    }
}