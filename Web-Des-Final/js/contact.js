// This is some javascript I developped with AI to verify my form was filled out.

// JavaScript for form validation

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", (event) => {
      let isValid = true; // Flag to track if the form is valid
      const errors = [];
  
      // Validate Name Field
      const name = document.getElementById("name");
      if (!name.value.trim()) {
        isValid = false;
        errors.push("Name is required.");
      }
  
      // Validate Email Field
      const email = document.getElementById("email");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
      if (!email.value.trim()) {
        isValid = false;
        errors.push("Email is required.");
      } else if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        errors.push("Please enter a valid email address.");
      }
  
      // Validate Subject Field
      const subject = document.getElementById("subject");
      if (!subject.value.trim()) {
        isValid = false;
        errors.push("Subject is required.");
      }
  
      // Validate Message Field
      const message = document.getElementById("message");
      if (!message.value.trim()) {
        isValid = false;
        errors.push("Message is required.");
      }
  
      // If form is invalid, prevent submission and show errors
      if (!isValid) {
        event.preventDefault();
        alert(errors.join("\n"));
      }
    });
  });


  