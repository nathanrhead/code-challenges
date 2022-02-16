'use strict';

const parent = document.querySelector('.address-carousel');

// This function is meant to mimic the challenge's structure and in this code base has no other use.
function getAllAddresses() {
  const addresses = [
    {
      addressee: "Kristen Copeland",
      streetNumber: "2",
      streetName: "Valley Farms Ave.",
      city: "Pataskala",
      state: "OH",
      zip: "43062"
    },
    {
      addressee: "Benjamin Pratt",
      streetNumber: "28",
      streetName: "La Sierra Street",
      city: "Chatsworth",
      state: "GA",
      zip: "30705"
    },
    {
      addressee: "Randall Hopkins",
      streetNumber: "8903",
      streetName: "Hill Field St.",
      city: "Lowell",
      state: "MA",
      zip: "01851"
    },
    {
      addressee: "Jennie Ramsey",
      streetNumber: "994",
      streetName: "W. Union St.",
      city: "Merrimack",
      state: "NH",
      zip: "03054"
    },
    {
      addressee: "Alicia Harris",
      streetNumber: "8355",
      streetName: "Hamilton Drive",
      city: "San Antonio",
      state: "TX",
      zip: "78213"
    },
    {
      addressee: "Nicolas Bishop",
      streetNumber: "784",
      streetName: "Elm St.",
      city: "Cle Elum",
      state: "WA",
      zip: "98874"
    },
    {
      addressee: "Geraldine Park",
      streetNumber: "941",
      streetName: "Carson Rd.",
      city: "Arlington",
      state: "MA",
      zip: "02474"
    },
    {
      addressee: "Abraham Parks",
      streetNumber: "1",
      streetName: "Henry St.",
      city: "New Windsor",
      state: "NY",
      zip: "12553"
    },
    {
      addressee: "Alfonso Bailey",
      streetNumber: "7326",
      streetName: "Magnolia Lane",
      city: "Desoto",
      state: "TX",
      zip: "75115"
    },
    {
      addressee: "Kelly Fuller",
      streetNumber: "7284",
      streetName: "College Street",
      city: "Bemidji",
      state: "MN",
      zip: "56601"
    },
    {
      addressee: "Kyle Riley",
      streetNumber: "773",
      streetName: "Eagle St.",
      city: "Virginia Beach",
      state: "VA",
      zip: "23451"
    },
    {
      addressee: "Andre Lane",
      streetNumber: "8923",
      streetName: "West Longbranch Drive",
      city: "Elizabethton",
      state: "TN",
      zip: "37643"
    },
    {
      addressee: "Felicia Hammond",
      streetNumber: "9",
      streetName: "Blackburn St. ",
      city: "Green Cove Springs",
      state: "FL",
      zip: "32043"
    },
    {
      addressee: "Angelo Hodges",
      streetNumber: "4",
      streetName: "Smith St.",
      city: "Nanuet",
      state: "NY",
      zip: "10954"
    }
  ];
  return addresses;
};

// This function is set to run automatically to display the first five addresses.
(function renderAddresses() {
  const addressArray = getAllAddresses();
  addressArray.map((address, idx) => {
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

    parent.appendChild(addressContainer);
  });

  displayFive(1, 5)
})();

function handleClick(event) {
  if (!event.target.id) return;
  const direction = event.target.id;
  const displayed = document.getElementsByClassName('display');
  let left = parseInt(displayed[0].id);
  let right = parseInt(displayed[displayed.length-1].id);
  
  if (direction === 'left') {
    if (left === 1) {
      right = parent.children.length;
      left = right - 4;
    } else {
      right = right - 5;
      left = left - 5;
    }
  } else {
    if (right >= parent.children.length) {
      left = 1;
      right = 5;
    } else {
      left = left + 5;
      right = right + 5;
    }
  }
  displayFive(left, right);
}

function displayFive(left, right) {
  for (let { id } of parent.children) {
    const addressId = parseInt(id);
    if (typeof addressId === 'number') {
      if (addressId >= left && addressId <= right) {
        document.getElementById(id).classList.add('display');
      } else document.getElementById(id).classList.remove('display');
    }
  }
}
