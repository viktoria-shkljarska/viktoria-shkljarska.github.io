$(document).ready(function () {

    var animated_box =  $('.letters');

    setTimeout(function(){            
    	if (!$('.logo').hasClass('start')) 
            $('.logo').addClass('start');
        }, 1150);
    setTimeout(function(){            
    	if (!$('.logo').hasClass('finish')) 
            $('.logo').addClass('finish');
        }, 3400); 
});
