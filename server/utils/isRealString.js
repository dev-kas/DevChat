/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
let isRealString = (str) => {
  return typeof str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};
