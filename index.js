module.exports = convertRange;

/**
  * Convert value from one range to another
  * @param {Number} value value to convert
  * @param {Object|Array} oldRange min, max of original range
  * @param {Object|Array} newRange min, max of desired range
  * @return {Number} value converted to other range
  */
function convertRange(value, oldRange, newRange) {
  if (Array.isArray(oldRange) && Array.isArray(newRange)) {
    return ((value - oldRange[0]) * (newRange[1] - newRange[0])) / (oldRange[1] - oldRange[0]) + newRange[0];
  }
  return ((value - oldRange.min) * (newRange.max - newRange.min)) / (oldRange.max - oldRange.min) + newRange.min;
}
