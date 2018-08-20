// front end begin
$(document).ready(function() {
  $(".begin").click(function() {
    $("#questions .item").slice(0, 4).fadeIn();
    $(".intro").fadeOut();
    $(".next").show();

    $(".next").click(function() {

      var items = $('#questions .item:visible').fadeOut().last();

      var nextItems = items.nextAll().slice(0, 4);

      if (nextItems.length === 1) {
        nextItems = $("#questions .item").slice(-4);
      }

      if (nextItems.length === 0) {
        nextItems = $("#questions .item").slice(0, 4);
      } else $(".submit").show();
      $(".next").hide();

      nextItems.fadeIn();
    });
  });
});
// front end fin
// back end begin
function calculateScore() {

  var correctAnswers = ['a', 'd', 'b', 'b', 'c', 'c', 'd', 'b'];
  var score = 0;
  var point = 10;
  var answer = [];

  for (var n = 0; n < correctAnswers.length; n++) {
    if (correctAnswers[n] == jQuery("input[name='question" + (n + 1) + "']:checked").val()) {
      score = score + point;
      console.log('question' + (n + 1) + ': correct');
    } else {
      score = score + 0;
      console.log('question' + (n + 1) + ': wrong');
    }
  }

  console.log('your score is: ' + score);

  //lets display the score in the div element
  $('.result').html('Your Score: ' + score);

  //show element since we've hid it in csscalculateScore()
  $('.result').show();

  scrollUp();
}


function scrollUp() {
  $("html, body").animate({
    scrollTop: $(document).height()
  }, 100);

  //scroll back up
  $("html, body").animate({
    scrollTop: 0
  }, 100);
}

function validate() {


  if ($("input[name='question1']").is(':checked') == false) {
    //show element since we've hid it in css
    $('.result').show();
    $('.result').text('Please select the first answer');
    scrollUp();
    return false;
  } else if (jQuery("input[name='question2']").is(':checked') == false) {
    //show element since we've hid it in css
    $('.result').show();
    $('.result').text('Please select the second answer');
    scrollUp();
    return false;
  } else if ($("input[name='question3']").is(':checked') == false) {
    //show element since we've hid it in css
    $('.result').show();
    $('.result').text('Please select the third answer');
    scrollUp();
    return false;
  } else if ($("input[name='question4']").is(':checked') == false) {
    //show element since we've hid it in css
    $('.result').show();
    $('.result').text('Please select the final answer');
    scrollUp();
    return false;
  } else if ($("input[name='question5']").is(':checked') == false) {
    //show element since we've hid it in css
    $('.result').show();
    $('.result').text('Please select the final answer');
    scrollUp();
    return false;
  } else if ($("input[name='question6']").is(':checked') == false) {
    //show element since we've hid it in css
    $('.result').show();
    $('.result').text('Please select the final answer');
    scrollUp();
    return false;
  } else if ($("input[name='question7']").is(':checked') == false) {
    //show element since we've hid it in css
    $('.result').show();
    $('.result').text('Please select the final answer');
    scrollUp();
    return false;
  } else if ($("input[name='question8']").is(':checked') == false) {
    //show element since we've hid it in css
    $('.result').show();
    $('.result').text('Please select the final answer');
    scrollUp();
    return false;
  } else {
    calculateScore();
  }


}

function refresh() {

  $('.result').hide();
  scrollUp();
}