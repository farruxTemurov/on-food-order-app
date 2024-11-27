document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get input elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Get the "Confirm Email" input element and its error message
    const confirmEmailInput = document.getElementById("confirmEmail");
    const confirmEmailError = document.getElementById("confirmEmailError");

    // Get error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Reset error messages and styles
    clearErrors();

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameInput.classList.add("error");
        isValid = false;
    }

    // Validate email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailInput.classList.add("error");
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email address.";
        emailInput.classList.add("error");
        isValid = false;
    }

    // Validate password
    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        passwordInput.classList.add("error");
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordInput.classList.add("error");
        isValid = false;
    }
    
    // If form is valid, submit it
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }

});

function clearErrors() {
    document.querySelectorAll(".error").forEach(input => input.classList.remove("error"));
    document.querySelectorAll(".error-message").forEach(message => message.textContent = "");
}

