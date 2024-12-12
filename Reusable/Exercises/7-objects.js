'use strict';

const fn = () => {
    const obj1 = { name: 'misha' };
    let obj2 = { name: 'misha' };
  
    obj1.name = 'mike';
    obj2.name = 'mike';
  
    obj2 = { name: 'tamirlan' };
  };
  
  
  module.exports = { fn };
