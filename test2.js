/// obj init
var fruits = [
	{
		name: "apple",
    quantity: 1,
    id: 123
    },
    {
		name: "bannana",
    quantity: 1,
    id: 234
    },
    {
		name: "orange",
    quantity: 1,
    id: 567
    },
    {
		name: "lemon",
    quantity: 1,
    id: 878
    },
    {
		name: "apple",
    quantity: 1,
    id: 123
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
    var x = helper[current.id];
    if(x !== undefined) {
        final[x].quantity = final[x].quantity + array[i].quantity;
    } else {
        final.push(JSON.parse(JSON.stringify(current)));
        helper[current.id] = final.length -1;
    }
}
const end = Date.now();
console.log(end - start, final, helper)