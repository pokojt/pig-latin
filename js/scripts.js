


var pigLatin = function(message){
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var addAy = "ay";
  for (var i=0; i < vowel.length; i++)
    if (message[0] === vowel[i]) {
    return (message + addAy);
  };
};


//
// $(document).ready(function() {
//   $("form").submit(function(event) {
//
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });



















//
// var addAy = function (message) //split the message by spaces
//   var array = [];
//   var string = message.split("");
//
//   for (i=0; i <= message.)
