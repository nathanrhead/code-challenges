/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

const solution = function(isBadVersion, version, firstBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  let left = 1, right = version, midPoint = 0;
  
  while (left <= right) {
    midPoint = Math.round((left + right) / 2);

    if (isBadVersion(midPoint, firstBadVersion)) {
        if (!isBadVersion(midPoint - 1, firstBadVersion)) return midPoint;
        else right = midPoint - 1;
    } else left = midPoint + 1;
  }

  return midPoint;
};

module.exports = solution;
