const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#cpassword")

form.addEventListener("submit", (e) => {

    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs() {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    let success = true;

    if(usernameval === "") {
        success = false;
        setError(username, "Username is Required");
    }
    else{
        setSuccess(username);
    }

    if(emailval === "") {
        success = false;
        setError(email, "Email is Required");
    }
    else if(!validateEmail(emailval)) {
        setError(email, "please enter a valid email");
    }
    else{
        setSuccess(email);
    }

    if(passwordval === "") {
        success = false;
        setError(password, "Password is Required");
    }
    else if(passwordval.length < 8) {
        setError(password, "Password Must be atleast 8 character long");
    }
    else{
        setSuccess(password);
    }

    if(cpasswordval === "") {
        success = false;
        setError(cpassword, "Confirm Password is required");
    }
    else if(cpasswordval !== passwordval) {
        setError(cpassword, "Password does not match");
    }
    else{
        setSuccess(cpassword);
    }

    return success;
}

//elements -> password, message -> passwd is req

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");

    errorElement.innerText = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}

function setSuccess(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");

    errorElement.innerText = "";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };