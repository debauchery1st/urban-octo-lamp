/**
 * @param none
 * has only one instance
 * @returns {object} a global point of access to it
 */
export const mgmt = (function() {
  let instance;
  /**
   * @param none
   * timestamp the instance
   * @returns true
   */
  function ts() {
    if (!instance) {
      return true;
    }
    instance.accessed += 1;
    instance.data = { ...instance.data, last: Date.now() };
    return true;
  }
  /**
   * @param none
   * timedelta
   * @returns {object} time passed in seconds
   */
  function timedelta() {
    return {
      uptime: ((Date.now() - instance.data.created) * 10 ** -3).toFixed(2),
      last: ((Date.now() - instance.data.last) * 10 ** -3).toFixed(2)
    };
  }
  /**
   * @param none
   * create instance
   * @returns {object} new mgmt.instance
   */
  function createInstance() {
    return new Object({
      accessed: 0,
      text: "simple manager",
      data: {
        created: Date.now()
      },
      stat: timedelta
    });
  }
  return {
    getInstance: function() {
      if (!instance) instance = createInstance();
      ts(); // timestamp
      return instance;
    }
  };
})();
