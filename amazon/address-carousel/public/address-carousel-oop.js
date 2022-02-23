'use strict';

import get from './get-addresses.js';

// This version implements the address carousel using a JS class component (object-oriented programming), instead of functional components.

export default class Carousel {
  constructor(displayNum) {
    this.addresses = this.getAddresses(); // This just calls the getAddresses method and isn't used elsewhere.
    this.displayNum = displayNum;
    this.parent = document.querySelector('.address-carousel');
  }

  // Initialize and fill the address carousel.
  getAddresses() {

    // The click handler: resets the range depending on whether the click is on the left or right arrow and recalls displayFive with the new range.
    document.querySelector('.carousel-container').addEventListener('click', event => {
      if (!event.target.id) return;
      const direction = event.target.id;
      const displayed = document.getElementsByClassName('display');
      let left = parseInt(displayed[0].id);
      let right = parseInt(displayed[displayed.length-1].id);
      
      if (direction === 'left') {
        if (left === 1) {
          right = this.parent.children.length;
          left = right - 4;
        } else {
          right = right - 5;
          left = left - 5;
        }
      } else {
        if (right >= this.parent.children.length) {
          left = 1;
          right = 5;
        } else {
          left = left + 5;
          right = right + 5;
        }
      }
      this.displayFive(left, right);
    });

    // This is the external api call that retrieves the address data as a promise and loops through it to render all of the addresses to the DOM.
    get().then(response => 
      response.body.map((address, idx) => {
        const addressContainer = document.createElement('div');
        addressContainer.setAttribute('class', 'address-container');
        addressContainer.setAttribute('id', idx+1);
  
        const addressee = document.createElement('h3');
        addressee.innerText = address.addressee;
        addressContainer.appendChild(addressee);
  
        const street = document.createElement('h4');
        street.innerText = `${address.streetNumber} ${address.streetName}`;
        addressContainer.appendChild(street);
  
        const city = document.createElement('h4');
        city.innerText = address.city;
        addressContainer.appendChild(city);
  
        const state = document.createElement('h4');
        state.innerText = address.state;
        addressContainer.appendChild(state);
  
        const zip = document.createElement('h4');
        zip.innerText = address.zip;
        addressContainer.appendChild(zip);
  
        this.parent.appendChild(addressContainer);
      })
    )
    .then(() => this.displayFive(1, this.displayNum));
  }

  // This method displays n number of addresses, e.g., 5.
  displayFive(left, right) {
    for (let { id } of this.parent.children) {
      const addressId = parseInt(id);
      if (typeof addressId === 'number') {
        if (addressId >= left && addressId <= right) {
          document.getElementById(id).classList.add('display');
        } else document.getElementById(id).classList.remove('display');
      }
    }
  }
}
  
new Carousel(5);

