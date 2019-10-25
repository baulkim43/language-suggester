$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var devices = parseInt($("input#devices").val());
    var pants = parseInt($("input#pants").val());
    var animal = $("select#animal").val();
    var food = $("select#food").val();

    if (age <= 15) {
      var match = "Ruby";
    } else if 

    $("#code").text(match);
    $("#match").show()

    event.preventDefault();
  });
});
