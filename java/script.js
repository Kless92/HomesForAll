$(function() {
    $(".carousel").carousel({interval: 2000});
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        }   
        else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    })
    /*$('.form-check-input').click(function(e) {
        e.preventDefault();
        var radio=$(this).find('input[type=radio]');
        if(radio.is(':checked')) {
        $(this).removeClass("active");
        radio.removeProp('checked', false);
        } 
        else {
            radio.prop('checked', true);
        }
        console.log("aaa")
    })*/
    $('#twenty').click(function(e){
        $('#fifty').prop('checked', false);
        $('#hundred').prop('checked', false);
        $('#twoHundred').prop('checked', false);
    })
    $('#fifty').click(function(e){
        $('#twenty').prop('checked', false);
        $('#hundred').prop('checked', false);
        $('#twoHundred').prop('checked', false);
    })
    $('#hundred').click(function(e){
        $('#fifty').prop('checked', false);
        $('#twenty').prop('checked', false);
        $('#twoHundred').prop('checked', false);
    })
    $('#twoHundred').click(function(e){
        $('#fifty').prop('checked', false);
        $('#hundred').prop('checked', false);
        $('#twenty').prop('checked', false);
    })

});

