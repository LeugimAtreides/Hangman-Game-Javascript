

// I will attempt to put everything inside of an object since it keep things tight and organized into "heroes"
    
    // The object will be called heroes and it will have hero names on the left and concurrent underscore spaces on the right
    var heroes = {
        // Creating the matching hero names with their underscore counterpart
        namesOf : [
            // the n character represents the name of the hero while the u character represents the spaces each letter takes up
            "BLACK WIDOW", "CAPTAIN AMERICA", "SPIDER-MAN", "IRON MAN", "ANT MAN", "THE HULK",
        ],

        // creating the pool(array) of letters that the user will have available to them
        userPoolOfLetters : [
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
            
            let randomHero = this.namesAndUnderscoredCounterParts[Math.floor(Math.random()*namesAndUnderscoredCounterPartslength)];
            // this declaration will allow a random hero name to start the game
            
            
            document.startGame.append(randomHero);
            // this inserts the hero blanks into the paragraph element so the user can see it

            document.keyup = function(event) {
                // defines the event of the user pressing a letter

                let userGuess = event.key;
                // defines a variable that records the key that was pressed

                let userGuessModified = userGuess.toUpperCase();
                // defines the variable that changes the user input into a upper case character

                for (let i = 0; i < 
                    namesAndUnderscoredCounterParts.length; i++) {

                    // for each new UserGuessModified in the Array, we crete a new paragraph to hold that text
                    const namesAndUnderscoredCounterPartsIndex = namesAndUnderscoredCounterParts[i];
                    
                }

                if (userGuessModified == this.userPoolOfLetters.indexOf()) {
                    // defines the situation where the user hits a key that matches the alphabet array
                    this.userPoolOfLetters.splice(userGuessModified);
                    // defines the need for removing the used letter from the pool of letters
                    this.numberOfGuesses++;
                    // increases the number of guesses value by one
                    document.lettersLeft.innerHTML(this.userPoolOfLetters);
                    // modifies the HTML value of lettersLeft to include only the remaining letters of the array userPoolOfLetters
                };

                if (userGuessModified == this.namesAndUnderscoredCounterParts.n.indexOf()) {
                    // this defines the user guessing a correct letter in the game


                }

            }


        },

        
        }
    