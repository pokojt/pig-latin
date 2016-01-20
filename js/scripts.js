


var pigLatin = function(message){
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var addAy = "ay";
  var firstLetter = message.slice(0,1);
  var restWord = message.slice(1, message.length);
  var firstTwoLetters = message.slice(0,2);

  for (var i=0; i < vowel.length; i++)
    if (message[0] === vowel[i]) {
      return (message + addAy);
  };

  if (message[0] !== vowel[i]) {
    return (restWord + firstLetter + addAy);

//   } else if (message[0,2] !== vowel[i]) {
//     return (restWord + firstTwoLetters + addAy);
//
//   };
// };


//
// $(document).ready(function() {
//   $("form").submit(function(event) {
//
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
