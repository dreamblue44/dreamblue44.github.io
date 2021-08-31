$(function() {
    $('.list').click(function() {
        var val = $(this).attr('data-filter');
        if (val == 'All') {
            $('.item').show('500');
        } else {
            $('.item').not('.' + val).hide('500');
            $('.item').filter('.' + val).show('500');
        }
    })

    $('.list').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })
});