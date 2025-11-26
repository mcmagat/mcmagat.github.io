// log-in.js

document.getElementById('login').addEventListener('click', function() {
    // Get form elements
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Get error message elements
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset previous errors
    emailError.textContent = '';
    passwordError.textContent = '';

    let hasError = false;

    // Email validation
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
        emailError.textContent = 'Please enter your email.';
        hasError = true;
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address.';
        hasError = true;
    }

    // Password validation
    if (password.value.trim() === '') {
        passwordError.textContent = 'Please enter your password.';
        hasError = true;
    }

    if (!hasError) {
        // Hide form
        document.querySelector('.fillupform').style.display = 'none';

        // Show success message
        const signedup = document.querySelector('.signedup');
        signedup.style.display = 'block';

        // Redirect after 3 seconds
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 3000);
    }
});