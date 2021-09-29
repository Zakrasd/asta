$(function () {
    /* alert('hello') */
    $('#about-button').click(function () {
        $('.about-text h2').html('<h2>Поздравляю вы на шаг к успеху</h2>')
        $('.about-text h2').css("color", "blue")
        $('.about-inner h1').html('<h1>Ты сделал правильный выбор молодец</h1>')
        $('.about-inner h1').css("color", "blue")
        $('.about-item1 img').remove()
        $('.about-item1 ').prepend('<img src="images/poo.gif" alt="Картинка">')
        $('.about-text p').remove()
    });
});
$(function(){
    $('.video-button').click(function(){
        let about = $(".modal")

        if (about. css("display") === "none"){
            about.css("display", "block");
        } else {
            about.css("display", "none");
        }
    });

    $('.modal-close').click(function(){
        $('.modal').css("display", "none")
    })
});



