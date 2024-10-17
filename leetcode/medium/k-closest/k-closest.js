/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
*/

const kClosest = function(points, k) {
  // Calculate the distance for each point and sort by that distance.
  points.sort((a, b) => {    
    const distA = a[0] ** 2 + a[1] ** 2;
    const distB = b[0] ** 2 + b[1] ** 2;
    
    // Per the sorting algorithm, if a negative number is returned (distA < distB), distA is placed first; otherwise, distB is placed first.
    return distA - distB;
});

// Return the first k points after sorting
return points.slice(0, k);
};

module.exports = kClosest;
