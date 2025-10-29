document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission (in a real app, send to server)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
});
