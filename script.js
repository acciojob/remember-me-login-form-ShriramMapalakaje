//your JS code here. If required.
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('checkbox');
const existingBtn = document.getElementById('existing');

// Function to check and update the visibility of the existing user button
function updateExistingButton() {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
        existingBtn.style.display = 'block';
    } else {
        existingBtn.style.display = 'none';
    }
}

// 1. Handle Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (rememberMeCheckbox.checked) {
        // Save to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // Remove from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
    updateExistingButton();
});

// 2. Handle Existing User Login
existingBtn.addEventListener('click', () => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
        alert(`Logged in as ${savedUser}`);
    }
});

// 3. Initial check on page load
updateExistingButton();