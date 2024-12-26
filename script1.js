function validateLogin() {
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Hardcoded credentials
    const validID = '54129918';
    const validPassword = 'fayshal@@5412';

    if (userID === validID && password === validPassword) {
        window.location.href = 'page1.html';
    } else {
        errorMessage.textContent = 'Invalid ID or Password. Please try again.';
    }
}
