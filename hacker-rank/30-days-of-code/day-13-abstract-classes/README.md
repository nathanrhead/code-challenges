# Hacker Rank: 30 Days of Code Challenges: Day 13

## Task

Given a Book class and a Solution class, write a MyBook class that does the following:

- inherits from Book;
- has a constructor that takes the following 3 parameters:
  > string 'title';
  > string 'author';
  > int 'price';
- implements the Book class's abstract display() method, so that it will print these three lines:
  1. Title:, a space and then the current instance's title.
  2. Author:, a space and then the current instance's author.
  3. Price:, a space and then the current instance's price.

## Input

You are not responsible for reading any input from stdin. The Solution class creates a Book object and calls the MyBook class constructor (passing it the necessary arguments). It then calls the display method on the Book object.

## Output

Title: $title
Author: $author
Price: $price

### Sample input

The Alchemist
Paulo Coelho
248

### Sample output

Title: The Alchemist
Author: Paulo Coelho
Price: 248
