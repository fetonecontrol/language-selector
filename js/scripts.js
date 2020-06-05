$(document).ready(function() {
  $("#lang-select").submit(function(event) {
    const food = $("#food").val();

    $("#output").text(food);
    $("#hide-out").show();

    event.preventDefault();
  });
});
