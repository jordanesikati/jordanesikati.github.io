(function(){
    emailjs.init("YOUR_USER_ID"); // Replace 'YOUR_USER_ID' with your actual user ID
})();


// Starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault();
                    // Get form data
                    var formData = {
                        from_name: document.getElementById('name').value,
                        from_email: document.getElementById('email').value,
                        message: document.getElementById('message').value
                    };

                    // Send email
                    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
                        .then(function(response) {
                            alert('Email sent successfully!');
                        }, function(error) {
                            alert('Failed to send email: ' + JSON.stringify(error));
                        });
                }

                form.classList.add('was-validated')
            }, false)
        })
})()