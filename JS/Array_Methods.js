// const Name = ['falak','nizam','rohan','Pareekh','Harkirat','Avinash','Cherry'];
const arr = [12,11,45,0,6,55,2,90,76];
// const arr2 = ['a','b'];
// const arr3 = [true,false];

//Spread Operator --->
// const num2 = [90,'Nikhil',...num,true,null];
// const num3 = [...num,...num2];
// console.log(num3)

// 'A'->65 'Z'->90 'a'->97 'z'->122 '0'->48 '9'->57

//  Methods of array ----------->>>>>>>
console.log(arr.sort((a,b)=>b-a));
// console.log(Math.min(...num));
// console.log(Math.max.apply(null,num));
// console.log(Math.min.apply(null, num));

// console.log(Name.sort());
// console.log(Name.reverse());
// console.log(Name.toSorted());
// console.log(Name.toReversed());
// console.log(Name);
// console.log(arr.at(10));
// console.log(arr.toString());
// console.log(arr.join(''));
// console.log(arr.includes(6n));
// console.log(arr.concat(arr2,arr3,9));
// console.log(arr.push(56,89));
// console.log(arr.pop());
// console.log(arr.indexOf('true'));
// console.log(arr.length);
// console.log(arr.shift());
// console.log(arr.unshift('ravi'));
// console.log(arr.slice(-4,-1));

// Array.splice(startingIndex,valuesToBeRemoveAndAdd,valuesToBeAdded);
// const newArray = arr.toSpliced(1,2,56,76);
// console.log(newArray);

// let str = 'Ramesh';
// console.log(Array.from(str));


// console.log(arr);

//Rest Operator ----->>>>>>
// function printValues(a,b,...values){
//     console.log(`${a} ${b}`)
//     console.log(values);
// }

// printValues(34,32,67,89);

// Finding Minimum and  Maximum value of an array;
// const num = [12, 11, 45, 1, 6, 55, 2, 90, 76];

// let max = -Infinity;
// let min = Infinity;
// for(let i=0;i<num.length;i++){
//     if(max<num[i]) max = num[i];
//     if(min>num[i]) min = num[i];
// };
// console.log(`max => ${max} , min = ${min}`);


// iterable methods of array (map,filter,reduce) --->

const arr2 = [1,2,3,4,5,6,7,8];

const mappedArray = arr2.map((value,index,array)=>value**2);
console.log(mappedArray);

const filteredArray = arr2.filter((value,index,array)=>(value%2 == 0));
console.log(filteredArray);

const reducedArray = arr2.reduce((a,b)=>a**b);
console.log(reducedArray);
console.log(arr2);
