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
            $('#s-la-content-search-query-11022').attr('placeholder', 'Search FAQ');
            clearInterval(checkExist);
        }
        count++;
    }, 10);
  });
})(jQuery);

