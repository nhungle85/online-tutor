$(function() {
   $("#loginButton").click(function() {
        $("#loginModal").modal("show");
   });

   const distance = $('#navBar').offset().top,
    $window = $(window);

    $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        // navbar has reached the top
        $('#navBarBrand').removeClass('d-none');
    } else {
        if (!$('#navBarBrand').hasClass('d-none')) {
            $('#navBarBrand').addClass('d-none');
        }
    }
    
});
});
