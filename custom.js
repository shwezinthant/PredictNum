var random_num = Math.floor(Math.random() * 100) + 1;
console.log(random_num);

$(document).ready(function () {
  var count = 0;
  var move = 5;
  $("#check").click(function (event) {
    event.preventDefault(); //no refresh

    var user_predict_num = $("#user_predict").val();
    if (!user_predict_num) {
      $("#showdemo").text("Enter Your number!");
      $("#user_predict").focus();
      return;
    }
    move--;
    $(".moves").text(move);

    count++;

    if (count <= 5) {
      if (count == 5) {
        if (user_predict_num == random_num) {
          $("#showdemo").text("Congratulation!You are right.");
        } else {
          $(".center").html("Game Over!");
        }
      }
      if (user_predict_num == random_num) {
        $("#showdemo").text("Congratulation!You are right.");
      } else if (user_predict_num < random_num) {
        $("#showdemo").text("Your number is small!");
        $("#user_predict").focus();
      } else {
        $("#user_predict").focus();

        $("#showdemo").text("Your number is large!");
      }
    } else {
      $(".center").html("Game Over!");
    }
  });
});
