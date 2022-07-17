//Generate a random number from 1 to 10
let randomNumber = Math.floor(Math.random() * 10 + 1);

//Ask the user for their first guess
let guess = prompt("Guess a random number from 1 - 10 ");

//Check to see if the random number is equal to the guess, if not prompt again
while(guess != randomNumber){
    guess = prompt("Try again, guess a random number from 1 - 10 ");
}

//Congragulate the user on getting the random number
console.log("Congrats you got the random number!");
