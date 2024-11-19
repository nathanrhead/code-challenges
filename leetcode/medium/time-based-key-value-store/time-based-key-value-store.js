class TimeMap {
  constructor() {
    // A map where each key maps to an array of [timestamp, value] pairs.
    this.map = new Map();
  }

  set(key, value, timestamp) {
    // Create the key, if it doesn't already exist in the map, and set it equal to an empty array.
    if (!this.map.has(key)) this.map.set(key, []);

    // Add the timestamp and value as an array to the key's parent array.
    this.map.get(key).push([timestamp, value]);
  }

  get(key, timestamp) {
    // Return an empty string, if the key doesn't exist in the map.
    if (!this.map.get(key)) return '';

    const values = this.map.get(key);
    let left = 0, right = values.length - 1;

    // Binary search for the largest timestamp <= the given timestamp.
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
    
      if (values[mid][0] <= timestamp) left = mid + 1; // The timestamp may be to the right.
      else right = mid - 1; // The timestamp may be to the left.
    }

    return right >= 0 ? values[right][1] : '';
  }
};

module.exports = TimeMap;
