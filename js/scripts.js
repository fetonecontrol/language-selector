$(document).ready(function() {
  $("#lang-select").submit(function(event) {
    const food = $("#food").val();
   // const c# = "C#"
   // const dotNet = ".Net"
   // const javaScript = "Java Script"
    $("#output").text(food.length);
    $("#hide-out").show();

    event.preventDefault();
  });
});
