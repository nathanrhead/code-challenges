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
  const data = new FormData(form);
	const obj = {};
	for (let [key, value] of data) {
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
