document.getElementById('signup').addEventListener('click', function() {
    // Get input values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const gender = document.getElementById('gender').value;
    const birthday = document.getElementById('birthday').value;

    // error
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const firstnameError = document.getElementById('firstnameError');
    const lastnameError = document.getElementById('lastnameError');
    const genderError = document.getElementById('genderError');
    const birthdayError = document.getElementById('birthdayError');

    // reset errors
    emailError.textContent = '';
    passwordError.textContent = '';
    firstnameError.textContent = '';
    lastnameError.textContent = '';
    genderError.textContent = '';
    birthdayError.textContent = '';

    let hasError = false;

    // Email format validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation
    if (!email) { 
        emailError.textContent = 'Please enter your email.'; 
        hasError = true; 
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.'; 
        hasError = true;
    }

    if (!password) { passwordError.textContent = 'Please enter your password.'; hasError = true; }
    if (!firstname) { firstnameError.textContent = 'Please enter your first name.'; hasError = true; }
    if (!lastname) { lastnameError.textContent = 'Please enter your last name.'; hasError = true; }
    if (!gender) { genderError.textContent = 'Please select your gender.'; hasError = true; }
    if (!birthday) { birthdayError.textContent = 'Please enter your birthday.'; hasError = true; }

    // success message and redirect
    if (!hasError) {
        document.querySelector('.fillupform').style.display = 'none';
        document.querySelector('.loginorsignup').style.display = 'none';
        const successSection = document.querySelector('.signedup');
        successSection.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 3000);
    }
});