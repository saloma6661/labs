function array() {
    const data = [];

    function accessor(index) {
        return data[index];
    }

    accessor.push = function(value) {
        data.push(value);
    };

    accessor.pop = function() {
        return data.pop();
    };

    return accessor;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());