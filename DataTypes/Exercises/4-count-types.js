'use strict'

const array = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, { a: 1 }, [1, 2], () => {}, Symbol('sym')];

const typeCounts = {};

for (const item of array) {
  const type = typeof item; 
  if (!(type in typeCounts)) {
    typeCounts[type] = 0;
  }
  typeCounts[type]++;
}
console.dir(typeCounts);
