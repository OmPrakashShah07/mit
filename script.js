document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-status").innerText = "Message sent successfully!";
    this.reset();
});
