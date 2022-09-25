let user = {
    name: 'John',
    sizes: {
        height: 182,
        width: 50,
    },
};

let clone = Object.assign({}, user);


console.log(user.sizes === clone.sizes);

clone.sizes = {height: 200, width: 100};
// clone.sizes.height = 200;
console.log(user.name === clone.name);
console.log(user.sizes);
console.log(clone.sizes)