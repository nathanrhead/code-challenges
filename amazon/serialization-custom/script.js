/*
 * Amazon Code Challenge (Virual Onsite): Serialize all form data into an object without using the native JS class FormData().
 * @param 
 * @return {String}         The serialized form data.
 */

/*
The object is to be nested wherever the dot-notation indicates, e.g.:

{
  addressee: '',
  street: {
    number: '',
    name: ''
  },
  location: {
    city: '',
    state: '',
    zip: ''
  }
}
*/

// Using for loops.
(function serializeFormData1() {
  let obj = {};
  let schema = obj;  // a moving reference to internal objects within obj

  const formData = document.querySelector('form'); // Stores a list of inputs that can be iterated through using a for-of or a for loop.
  
  for (let i = 0; i < formData.length; i++) {
    const pathList = formData[i].name.split('.'); // Split each input's name into an array of values, their separation being defined by the dot of their name's dot notation, if relevant.

    schema = obj; // Reset the pointer, or schmea, to the front of the object.
    
    // This means that there is dot notation involved in the naming of the element and indicates nesting.
    if (pathList.length > 1) { 
      
      // Loop through each input's array of names to set up the object's pathway.
      for (let j = 0; j < pathList.length; j++) { 
        const elem = pathList[j];
        
        // Set the key if no such key exists and make it equal to an empty object.
        if (!schema[elem]) schema[elem] = {};
        
        // If the loop is on its last iteration, set the key equal to the input's value.
        if (j + 1 === pathList.length) schema[elem] = formData[i].value;
        schema = schema[elem]; // Move the schema, or pointer, down a level.
      }
    } else schema[formData[i].name] = formData[i].value;
  }
  console.log(JSON.stringify(obj));
  return obj;
})();

// Using declarative loops (for-of and forEach).
(function serializeFormData2() {
  let obj = {};
  let schema = obj;  // a moving reference to internal objects within obj

  const formData = document.querySelector('form');
  
  for (let {name, value} of formData) {
    const pathList = name.split('.'); // Split each input's name into an array of values, their separation being defined by the dot of their name's dot notation, if relevant.

    schema = obj; // Reset the pointer, or schmea, to the front of the object.
    
    // This means that there is dot notation involved in the naming of the element and indicates nesting.
    if (pathList.length > 1) { 
      
      // Loop through each input's array of names to set up the object's pathway.
      pathList.forEach((path, idx) => {
              
        // Set the key if no such key exists and make it equal to an empty object.
        if (!schema[path]) schema[path] = {};
        
        // If the loop is on its last iteration, set the key equal to the input's value.
        if (idx + 1 === pathList.length) schema[path] = value;
        schema = schema[path]; // Move the schema, or pointer, down a level.
      })
    } else schema[name] = value;
  }
  console.log(JSON.stringify(obj));
  return obj;
})();