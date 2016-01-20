


var pigLatin = function(message){
  var vowel = ['a', 'e', 'i', 'o', 'u'];
  var addAy = "ay";
  var firstLetter = message.slice(0,1);
  var restWord = message.slice(1);
  var restWord2 = message.slice(2);
  var firstTwoLetters = message.slice(0,2);

  for (var i=0; i < vowel.length; i++){
    if (message[0] === vowel[i]) {
      return message + addAy;
    }
  }

  for (var j=0; j < vowel.length; j++){
      if (message[0] !== vowel[j]) {
        if (message[1] !== vowel[j]) {
          return restWord2 + firstTwoLetters + addAy;
        }
        return restWord + firstLetter + addAy;
    }
    // else if ((message.charAt(0) !== vowel[j]) && (message.charAt(1) !== vowel[j])) {
    //   return restWord + firstTwoLetters + addAy;
    // }
  }
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
