$(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/natalia9rokicka@gmail.com",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val()
            },
            dataType: "json"
        })
         .done(function(data) {
             console.dir(data);
             $('form').html('<h1>Thank you!</h1>');
         });
    });
});
