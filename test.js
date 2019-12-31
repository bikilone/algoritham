
// let counter = 0;
// let helper = {};
// const start = Date.now()
// const final = fruits.reduce( (total, current, currentIndex, arr) => {
//     if(Number.isInteger(helper[current.name])) {
//         total[helper[current.name]].quantity += arr[currentIndex].quantity;
//         return total;
//     } else {
//         total.push(current);
//         helper[current.name] = currentIndex;
//         return total;
//     }
// }, [])
// const end = Date.now();
// const diff = end - start;
// console.log(end, start, diff);

var fruits = [
	{
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 6,
	},
	{
		name: 'banana',
		quantity: 3,
	},
	{
		name: 'orange',
		quantity: 2,
	},
	{
		name: 'apple',
		quantity: 2,
	},
	{
		name: 'lemon',
		quantity: 4,
	},
	{
		name: 'banana',
		quantity: 9,
	},
	{
		name: 'strawberry',
		quantity: 3,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'apple',
		quantity: 2,
    },
    {
		name: 'strawberry',
		quantity: 3,
    },
]
let array = [];
for(let i = 0; i < 100000; i++) {
    array.push(...fruits);
}
console.log(array.length);

const start = Date.now();
let helper = {};
const final = array.reduce( (total, current, currentIndex, arr) => {
    if(helper[current.name] !== undefined) {
        total[helper[current.name]].quantity += arr[currentIndex].quantity;
        return total;
    } else {
        total.push(current);
        helper[current.name] = total.length - 1;
        return total;
    }
}, [])
const end = Date.now();
console.log(start, end, end - start, final, helper) //470

// // MARE DRUGI PUT
// console.log(array.length)
// const start1 = Date.now();
// var helper1 = {}
// var fruitsFinal = []
// for (var i = 0, len = array.length; i < len; i++) {
// 	var fruitName = array[i].name
// 	if (helper1[fruitName]) {
// 		helper1[fruitName].quantity += array[i].quantity
// 		fruitsFinal[helper1[fruitName].position] = helper1[fruitName]
// 	} else {
// 		helper1[fruitName] = array[i]
// 		helper1[fruitName].position = fruitsFinal.length
// 		fruitsFinal.push(helper1[fruitName])
// 	}
// }
// const end1 = Date.now();

// console.log(start1, end1, end1 - start1, fruitsFinal)






// MARE
// var newFruits = []
// const start = Date.now();
// array.forEach(f => {
//     const index = newFruits.findIndex(nf => {
//         return nf.name === f.name
//     })
//     if (index !== -1) {
//         newFruits[index].quantity += f.quantity
//     } else {
//         newFruits.push(f)
//     }
// })
// const end = Date.now();
// console.log(start, end, end - start, newFruits)

// NOLE
// function filteredFruits() {
    // var arr = [];
    // var obj;
    // var index = 0;
    // const start = Date.now();
    // for (var i = 0; i < array.length; i++) {
    //     var fruit = array[i];
    //     var quantity = fruit.quantity;
    //     obj = {};
    //     var counter = 0;
    //     if (arr.length > 0) {
    //         for (var l = 0; l < arr.length; l++) {
    //             if (fruit.name === array[l].name) {
    //                 counter++;
    //             }
    //         }
    //     }
    //     if (counter <= 0) {
    //         for (var j = i + 1; j < array.length; j++) {
    //             if (fruit.name === array[j].name) {
    //                 quantity += array[j].quantity;
    //                 obj = {
    //                     name: fruit.name,
    //                     quantity: quantity
    //                 }
    //             } else if (obj == undefined || Object.keys(obj).length > 0) {
    //                 obj = {
    //                     name: fruit.name,
    //                     quantity: quantity
    //                 }
    //             } else {
    //                 obj = {
    //                     name: fruit.name,
    //                     quantity: fruit.quantity
    //                 }
    //             }
    //         }
    //     }
    //     if (Object.keys(obj).length > 0) {
    //         arr[index] = obj;
    //         index++;
    //     }
    // }
    // const end = Date.now();
    // console.log(arr, start, end, end - start)
    // return arr;
// }
// filteredFruits();