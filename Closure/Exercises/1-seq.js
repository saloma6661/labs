const seq = (fn) => (arg) => {
    if (typeof arg === 'number') return fn(arg);
    return seq((x) => fn(arg(x)));
};

console.log(seq(x => x * 2)(x => x + 7)(5));
