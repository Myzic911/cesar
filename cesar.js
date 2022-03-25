var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
var mode = prompt('You want to encrypt or decrypt a text ?\n\n1 for encrypt\n2 for decrypt');

if (mode === '1') {
  var sentence = prompt('Enter the text you want to encrypt').split('');
  var key = Number(prompt('Enter the key you want to use for encrypt your text'));
  var result = '';

  if ((key <= 0) || (key >= 27) || (isNaN(key))) {
    document.write('Invalid key, please enter a number between 1 and 26');
  } else {
    for (var i = 0; i < sentence.length; i++) {
      var c = sentence[i];
      if (alphabet.indexOf(c) === 26) {
        result += ' ';
      } else {
        var id = alphabet.indexOf(c) + key;
        c = alphabet[id % 26];
        result += c;
      }
    }
  }

  document.write(result);
} else if (mode === '2') {
  var sentence = prompt('Enter the text you want to decrypt').split('');
  var key = Number(prompt('Enter the key to decrypt the text'));
  var result = '';

  if ((key <= 0) || (key >= 27) || isNaN(key)) {
    documet.write('Invalid key, please enter a number between 1 and 26');
  } else {
    for (var i = 0; i < sentence.length; i++) {
      var c = sentence[i];
      if (alphabet.indexOf(c) === 26) {
        result += ' ';
      } else {
        var id = alphabet.indexOf(c) - key + 26;
        c = alphabet[id % 26];
        result += c;
      }
    }
  }

  document.write(result);
}
