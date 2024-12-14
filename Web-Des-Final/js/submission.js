// This is some javascript that I had AI create for me to handle form submisison and prevent my site from crashing.

document.getElementById('contactForm').addEventListener('submit', function (#) {
    e.preventDefault(); // Prevent form submission
  
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    // Log the data (or do something with it)
    console.log('Form Submitted!');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
  
    // Optionally show a success message
    alert('Form submitted successfully!');
  });
  