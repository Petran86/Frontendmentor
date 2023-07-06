const email = document.getElementById("email")

document.forms['register-form'].onsubmit = function(event){
    if(this.firstname.value.trim() === ""){
        error(".error-fn", ".img-fn", "#firstname")
        event.preventDefault()
        return false //stop function
    }else{
        resetError(".error-fn", ".img-fn", "#firstname")
    }

    if(this.lastname.value.trim() === ""){
        error(".error-ln", ".img-ln", "#lastname")
        event.preventDefault()
        return false //stop function
    }else{
        resetError(".error-ln", ".img-ln", "#lastname")
    }

    if(!isEmail(this.email.value)){
        error(".error-email", ".img-email", "#email")
        event.preventDefault()
        return false
    }
    else{
        resetError(".error-email", ".img-email", "#email")
    }

    if(this.password.value.trim() === ""){
        error(".error-psw", ".img-psw", "#password")
        event.preventDefault()
        return false
    }
    else{
        resetError(".error-psw", ".img-psw", "#password")
    }
}

function error(message, image, input){
    document.querySelector(message).style.display = "block"
    document.querySelector(image).style.display = "block"
    document.querySelector(input).style.borderColor = "hsl(0, 100%, 74%)"
}

function resetError(message, image, input){
    document.querySelector(message).style.display = "none"
    document.querySelector(image).style.display = "none"
    document.querySelector(input).style.borderColor = "hsl(246, 25%, 77%)"
}

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
} 