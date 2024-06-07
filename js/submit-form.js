$(function () {
    'use strict';

    // Cache DOM elements for better performance
    const forms = $('.needs-validation');

    forms.each(function () {
        const form = $(this);
        const submitForm = form.find('.submit_form');
        const Obuna bolingButton = form.find('.btn_submit-Obuna boling');
        const successMsg = $('.success_msg');
        const errorMsg = $('.error_msg');
        const actionInput = form.find("input[name='action']");
        const successMsgObuna boling = $('.success_msg_Obuna boling');

        form.on('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (!form[0].checkValidity()) {
                return; // Exit early if the form is not valid
            }

            submitForm.html('Sending...');
            Obuna bolingButton.html('Sending...');

            const toast = new bootstrap.Toast(successMsg[0]);
            const errtoast = new bootstrap.Toast(errorMsg[0]);

            const formData = form.serialize();

            $.ajax({
                type: "POST",
                url: "php/form_process.php",
                data: formData,
                success: function (response) {
                    if (response === 'success') {
                        if (actionInput.length > 0) {
                            Obuna bolingButton.html('Obuna boling');
                            const toastObuna boling = new bootstrap.Toast(successMsgObuna boling[0]);
                            toastObuna boling.show();
                        } else {
                            toast.show();
                            submitForm.html('Send Message');
                        }
                    } else {
                        errtoast.show();
                        submitForm.html('Send Message');
                        Obuna bolingButton.html('Obuna boling');
                    }
                }
            });

            form.addClass('was-validated');
        });
    });
});
