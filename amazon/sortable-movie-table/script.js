// Capture the user's inputs.
function handleSubmit(event) {
  event.preventDefault();
  if (!event) return;
  const dataArray = [];
  const counter = event.target.length;
    for (let i = 0; i < counter-1; i++) {
      dataArray.push(event.target[i].value);
    }

  // Add an 'X' to the array for the final column.
  dataArray.push('X');

  // Validate string and number.
  for(let j = 0; j < dataArray.length - 1; j++) {
    if (j === 0 && typeof dataArray[j] !== 'string') alert('Name must be text only.');
    if (j === 2 && typeof parseInt(dataArray[j]) !== 'number') alert('Rating must be a number.');
  }

  renderEntry(dataArray);
  clearInputs();
}

// Render a new table row with user inputs.
function renderEntry(dataArray) {
  const parent = document.querySelector('#movie-table-body');
  const row = document.createElement('tr');
  const numOfRows = document.getElementById('movie-table').rows.length;
  row.setAttribute('id', numOfRows);
  dataArray.forEach((item, idx) => {
    const cell = document.createElement('td');
    cell.innerText = item;
    cell.setAttribute('class', idx);
    row.appendChild(cell);
  });
  parent.appendChild(row);

  //Add an event listener to the X.
  const x = document.getElementsByClassName('3');
  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', handleDeleteRow);
  }

  // sortByColumn(0);
}

// Clear the contents of the input fields after submission.
function clearInputs() {
  const cell = document.getElementsByTagName('input');
  for (let i = 0; i < cell.length - 1; i++) {
    cell[i].value = '';
  }
}

// Delete a row.
function handleDeleteRow(event) {
  const rowNum = event.target.parentNode.id;
  document.getElementById(rowNum).remove();
}

// Stretch Goal #1: add sorting. (Adapted with gratitude from dcode's video at https://www.youtube.com/watch?v=8SL_hM1a0yo).
function sortByColumn(category) {
  const column = category === 'Name' ? 0 : category === 'Released' ? 1 : category === 'Rating' ? 2 : -1;
  if (column < 0) return;

  // Get the table and the tbody and create an array of its rows.
  const table = document.querySelector('table');
  const tbody = document.querySelector('tbody');
  const rows = Array.from(tbody.getElementsByTagName('tr'));

  // Determine whether ascending or descending or neither.
  const headers = table.querySelectorAll('th');
  const direction = headers[0].className;
  const dirModifier = direction.includes('ascending') ? 1 : direction === '' ? -1 : -1;

  const sortedRows = rows.sort((a, b) => {
    const valueA = a.cells[column].innerText.toUpperCase();
    const valueB = b.cells[column].innerText.toUpperCase();

    return valueA > valueB ? (-1 * dirModifier) : (1 * dirModifier);
  });

  // Replace the current <tbody> with a new one with sorted rows.
  table.querySelector('tbody').remove();
  const sortedBody = document.createElement('tbody');
  sortedBody.append(...sortedRows);
  table.appendChild(sortedBody);

  // Record the direction as a class name.
  headers.forEach(th => {
    th.classList.toggle('ascending');
    if (th.innerText === category) th.classList.add('clicked');
    else th.classList.remove('clicked');
  });
}

// Stretch goal #2 (made up by me): Return data from a chosen column in an array with the category name at position 1. (Is an array the best structure for this?)
function returnColumnData(column) {
  const table = document.getElementById('movie-table');
  const columnNum = table.rows[0].cells.length;
  const columnData = [];
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < columnNum; j++) {
      if (column === j) columnData.push(table.rows[i].cells[j].innerText);
    }
  }
  return columnData;
}