(function ($) {
    'use strict';
    $('.progress-bar').each(function(){
        $(this).animate({
            width:$(this).attr('data-percent')},"fast");
    });
})(jQuery);