$(document).ready(function() {
  $("#lang-select").submit(function(event) {
    const food = $("#food").val();
    const animal = $("#animal").val();
    const color = $("#color").val();
    const born = $("born").val();
    const preference = $("prefence").val();

    $("#food").text(food);
    $(".hide-out").show();

    event.preventDefault();
  });
});
