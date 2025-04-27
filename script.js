// Get the form and message elements
let myForm = document.forms.myform;
let message = document.getElementById('message');

// Add an event listener for the form submission
myForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the email and confirm email input values
    const email = myForm.email.value.trim(); // Use trim to remove leading/trailing whitespace
    const confirmEmail = myForm.confirmemail.value.trim();

    // Check if email fields are empty
    if (email === '' || confirmEmail === '') {
        message.textContent = 'Email fields cannot be left blank';
        message.classList.remove('text-green-600'); // Ensure correct color
        message.classList.add('text-red-600');
        return false; // Prevent form submission
    }
    // Check if emails match
    else if (email !== confirmEmail) {
        message.textContent = 'Emails do not match';
        message.classList.remove('text-green-600'); // Ensure correct color
        message.classList.add('text-red-600');
        return false; // Prevent form submission
    }
    // If emails match and are not empty
    else {
        message.textContent = 'Form submitted successfully!'; // Success message
        message.classList.remove('text-red-600'); // Ensure correct color
        message.classList.add('text-green-600');
        // You can add code here to actually submit the form data,
        // e.g., using Fetch API or XMLHttpRequest, or just let it submit
        // if you remove event.preventDefault() and return true.
        // For this example, we'll just show the success message.
        console.log('Form submitted:', {
            firstName: myForm.fname.value.trim(),
            lastName: myForm.lname.value.trim(),
            email: email,
            question: myForm.question.value.trim()
        });
        // To actually submit the form after showing the message, you might
        // want to delay the submission or use an asynchronous method.
        // For now, we prevent default to keep the message visible.
        return true; // Allow form submission (if event.preventDefault() was removed)
    }
});
