'use strict';

async function getAddresses() {
  const response = await fetch('http://localhost:3000/addresses');
  return response.json();
}

export default getAddresses;
