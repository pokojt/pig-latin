
var vowel = ['a', 'e', 'i', 'o', 'u'];
var addAy = "ay";
var addQu = "qu";



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
      if (message.charAt([i]) !== vowel[j]) { //once you reach the first vowel in the string, the else statment beings
      }
      else {
        return message.slice([i]) + message.slice(0,[(i)]) + addAy;
      };
    };
  };
};

var findQu = function(message) {
  for (var i=0; i < message.length; i++) {
    if (message.indexOf("q") != -1);

      return message.slice([i]) + message.slice(0,[(i)]) + addQu + addAy;

  };
};


// var pigLatin = function(message) {
//   if (findVowel(message)) {
//     return message + addAy;
//   }
//   else if (findConsonant(message)) {
//     return message.slice([i]) + message.slice(0,[(i)]) + addAy;
//   }
//
//
// };




$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var result = $("input#message").val();


    $("#result").show();
    event.preventDefresult
  });
});


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
