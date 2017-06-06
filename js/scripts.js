$(document).ready(function() {
  $(".count").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("input#count-to").val());
    var countBy = parseInt($("input#count-by").val());
    console.log(countTo)
    var numbersCounted = [];

    if (isNaN(countTo) || isNaN(countBy)) {
      alert("Numbers only, please!");
    } else if (countTo < 0 || countBy < 0) {
      alert("Please use positive numbers.")
    } else if (countBy > countTo) {
      alert("You can't count to " + countTo + " when you're counting by " + countBy + ", because " + countBy + " is larger than " + countTo + "!")
    }


    for (var i = countBy; i <= countTo; i += countBy) {
      numbersCounted.push(i + ", ");
      if (i === countTo) {
        delete(numbersCounted[numbersCounted.length - 1]);
        numbersCounted.push(i);
      }
    };

    $("#output").empty();
    $("#output").append(numbersCounted);
    $("#output").show();

  });
});
