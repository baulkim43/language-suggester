$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var devices = parseInt($("input#devices").val());
    var pants = parseInt($("input#pants").val());
    var animal = $("select#animal").val();
    var food = $("select#food").val();

    if (age <= 30 && animal !== "dog" && food === "burger") {
      var match = "Python";
      $("img").hide();
      $("#pythonpic").show();
    } else if (pants >= 3 || devices >= 3) {
      var match = "Ruby";
      $("img").hide();
      $("#rubypic").show();
    } else if (age > 30) {
      var match = "Javascript"
      $("img").hide();
      $("#javascriptpic").show();
    } else if (!age || !devices || !pants) {
      alert('Please enter all information.');
      var match = "(Nothing! Don't forget to fill out the answers above..)"
      $("img").hide();
    }

    $("#code").text(match);
    $("#match").show();
    event.preventDefault();
  });
});
