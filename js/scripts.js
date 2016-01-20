
var vowel = ['a', 'e', 'i', 'o', 'u'];
var addAy = "ay";


var findVowel = function(message) {
  for (var i=0; i < vowel.length; i++){
    if (message[0] === vowel[i]) {
      return message + addAy;
    };
  };
};

var findConsonant = function(message) {
  for (var i=0; i < message.length; i++) {

    for (var j=0; j < vowel.length; j++) {
      if (message.charAt([i]) !== vowel[j]) {
      }
      else {
        return message.slice([i]) + message.slice(0,[(i)]) + addAy;
      };
    };
  };
};



//EVERYTHING BELOW THIS IS CODE FROM EARLIER THAT WE COULDN'T
//GET TO TEST, KEEPING FOR REFERENCE FOR NOW.






// var firstLetter = message.slice(0,1);
// var restWord = message.slice(1, message.length);
// var restWord2 = message.slice(2, message.length);
// var firstTwoLetters = message.slice(0,2);






// var pigLatin = function(message){
//   var vowel = ['a', 'e', 'i', 'o', 'u'];
//   var addAy = "ay";
//   var firstLetter = message.slice(0,1);
//   var restWord = message.slice(1, message.length);
//   var restWord2 = message.slice(2, message.length);
//   var firstTwoLetters = message.slice(0,2);
//
//   for (var i=0; i < vowel.length; i++){
//     if (message[0] === vowel[i]) {
//       return message + addAy;
//     }
//   }
//   if ((message[0] !== vowel[i]) && )) {
//     return restWord + firstLetter + addAy;
//   }
//
//
//
//
//       if (message[1] !== vowel[j]) {
//         return restWord + firstLetter + addAy;
//     } else if ((message[0] !== vowel[j]) && (message[1] !== vowel[j])) {
//       return restWord2 + firstTwoLetters + addAy;
//
//
//   }
// };
//
//
//
// $(document).ready(function() {
//   $("form").submit(function(event) {
//
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
