'use strict';

// Hacker Rank stuff
/**** Ignore below this line. ****/

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

  // Write your constructor here
  constructor(title, author, price) {
    super(title, author, price);
    this.price = price;
  }

  // Write your method here
  display() {
    console.log(`Title: ${this.title} \nAuthor: ${this.author} \nPrice: ${this.price}`);
  }
}

/**** Ignore below this line. ****/
function main() {
  let title = readLine()
  let author = readLine()
  let price = +readLine()

  let book = new MyBook(title, author, price)
  book.display()
}
