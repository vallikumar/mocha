
/**
 * Default isatty for the client-side.
 */

exports.isatty = function(){
  return true;
};

/**
 * Default getWindowSize for the client-side.
 */

exports.getWindowSize = function(){
  return [window.innerHeight, window.innerWidth];
};