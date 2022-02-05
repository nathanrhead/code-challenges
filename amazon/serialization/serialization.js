'use strict';

/*!
 * Serialize all form data into an object
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {FormData} data The FormData object to serialize
 * @return {String}        The serialized form data
 */
function serialize(event) {
  event.preventDefault();
  const form = event.target;
	console.log({form});
  const data = new FormData(form); // From MDN: "The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values." The key-value pairs are only visible by iterating through, using a for-of loop, as below.
	const obj = {};
	for (let [key, value] of data) {
		console.log({key}, {value});
		if (obj[key] !== undefined) {
			if (!Array.isArray(obj[key])) {
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
		} else {
			obj[key] = value;
		}
	}
  const objStringified = JSON.stringify(obj);
  console.log({obj}, {objStringified});
	return { obj, objStringified };
}
