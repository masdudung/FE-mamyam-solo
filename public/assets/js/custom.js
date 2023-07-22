$('document').ready(function () {
    // menu
    $('.order-btn').click(function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Open a new tab with the specified URL
        window.open('https://api.whatsapp.com/send?phone=6281287662608', '_blank');
    });


    // contact
    $('#contacted').hide()
    $('#contactForm button').click(function(e){
        e.preventDefault()
        $('#contactForm').hide()
        $('#contacted').show()
    })


    // about
    $('#subscribed').hide()
    $('#subscribeEmail button').click(function(e){
        e.preventDefault()
        $('#subscribeEmail').hide()
        $('#subscribed').show()
    })
});