$(document).ready(function() {
  $("#lang-select").submit(function(event) {
    const food = $("#food").val();
    const animal = $("#animal").val();
    const preLanguage = parseInt($("#preference").val());
    const dotNet = ".Net"
    const javaScript = "Java Script"
    const seeSharp = "C#"

    if (food.length + animal.length + preLanguage === 1){
      $("#output").text(dotNet);
    } else if (food.length + animal.length + preLanguage <= 10000) {
      $("#output").text(javaScript);
    } else if (food.length + animal.length + preLanguage === 0) {
      $("#output").text(seeSharp);
    }
    $("#hide-out").show();

    event.preventDefault();
  });
});
