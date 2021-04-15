# Rock-Paper-Scissors-TOP
A game of rock paper scissors for the console. Written in Javascript.

## Goals 
Gain familiarity with problem solving with javascript. Practice "divide and conquer" strategies for building code solutions.

## The Problem Solving Methodology
The Odin Project recommends using a three step process to solve problems:
* Understand the problem
* Plan
* Divide and Conquer

Let's try that with this problem.

### Understand the Problem
Write a program that takes string input from a user. Use that input to select rock paper or scissors. Select rock paper or scissors for the computer. Determine the result of the game round. Print the result of the round. Update the score with that result. Loop through for 5 rounds. Print who won more rounds.


### Plan
The user will call a function we will name ```game()``` in the browser console. 

First we will print a welcome function that lets the user know how to interact with our game.

Within our program we will need to declare some variable before entering the game loop so they can be accessed across loops and after the loop is completed. Particularly I am thinking about ```userScore``` and ```computerScore```.

We will then start the game loop. We will probably use a while loop because we want to continue until there have been 5 rounds won.  We recognize that this could take an arbitrary number of rounds because the user and computer can tie any number of times. So a for loop would not work so well. This may end up looking something like ```while userScore + computerScore <=5```.

Within the loop we will call a function called ```playRound()``` that will execute a round of RPS and return the result. The result is which player won. Before calling ```playRound()``` we should display the current score of the game i.e. ```Human: 0, Computer: 5```.

After the loop completes we will check to see who won and display the final score with a message declaring the winner. 

### Divide and Conquer
The Odin Project has a suggested order for how to divide this project up. Let's try it out. I'm going to add another function ```promptPlayer``` that handles the input loop making sure that we get a good string from the user.

- [x] Create a Git repo for the project
- [x] Create a boilerplate HTML document that links to an external script
- [ ] Build the ```computerPlay()``` function that randomly returns rock paper or scissors.
- [ ] Write the ```promptPlayer()``` function that gets a move from the player
- [ ] Write a function ```playRound(playerSelection, computerSelection)``` that returns the result of a round of RPS 
- [ ] Write the full ```game()``` function
