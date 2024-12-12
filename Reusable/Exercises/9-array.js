'use strict';

const phoneBookArray = [
    { name: 'Tamirlan', phone: '+380445554433' },
    { name: 'Arman', phone: '+380501112233' },
    { name: 'Ruslan', phone: '+380671234567' }
];

function findPhoneByNameArray(name) {
    for (let i = 0; i < phoneBookArray.length; i++) {
        if (phoneBookArray[i].name === name) {
            return phoneBookArray[i].phone;
        }
    }
  
}

console.log(findPhoneByNameArray('Tamirlan'));


