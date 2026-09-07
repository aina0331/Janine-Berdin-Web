$(document).ready(function () {

    // Contact form validation
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const reason = $('#reason').val();
        const message = $('#message').val().trim();

        $('.form-control, .form-select').removeClass('is-invalid');

        if (name.length < 2) {
            $('#name').addClass('is-invalid');
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        }

        if (!reason) {
            $('#reason').addClass('is-invalid');
            isValid = false;
        }

        if (message.length < 10) {
            $('#message').addClass('is-invalid');
            isValid = false;
        }

        if (isValid) {
            $('#contactForm')[0].reset();
            $('#formSuccess').removeClass('d-none');
            setTimeout(function () {
                $('#formSuccess').addClass('d-none');
            }, 4000);
        } else {
            $('#formSuccess').addClass('d-none');
        }
    });

    // Auto-highlight the active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop();
    $('.nav-link').each(function () {
        const linkPage = $(this).attr('href');
        if (linkPage === currentPage) {
            $(this).addClass('active');
        }
    });

    // Hero fade-in
    $('.hero-fade').hide().fadeIn(800);

});