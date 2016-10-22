$(document).ready(function() {

  $("#myForm").submit(function(e) {
    e.preventDefault();
    var newItem = $("#myInput").val();
    $("#myInput").val("");
    var html = "<li><span class='item'>" + newItem + " " + "</span><button class='delete'>X</button></li>"
    $("#items").append(html);
  });

  $(document).on("click", ".delete", function() {
    $(this).parent().remove();
  });

  $(document).on("click", ".item", function() {
    $(this).toggleClass("strike");
  });  

});
