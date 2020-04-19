(function($){
  $(document).ready(function(){
    $('html').addClass('sticky-footer ua-brand-icons overlay-menu-scroll-hide js')
    $('#s-lg-public-skiplink').remove()
    var count = 0;
    var checkExist = setInterval(function() {
        if (count >= 10) {
            clearInterval(checkExist);
        }
        if ($('#s-la-content-search-query-11022').length) {
            $('#s-la-content-search-query-11022').attr('placeholder', 'Search FAQs');
            clearInterval(checkExist);
        }
        if ($('#s-la-searchform-11022 .s-la-searchform-button').length) {
            $('#s-la-searchform-11022 .s-la-searchform-button').text("Search");
            clearInterval(checkExist);
        }
        count++;
    }, 10);
  });
})(jQuery);

