const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('checkbox');
const existingBtn = document.getElementById('existing');

function updateExistingButton() {
    const savedUser = localStorage.getItem('username');
    // Ensure it's strictly hidden if no data exists to pass the Cypress visibility check
    if (savedUser) {
        existingBtn.style.display = 'block';
    } else {
        existingBtn.style.display = 'none';
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (rememberMeCheckbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
    updateExistingButton();
});

existingBtn.addEventListener('click', () => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
        alert(`Logged in as ${savedUser}`);
    }
});

// Initial call
updateExistingButton();