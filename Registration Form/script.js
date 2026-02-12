$(document).ready(function(){
  $('.splash').height($(window).height());
})

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");
    const password = document.getElementById("password");
    const confirmPass = document.getElementById("ConfirmPass");

    form.addEventListener("submit", function (event) {

        let isValid = true;

        // Reset validation state
        form.querySelectorAll(".form-control").forEach(input => {
            input.classList.remove("is-valid", "is-invalid");
        });

        // Bootstrap default validation
        if (!form.checkValidity()) {
            isValid = false;
        }

        // Password match validation
        if (password.value !== confirmPass.value) {
            confirmPass.setCustomValidity("Passwords do not match");
            isValid = false;
        } else {
            confirmPass.setCustomValidity("");
        }

        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add("was-validated");
    });

});