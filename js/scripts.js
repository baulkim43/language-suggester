$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var devices = parseInt($("input#devices").val());
    var pants = parseInt($("input#pants").val());
    var animal = $("select#animal").val();
    var food = $("select#food").val();

    if (age <= 30) {
      var match = "Ruby";
    } else if (age > 30 && animal === "dog") {
      var match = "Python";
    } else if (age < 200 && pants >= 3 || food === "burger") {
      var match = "Javascript"
    }


    $("#code").text(match);
    $("#match").show()

    event.preventDefault();
  });
});
