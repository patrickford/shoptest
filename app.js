"use strict";

$(document).ready(function() {

  $("#myForm").submit(function(e) {
    // Prevent form default action of reloading page
    e.preventDefault();

    // Get item input and clear form
    var newItem = $("#myInput").val();
    $("#myInput").val("");
    
    // Construct list item html and append it to list
    var html = "<li><span class='item'>" + newItem + " " + "</span>" + 
               "<button class='delete'>X</button></li>"
    $("#items").append(html);
  });

  // Event handler for clicking item delete button
  $(document).on("click", ".delete", function() {
    $(this).parent().remove();
  });

  // Event handler for marking item as completed
  $(document).on("click", ".item", function() {
    $(this).toggleClass("strike");
  }); 

});
