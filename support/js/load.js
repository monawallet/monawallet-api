$(function () {
    let header = "/support/assets/header.html";
    let footer = "/support/assets/footer.html";
   
    Barba.Dispatcher.on('newPageReady', function() {
        $("header").load(header,
                function () {
                    let url = $(location).attr('pathname');
                    if (url == "/support/") {
                        $('#to-support').hide();
                    }
                }); 
        $("footer").load(footer);
    });
    Barba.Pjax.start();
});

