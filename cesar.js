var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var sentence = prompt('Enter the text you want to encrypt');
var key = Number(prompt('Enter the key you want to use for encrypt your text'));
var result = '';

if ((key <= 0) || (key >= 27) || (isNaN(key))) {
  document.write('Invalid key, please enter a number between 1 and 26');
} else {
  for (var i = 0; i < sentence.length; i++) {
    if (c === ' ') {
      result += c;
    } else {
      var c = sentence[i];
      var id = alphabet.indexOf(c) + key;
      c = alphabet[id % 26];
      result += c;
    }
  }
}

document.write(result);
