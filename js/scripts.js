$(document).ready(function() {
  $("#lang-select").submit(function(event) {
    const food = $("#food").val();
    const animal = $("#animal").val();
    const color = $("#color").val();
    const dob = $("#born").val();
    const preLanguage = parseInt($("#preference").val());
    const dotNet = ".Net"
    const javaScript = "Java Script"
    const seeSharp = "C#"

    if (food.length +  animal.length + preLanguage <= 25) {
      $("#output").text(dotNet);
    } else if (food.length / animal.length * preLanguage >= food.length * animal.length) {
      $("#output").text(javaScript);
    } else {
      $("#output").text(seeSharp);
    }
    $("#hide-out").show();

    event.preventDefault();
  });
});
