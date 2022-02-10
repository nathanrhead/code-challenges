# Amazon Tech Screen #1 | 18 January 2022

## Author

Nathan Cox

## To Run

`npm start` from the command line or open index.html.

## Task

You're going to work on a Movie Table web application. Here's a mockup of the app:

``` (md)
-----------------------------------
| Name      | Released | Rating | |
-----------------------------------
| Lion King | 1994     | 8.5    |x| *<-- to remove a row 
| Up        | 2009     | 8.2    |x| 
| Apollo 13 | 1995     | 7.6    |x| 
-----------------------------------
[ Enter name... ]
[ Enter Release date... ]
[ Enter Rating... ]
{SUBMIT}
```

### Requirements

- [x] Create the web application in HTML/CSS/JS  
- [x] Write JS functionality such that, given a table in the DOM, we can  
  - [x] add individual rows through form submission;  
  - [x] remove individual rows by clicking the x button;  
  - [x] stretch goal: sort by column (by default, there is no sort enabled);  

### Constraints and Edge Cases (added by NRC in conversation with interviewer)

- [ ] Time box: 45 minutes.
- [ ] Sans-AJAX but built with AJAX and persistence in mind.
- [x] Assume a small data set.
- [x] Validation for each field, including requiring data for each field.
- [x] Reset the input fields to their placeholders after submission.
