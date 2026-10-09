var secretNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 20;

function startGame() {

    var guess;

    while (guess != secretNumber) {

        guess = parseInt(prompt("Guess a number between 1 and 100:"));

        attempts++;

        if (guess < secretNumber) {

            alert("Too low! Try a higher number.");

        } else if (guess > secretNumber) {

            alert("Too high! Try a lower number.");

        } else {

            document.getElementById("result").innerHTML =
                "🎉 Correct! You guessed the number in "
                + attempts + " attempts.";

            alert("Congratulations! You guessed it!");

        }
    }
}
