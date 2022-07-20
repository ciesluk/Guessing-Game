let maxNum = parseInt(prompt("Please enter a max number for the max of the random number"));

while(!maxNum){
    maxNum = parseInt(prompt("Please enter a max number for the max of the random number"));
}
//Generate a random number from 1 to 10
let randomNumber = Math.floor(Math.random() * maxNum + 1);

//Ask the user for their first guess
let guess = prompt("Guess a random number from 1 - 10 ");

let counter = 1;
//Check to see if the random number is equal to the guess, if not prompt again
while(guess != randomNumber){
    counter++; 
    //Checking if the guess is lower or higher than the random number
    if(guess < randomNumber){
        guess = prompt("Try again, guess too low, guess a random number from 1 - 10 ");
    }else if(guess > randomNumber){
        guess = prompt("Try again, guess too high, guess a random number from 1 - 10 ");
    }
}

//Congragulate the user on getting the random number
console.log("Congrats you got the random number!");
