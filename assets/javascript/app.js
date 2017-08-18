//Test 4: Add DONE button
$("#start").click(function(){
  var time = 10;
  $('#timer').html (time);
  var tic = setInterval(function(){
    time--;
    $('#timer').html (time);

    if (time != 0){
      $('#done').click(function() {
      console.log("DONE! was clicked")
      clearInterval(tic);
      $("#message").html ("DONE!");
      $("#correct").html ("Correct choices");
      $("#incorrect").html ("Incorrect choices");
      $("#unanswered").html ("Unanswered questions");
    });
  }
    else if (time === 0){
      clearInterval(tic);
      $("#message").html ("All done!");
      $("#correct").html ("Correct choices");
      $("#incorrect").html ("Incorrect choices");
      $("#unanswered").html ("Unanswered questions");
    }
  }, 1000);
}); //<--start button

//////RADIO BUTTON STRUGGLE

// var test = $("#q1 input");
// debugger; (with Aylan)

// function count ({
//     var timeDown=time--;
//     $("#timer").html(timeDown);
// });

    //timer begins
    //trivia questions
  //2. WELCOME MESSAGE

//B.TRIVIA PAGE
  //1.TIMER

  //2.QUESTIONS

    //a. create questions array
    //b. create answers array variables radio buttons value:
// 
// var corr = 0;
// var incorr = 0;
// var valueCorrect = [input = "q1c","q2b","q3a"];
//
//
//
//       $("#q1").click(function(){ //only one click??
//         console.log("radio goo goo");
//
//         // $("#correct").append(corr);
//         if ("#q1" === valueCorrect);
//         //  console.log(corr++);
//          $("#correct").html(corr++);
//         //  $("#incorrect").html(incorr);
//         //
//         //
//         // if ("#q1" !=valueCorrect);
//         // $("#incorrect").html(incorr++);
//
//         // var valueCorrect = [q1c,q2b,q3a];
//         // var valueIncorrect =[q1a,q1b,q2a,q2c,q3b,q3c];
//       });

    //c. repository of user answers
      //i.compare user answer to computer answer

// function detect () {
//   if (radio [name="yy" value="q2b"])
//   console.log ("correct guess chosen!")
// }



//C.SCORE PAGE
