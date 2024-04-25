function calculateScore(event) {
  event.preventDefault();
  var score = 0;
  var answers = ['a', 'b', 'a', 'a', 'a'];
  for (var i = 0; i < answers.length; i++) {
    var userAnswer = document.querySelector('input[name="q' + (i + 1) + '"]:checked').value;
    if (userAnswer === answers[i]) {
      score++;
    }
  }
  var message = 'You scored ' + score + ' out of ' + answers.length + '.';
  if (score === answers.length) {
    message += ' Great job!';
  } else if (score > 0) {
    message += ' Keep studying!';
  } else {
    message += ' Better luck next time.';
  }
  document.getElementById('message').innerHTML = message;
  console.log(document.getElementById('message'));
}