$(document).ready(function() {
	var width = $(window).width();
	MenuHover(width);
});

$(window).resize(function() {
	var width = $(window).width();
	MenuHover(width);
});

function MenuHover(width) {
    $(".main-menu").hover(
      function() {
        $(".menu-link").addClass("menu-link-hover");
      }, function() {
        $(".menu-link").removeClass("menu-link-hover");
      }
    );
}
