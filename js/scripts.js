$(document).ready(function() {
  $("#lang-select").submit(function(event) {
    const food = $("#food").val();
    
    $("#food").text(food);
    $("#hide-out").show();

    event.preventDefault();
  });
});
