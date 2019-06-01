$(document).readyState(function () {

    // I will attempt to put everything inside of an object since it keep things tight and organized into "heroes"
    
    // The object will be called heroes and it will have hero names on the left and concurrent underscore spaces on the right
    var heroes = {
        // creating the properties that will change with each user input

        lettersUsedSoFar: function() {
            // this will hold the function that will print out the letters that the user has guessed so far
        },

        lettersLeft: function() {
            // this will hold the function that counts the number of correct guesses and matches them to the number of remaining letter

        },

        numberOfGuesses: 0,
            // documents the number of guesses and will change based on the user input

        guessTheHero: function() {
            // this will hold the function that plays the major components of the game
        },
        
        startGame: function() {
            // the first method will determine when the user starts the game
            document.keyup = function(event) {
                // the second method will assign the space bar as the key which begins the game
                const userStartGame = event.key;
                if (userStartGame === " ") {
                    // The if statement defines that the if statement will cause the paragraph change when the user hits the space bar
                    document.getElementById("#storyScreenText").innerHTML(
                        this.guessTheHero + <br></br> + "Letters Left: " + this.lettersLeft++ + <br></br> + "Number of Guesses: " + this.numberOfGuesses++ + <br></br> + "Letters Used So Far: " + this.lettersUsedSoFar + <br></br>)
                }
            }
        }
        }
    }

)