$("a#allvideo").click(function(e) {
  e.preventDefault();
  $("#plyr").attr("src", $(this).attr("data-video"));
$("a.active").removeClass("active");
$(this).addClass("active");
$( "#plyr" ).show(1000);
$( ".infoawal" ).hide(1000);
});