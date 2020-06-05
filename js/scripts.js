$(document).ready(function() {
  $("#lang-select").submit(function(event) {
    const food = $("#food").val();
    const animal = $("#animal").val();
   // const c# = "C#"
    const dotNet = ".Net"
   // const javaScript = "Java Script"

    if (food.length + animal.length >= 0){
      $("#output").text(dotNet);
    }
    $("#hide-out").show();

    event.preventDefault();
  });
});
