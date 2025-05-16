function gradeQuiz() {
    var answers = ['a', 'c', 'b'];
    var score = 0;
    for (var i = 1; i <= answers.length; i++) {
        var question = document.querySelector('input[name="q' + i + '"]:checked');
        var parent = document.querySelector('input[name="q' + i + '"]').parentElement.parentElement;
        if (question && question.value === answers[i - 1]) {
            score++;
            parent.className = 'correct';
        } else {
            parent.className = 'incorrect';
        }
    }
    var scoreElement = document.getElementById('score');
    scoreElement.textContent = 'Your score: ' + score + '/' + answers.length;
    scoreElement.style.color = score === answers.length ? 'green' : score > 0 ? 'orange' : 'red';

    var button = document.querySelector('button');
    button.textContent = 'TRY AGAIN';
    button.onclick = function () { location.reload(); };
}
