/// obj init
var fruits = [
	{
		name: "apple",
		quantity: 1
    },
    {
		name: "bannana",
		quantity: 1
    },
    {
		name: "orange",
		quantity: 1
    },
    {
		name: "lemon",
		quantity: 1
    },
    {
		name: "apple",
		quantity: 1
	}
]
let array = [];
for(let i = 0; i < 2800000; i++) {
    array.push(...fruits);
}
console.log(array.length);
///
const start = Date.now();
let helper = {};
const final = [];
for(let i = 0; i < array.length; i++) {
    var current = array[i];
    var x = helper[current.name];
    if(x !== undefined) {
        final[x].quantity = final[x].quantity + array[i].quantity;
    } else {
        final.push(JSON.parse(JSON.stringify(current)));
        helper[current.name] = final.length -1;
    }
}
const end = Date.now();
console.log(end - start, final, helper)