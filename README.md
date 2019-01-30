# IdeaBox

### Abstract:

A note saving application.

### Live App

https://jamesb8891.github.io/ideaBox/

### Installation Instructions

  Open your Terminal
  
Copy and paste the following lines below into your terminal:
  
 ```git clone https://github.com/jamesb8891/ideaBox.git```
 
 ```cd ideaBox/```
 
 ```npm install```
 
 ```npm start```
  
  
### Project Background:

This project will help us learn object-oriented programming (OOP) principles by building the game Jeopardy. This project is an opportunity for us to use classes and to build a program in a larger scale than what we have previously done in other projects. This project is also an opportunity for us to build out a program based on user stories. In this project, we will also approach our challenges with an analytical approach.

### Project Goals:
  
  * Write a program from scratch
  * Design and implement OOP patterns
  * Understand and implement ES6 classes
  * Implement array iterator and mutator methods to work with game data
  * Write modular, reusable code that follows SRP (Single Responibility Principle)
  * Create a robust test suite that thoroughly tests all functionality of a client-side application

### User Stories:

Game play:

  * Must have 3 players
  * Must have 3 rounds - 3 rounds make up 1 game
  * The winner is determined by the player with the highest total score at the end all rounds
  * Each player starts with a score of 0
  * Each player's score should be displayed by their name
  * Each player gets an individual turn (rather than every player racing to answer the question)

Rounds:

  * 1st Round must have 4 categories, with 5 clues each, and point values ranging from 100 - 500
  * One clue in the first round must be a 'Daily Double'
  * 2nd Round must have 4 categories, with 5 clues each, and point values ranging from 200 - 1,000
  * Two clues in the second round must be a 'Daily Double'
  * 3rd Round must have a single category and a single clue that behaves like a 'Daily Double'
  * 3rd Round must only display the category, allow each player to input a wager, then display the clue

Clues:

  * Each clue should only appear once per game
  * 'Daily Double' clues must accept a wager from the player who selects it
  * The wager can range from a minimum of 5 points to a maximum of either:
  * the player's current total score
  * the highest point value remaining on the board
  * (whichever is greater)
  
As a player:

  * I should be able to quit/start a new game at any time
  * I should be able to enter my name
 
When it is my turn:
  * I should be able to select a category and point value off the board, as long as it hasn't already been previously selected
  * I should be able to input a wager if I have selected a 'Daily Double' clue
  * I should be able to input an answer after the clue I selected has been revealed
  * My score should increment or decrement by the point value of the clue if I answered right or wrong, respectively

### Design and Layout

##### My Inspiration:

<img width="393" alt="screen shot 2018-10-09 at 2 46 32 pm" src="https://user-images.githubusercontent.com/40005248/46751216-188f0200-cc77-11e8-8b52-7da8711cbe65.png">

We choose this as our inspiration because we liked the rounded edges, the drop shadow, and the overall clean look of the button.

##### My Wireframes:

<img width="635" alt="screen shot 2018-10-09 at 2 49 25 pm" src="https://user-images.githubusercontent.com/40005248/46751330-7d4a5c80-cc77-11e8-98b8-bf043b8dbe20.png">

<img width="631" alt="screen shot 2018-10-09 at 2 50 44 pm" src="https://user-images.githubusercontent.com/40005248/46751377-96eba400-cc77-11e8-82f4-addfb54b4b4b.png">

<img width="632" alt="screen shot 2018-10-09 at 2 51 07 pm" src="https://user-images.githubusercontent.com/40005248/46751400-acf96480-cc77-11e8-83a5-ff50bfcefbbd.png/">
