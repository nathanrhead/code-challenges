// Hacker Rank 30 Days of Code Challenges: Day 13 = Abstract Classes

// Task: Given a Book class and a Solution class, write a MyBook class that does the following:
  // - inherits from Book;
  // - has a constructor that takes the following 3 parameters:
    // > string 'title';
    // > string 'author';
    // > int 'price';
  // - implements the Book class's abstract display() method, so that it will print these three lines:
    // 1. Title:, a space and then the current instance's title.
    // 2. Author:, a space and then the current instance's author.
    // 3. Price:, a space and then the current instance's price.

// Input: You are not responsible for reading any input from stdin. The Solution class creates a Book object and calls the MyBook class constructor (passing it the necessary arguments). It then calls the display method on the Book object.

// Output:  Title: $title
//          Author: $author
//          Price: $price

// Sample input: 
//      The Alchemist
//      Paulo Coelho
//      248

// Sample output:
//      Title: The Alchemist
//      Author: Paulo Coelho
//      Price: 248

'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('\n'));
    main();    
});
function readLine() { return _input[_index++]; }

class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
        else {
            this.title = title;
            this.author = author;
        }
    }
    display() {
        console.log('Implement the \'display\' method!')
    }
}
/**** Ignore above this line. ****/

// Declare your class here.
class MyBook extends Book {
    /**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    // Write your constructor here
    constructor(title, author, price) {
        super(title, author, price);
        this.price = price;
    }
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    // Write your method here
    display() {
        console.log(`Title: ${this.title} \nAuthor: ${this.author} \nPrice: ${this.price}`);
    }
// End class
}

/**** Ignore below this line. ****/
function main() {
    let title = readLine()
    let author = readLine()
    let price = +readLine()

    let book = new MyBook(title, author, price)
    book.display()
}
