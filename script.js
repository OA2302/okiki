document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Client-side form validation
document.querySelector('form').addEventListener('submit', function (e) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill in all fields.');
        e.preventDefault(); // Prevent form submission
    }
});

// Add more JavaScript functionality as needed
