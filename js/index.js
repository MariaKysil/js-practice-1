// const cart = {
//  items: [],
//  getItems() {
//   return this.items;
//  },
//  add(product) {
//   for (const item of this.items) { 
//     if(item.name === product.name) {
//       return item.quantity +=1;
//     }
//   }

//   const newProduct = {
//     ...product,
//     quantity: 1,
//   } 

//   return this.items.push(newProduct);
//  },
//  remove(productName) {
//   const elIndex = this.items.indexOf(productName);
//   return this.items.splice(elIndex, 1)
//  },
//  clear() {
//   return this.items = [];
//  },
//  countTotalPrice() {
//   const {items} = this;
//   let total = 0;

//   for (const {price, quantity} of items) {
//   total += price * quantity;
//   }

//   return total;
//  },
//  increaseQuantity(productName) {
// const {items} = this; 
// for (const item of items) {
// if(item.name === productName) {
// return item.quantity +=1;;
// } }

// },
//  decreaseQuantity(productName) {
//   const {items} = this; 
// for (const item of items) {
// if(item.name === productName) {
// return item.quantity -=1;;
// } }
//  },
// };

// console.table(cart.getItems());

// cart.add({ name: '🍎', price: 20 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// cart.remove('🍓'); 
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// // cart.clear();
// // console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());
// cart.increaseQuantity('🍎');
// console.table(cart.getItems());
// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// function doMath (a, b, callback){
// return callback(a,b)
// }

// function mul (x, y) {
//   return x*y;
// }

// console.log(doMath(100, 5, mul))

function filter(array, test) {
  const filteredArray = [];

for (const el of array) {
  const passed = test(el);
  if(passed) {
    filteredArray.push(el)
  }
}
return filteredArray;
}

function callback1 (value) {
return value > 3; 
}

console.log(filter([1,2,3,4,5,6,7,8,9,10], callback1))