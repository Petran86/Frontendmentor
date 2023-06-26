// document.getElementById("myEmail").placeholder = "Your Email address";

const submitBtn = document.getElementById("submit-btn")
const email = document.getElementById("email")
const errorImg = document.getElementById("error-img")
const errorMsg = document.getElementById("error-msg")
const successMsg = document.getElementById("success")
const form = document.querySelector("form")

form.addEventListener("submit", validate)
submitBtn.addEventListener("click", validate)

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function validate(input){
    input.preventDefault()

    const emailValue = email.value.trim()

    if(isEmail(emailValue)){
        errorMsg.style.display = "none"
        errorImg.style.display = "none"
        successMsg.style.display = "block"
        email.value = ""
        email.placeholder = "Email Adress"
    }
    else{
        errorMsg.style.display = "block"
        errorImg.style.display = "block"
        successMsg.style.display = "none"
    }
}