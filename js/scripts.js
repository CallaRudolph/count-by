$(document).ready(function() {
  $(".count").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("input#count-to").val());
    var countBy = parseInt($("input#count-by").val());

    var numbersCounted = [];

    for (var i = 0; i <= countTo; i += countBy) {
      numbersCounted.push(i + ", ");
    }



    $("#output").empty();
    $("#output").append(numbersCounted);
    $("#output").show();

  });
});
