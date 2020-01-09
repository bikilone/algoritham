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
for (let i = 0; i < 2800000; i++) {
    array.push(...fruits);
}
console.log(array.length);
// const start = Date.now();
// let helper = {};
// const final = [];
function calculateQuantity(item, helper, final) {
    var current = item;
    var x = helper[current.id];
    if (x !== undefined) {
        final[x].quantity = final[x].quantity + item.quantity;
    } else {
        final.push(JSON.parse(JSON.stringify(current)));
        helper[current.id] = final.length -1;
    }
}
// var p1 = new Promise((resolve, reject) => {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//         calculateQuantity(array[i])
//     }
//     resolve(true)
// })
// var p2 = new Promise((resolve, reject) => {
//     for (let i = Math.floor(array.length / 2); i < array.length; i++) {
//         calculateQuantity(array[i])
//     }
//     resolve(true)
// })
// Promise.all([p1, p2]).then(() => {
//     const end = Date.now();
//     console.log(end - start, final, helper)
// })
const a = Math.floor(array.length / 4)
const b = Math.floor(array.length / 4)*2
const c = Math.floor(array.length / 4)*3
const d = Math.floor(array.length / 4)*4

function onClick() {
    const start = Date.now();
    let helper = {};
    const final = [];   
    var p1 = new Promise((resolve, reject) => {
        for (let i = 0; i < a; i++) {
            calculateQuantity(array[i],helper, final)
        }
        resolve(true)
    })
    var p2 = new Promise((resolve, reject) => {
        for (let i = a; i < b; i++) {
            calculateQuantity(array[i],helper, final)
        }
        resolve(true)
    })
    var p3 = new Promise((resolve, reject) => {
        for (let i = b; i < c; i++) {
            calculateQuantity(array[i],helper, final)
        }
        resolve(true)
    })
    var p4 = new Promise((resolve, reject) => {
        for (let i = c; i < array.length; i++) {
            calculateQuantity(array[i],helper, final)
        }
        resolve(true)
    })
    
    Promise.all([p1, p2, p3, p4]).then(() => {
        const end = Date.now();
        console.log(end - start, final, helper)
    })
}

const btn = document.getElementById("btn");
btn.addEventListener("click", onClick)