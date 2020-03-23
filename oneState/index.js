/**
 * @module oneState
 * @type {object} obj
 * @static
 */
const mgmt = require("./mgmt").getInstance();
const get = key => {
  return key ? mgmt.data[key] : mgmt.data;
};
/**
 * @param {object} obj *required
 * @type {object} obj
 * @param {boolean} stamp timestamp this call
 * @returns {boolean}
 */
const set = (obj, stamp = false) => {
  const firstKey = Object.keys(obj)[0];
  if (firstKey === "0") return false;
  return mgmt.insert(obj, stamp);
};
/**
 * @param none returns time delta in seconds
 * @returns {object}
 */
const uptime = () => {
  return mgmt.uptime();
};
module.exports = {
  uptime,
  get,
  set
};
