// This code runs when the page loads
$(function() {

  $(".thumbnail").on("click", function(event) {
    event.preventDefault();
    //always do prevent default//
    var elementThatWasClicked = $(this);
    console.log(elementThatWasClicked);
    elementThatWasClicked.parent().remove();
  })

})