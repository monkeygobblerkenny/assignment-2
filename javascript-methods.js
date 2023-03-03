/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  let arr = [...this];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === undefined) continue;

    arr[i] = callbackFn(this[i], i, this);
  }
  return arr;
};

const array1 = [1, 4, 9, 16];

// Pass a function to map
// const map1 = array1.myMap(x => x * 2);
// console.log(array1);
// console.log(map1);
// Expected output: Array [2, 8, 18, 32]


// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  const filtered_arr = []
  for(let i=0; i<this.length;i++){
    const pass_test = callbackFn(this[i],i,this)
    if (pass_test){
      filtered_arr.push(this[i])
    }
  }
  return filtered_arr
};

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.myFilter(word => word.length > 5);
// console.log(words);
// console.log(result);


// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
  for (let i = 0; i < this.length; i++){
    const pass_test = callbackFn(this[i],i,this)
    if (pass_test){
      return true;
    }
  }
  return false;
};

// console.log([2, 5, 8, 1, 4].mySome((x) => x > 10)); // false
// console.log([12, 5, 8, 1, 4].mySome((x) => x > 10)); // true

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.
  for (let i = 0; i < this.length; i++){
    const pass_test = callbackFn(this[i],i,this)
    if (!pass_test){
      return false;
    }
  }
  return true;
};

// function isBigEnough(element, index, array) {
//   return element >= 10;
// }
// console.log([12, 5, 8, 130, 44].myEvery(isBigEnough)); // false
// console.log([12, 54, 18, 130, 44].myEvery(isBigEnough)); // true

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
  let num = 0;
  for (let i = 0; i < this.length; i++){
    
    num = callbackFn(this[i],num)
    console.log(num)
  }
  return num;
};

// const array4 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array4.myReduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

console.log(sumWithInitial);
// Expected output: 10


// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
  for (let i=0;i<this.length; i++){
    if (this[i] === searchElement){
      return true
    }
  }
  return false  
};

// const array4 = [1, 2, 3];
// console.log(array4.includes(2));
// Expected output: true
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// Expected output: true
// console.log(pets.includes('at'));
// Expected output: false

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};

