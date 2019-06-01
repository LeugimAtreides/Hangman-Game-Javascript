$(document).readyState(function () {

    // I will attempt to put everything inside of an object since it keep things tight and organized into "heroes"
    
    // The object will be called heroes and it will have hero names on the left and concurrent underscore spaces on the right
    var heroes = {
        // Creating the matching hero names with their underscore counterpart
        namesAndUnderscoredCounterParts = [
            // the n character represents the name of the hero while the u character represents the spaces each letter takes up
            {n:"SPIDERMAN", u:"---------"},
            {n:"IRONMAN", u:"-------"},
            {n:"HULK", u:"----"},
            {n:"CAPTAINAMERICA", u:"--------------"},
            {n:"ANTMAN", u:"------"},
            {n:"BLACKWIDOW", u:"----------"}
        ],

        // creating the pool(array) of letters that the user will have available to them
        userPoolOfLetters = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ],

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
            
            let randomHero = namesAndUnderscoredCounterParts.u[Math.floor(Math.random()*namesAndUnderscoredCounterParts.u.length)];
            // this declaration will allow a random hero name to start the game
            
            document.startGame.append(randomHero);
            // this inserts the hero blanks into the paragraph element so the user can see it

            document.keyup = function(event) {
                // defines the event of the user pressing a letter

                let userGuess = event.key;
                // defines a variable that records the key that was pressed

                let userGuessModified = userGuess.toUpperCase();
                // defines the variable that changes the user input into a upper case character

                if (userGuessModified == userPoolOfLetters.indexOf()) {
                    // defines the situation where the user hits a key that matches the alphabet array
                    this.userPoolOfLetters.splice(userGuessModified);
                    // defines the need for removing the used letter from the pool of letters
                    this.numberOfGuesses++;
                    // increased the number of guesses value by one
                    document.this.lettersLeft.innerHTML(this.userPoolOfLetters);
                }
            }


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