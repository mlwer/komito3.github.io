$(window).load(function() {
  $("#8c").hide();
  $("#18c").hide();
  $("#28c").hide();

  $("#c1").click(function() {
    $("#8c").show();
    $("#18c").hide();
    $("#28c").hide();
  });
  $("#c2").click(function() {
    $("#8c").hide();
    $("#18c").show();
    $("#28c").hide();
  });
  $("#c3").click(function() {
    $("#8c").hide();
    $("#18c").hide();
    $("#28c").show();
  });
});
