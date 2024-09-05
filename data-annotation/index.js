'use strict';

/*
You are given a Google Doc that contains a list of Unicode characters and their positions in a 2D grid. 

Your task is to write a function that takes in the URL for such a Google Doc as an argument, retrieves and parses the data in the document, and prints the grid of characters. 

When printed in a fixed-width font, the characters in the grid will form a graphic showing a sequence of uppercase letters, which is the secret message.

The document specifies the Unicode characters in the grid, along with the x- and y-coordinates of each character.

The minimum possible value of these coordinates is 0. There is no maximum possible value, so the grid can be arbitrarily large.

Any positions in the grid that do not have a specified character should be filled with a space character.

You can assume the document will always have the same format as the example document.

Your code must be written in Python (preferred) or JavaScript.

You may use external libraries.

You may write helper functions, but there should be one function that:
  1. takes in one argument, which is a string containing the URL for the Google Doc with the input data, AND;
  2. when called, prints the grid of characters specified by the input data, displaying a graphic of correctly oriented uppercase letters.
*/
import { parse } from 'node-html-parser';
// Test URLs
const url = 'https://docs.google.com/document/d/e/2PACX-1vSHesOf9hv2sPOntssYrEdubmMQm8lwjfwv6NPjjmIRYs_FOYXtqrYgjh85jBUebK9swPXh_a5TJ5Kl/pub';
// const url = 'https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub';
// const url = '';
// const url = 'https://campswim-dashboard-demo.netlify.app/login';

// Get the html from the url's page and parse it with the help of the node-html-parser library.
const getHtml = url => {
  // Error check for a missing argument.
  if (!url) throw new Error('Error: no url was passed to the getHtml function.');

  fetch(url)
  .then((response) => response.body)
  .then((rb) => {
    const reader = rb.getReader();

    return new ReadableStream({
      start(controller) {
        function push() {
          reader.read().then(({ done, value }) => {
            
            // If there is no more data to read.
            if (done) {
              controller.close();
              return;
            }
            // Get the data and send it to the browser via the controller.
            controller.enqueue(value);
            push();
          });
        }

        push();
      },
    });
  })
  .then((stream) =>
    // Respond with the stream.
    new Response(stream, { headers: { "Content-Type": "text/html" } }).text(),
  )
  .then(
    res => {
      // Parse the response.
      const root = parse(res);
    
      // Call the function that parses the HTML.
      createRowObject(root);
    },
    err => {
      throw new Error(err);
    }
  );
};

// Create an object that mirrors the HTML table in question, sans the column headers, and a matrix of the symbols and spaces based on their x and y coordinates.
const createRowObject = html => {
  // Error check for missing argument.
  if (!html) throw new Error('No HTML was passed to the createRowObject function.');

  // Declare and instantiate variables.
  const tableCells = html.getElementsByTagName('td'); // Get the table from the html.
  let rows = {}, coordinates = {}, numberOfRows = 0, numberOfColumns = 0, counter = 0, matrix = [];

  // Loop through the cells to retrieve their value and add them to the rows object.
  for (const [index, value] of tableCells.entries()) {
    let coordinate, symbol;
    const cellValue = value.innerText;

    if (index > 2) {
      if (!isNaN(parseInt(cellValue))) coordinate = cellValue;
      else symbol = cellValue;
    }
    
    if (coordinate) {
      if (!coordinates.x) {
        coordinates.x = coordinate;
        numberOfRows = numberOfRows < parseInt(coordinate) ? parseInt(coordinate) : numberOfRows;
      } else if (!coordinates.y) {
        coordinates.y = coordinate;
        numberOfColumns = numberOfColumns < parseInt(coordinate) ? parseInt(coordinate) : numberOfColumns;
      } 
    } else if (symbol) coordinates.symbol = symbol;

    if ((coordinates.x || coordinates.x === 0) && (coordinates.y || coordinates.y === 0)) {
      counter++;
      rows[counter] = coordinates;
      coordinates = {};
    }
  }

  // Instantiate the matrix (two-dimensional array) based on the maximum values of x and y.
  matrix = Array.from({ length: numberOfColumns + 1}, () => Array(numberOfRows).fill(0));

  if (JSON.stringify(rows) !== '{}') printGrid(rows, matrix);
  else throw new Error('There is no data to parse.');
};

// Print the values from the matrix in the proper order to display the encoded message.
const printGrid = (rows, matrix) => {
  // Error check for missing argument.
  if (!rows) throw new Error('printGrid: nothing was sent to the print function.');
  
  // Declare variables.
  let letterString = '';
  
  // Loop through the rows object to populate the matrix with each row's symbol, based on its x and y coordinates, or a zero where there is no symbol.
  Object.values(rows).forEach(row => {
    const x = row.x;
    const y = row.y;
    const symbol = row.symbol;

    matrix[parseInt(y)][parseInt(x)] = symbol;
  });

  // Loop backwards through the matrix, printing each symbol or a space where there is no synmbol.
  for (let i = matrix.length - 1; i >= 0; i--) {
    const letterRowArray = matrix[i];

    letterRowArray.forEach((symbol, idx) => {
      if (symbol) letterString = letterString + symbol;
      else letterString = letterString + ' ';
      if (idx === letterRowArray.length - 1) letterString = letterString + '\n';
    });
  }

  // Print the message to the console.
  if (letterString) console.log(letterString);
  else console.log('There is no encoded message at this URL.');
}

// Call the first helper function.
getHtml(url);
