# Rock-Paper-Scissors-TOP
A game of rock paper scissors. Implemented with Javascript, HTML, CSS.

## Goals 
Gain familiarity with manipulating the DOM with Javascript. Builds on the console version of this project, description of that [here](console-prototype-README.md).

### Understand the Problem
The final version should have, at minimum, 3 buttons for user input, a div for displaying messages to the user, some score tracking from round to round. 


### Plan
First we need three buttons labeled rock paper scissors. These can be exceptionally ugly as long as they work. We can then set the buttons to priont their label to console on press to test to see that they work. Then we can can build our div for communicating with the user. We can test this by writing the label of the button pressed to the div now instead of the console. Figure out how to display the running score, and announce a winner of the game once one player reaches 5 points. Then as a stretch we can add a reset button.

### Divide and Conquer

- [x] Create a Git branch from the console only version of this project
- [x] Add three buttons to the html
- [x] Add event listeners to the buttons to call playRound with their label as player input.
- [x] Add div for displaying results
- [x] display the running score, and announce a winner of the game once one player reaches 5 points
- [x] add a reset button

## Lessons Learned
I experimented with just approaching this problem with the ugliest code I could concoct and just running headfirst into the problem. It was helpful in that I was able tog ets ome things running rather quickly. But after adding the div for displaying results it got a little unwieldly and less fun. I think I'd like to refactor a little bit. 

I ended up nixing the reset button and just having the game reset when you try and play after someone has already won. I made this very ugly but it wasn't too hard and I think could be refactored to look nice rather easily!