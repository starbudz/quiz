function calculateScore(){

 var correctAnswers = ['a','d','b','b','c','c','d','b'];
 var score = 0;
 var point = 10;
 var answer = [];

 for(var n = 0; n < correctAnswers.length; n++){
     if(correctAnswers[n] == $("input[name='question"+(n+1)+"]:checked").val()){
       score = score + point;
       console.log('question'+(n+1)+': correct');
     }else{
       score = score + 0;
       console.log('question'+(n+1)+': wrong');
     }
   }

   console.log('your score is: '+score);

   //lets display the score in the div element
   $('.result').html('Your Score: '+score);

   //show element since we've hid it in css
   $('.result').show();

   scrollUp();
 }


function scrollUp(){
   $("html, body").animate({
       scrollTop: $(document).height()
   }, 100);

   //scroll back up
   $("html, body").animate({
       scrollTop: 0
   }, 100);
}

function validate(){

   if($("input[name='question"+(n+1)+"]:checked") == false){
       //show element since we've hid it in css
       $('.result').show();
       $('.result').text('Please answer all questions');
       scrollUp();
       return false;
   }else{
       calculateScore();
   }


}

function refresh(){

  $('.result').hide();
  scrollUp();
}
    $(document).ready(function() {
            $(".begin").click(function() {
              $("#questions .item").slice(0, 4).fadeIn("slow");
              $(".intro").fadeOut("slow");
              $(".next").show();

              $(".next").click(function() {

                var items = $('#questions .item:visible').fadeOut("slow").last();

                var nextItems = items.nextAll().slice(0, 4);

                if (nextItems.length === 1) {
                  nextItems = $("#questions .item").slice(-4);
                }

                if (nextItems.length === 0) {
                  nextItems = $("#questions .item").slice(0, 4);
                } else $(".submit").show();
                $(".next").hide();

                nextItems.fadeIn("slow");
              });
            });
            $(".submit").click(calculateScore());
          });
