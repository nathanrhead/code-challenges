/*
 * Serialize all form data into an object without using the native JS class FormData().
 * @param  {Object} event   The HTML input data to serialize.
 * @return {String}         The serialized form data.
 */

'use strict';

// This function is the onsubmit callback.
function serialize(event) {
  event.preventDefault();
  const valuesArray = event.target;
  for (let value of valuesArray) {
    console.log('Name: ', value.name);
    console.log('Value: ', value.value);

  }
};

