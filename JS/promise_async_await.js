//                        <<--- Promise in JS  --->>

//                      "I promise to return a value"

// In JavaScript, promises are objects used to handle asynchronous operations. 
// They represent the eventual completion (or failure) of an operation 
// and allow you to work with the result of that operation once it's ready.

// A promise can be in one of three states:

//  1      Pending: The operation has not yet completed.
//  2      Fulfilled: The operation completed successfully.
//  3      Rejected: The operation failed.

// >> Once a promise is settled (fulfilled or rejected), it cannot change state.

function task1() {
  return new Promise((resolve, reject) => {
    let wakedUp = true;
    setTimeout(() => {
      if (wakedUp) resolve("WakeUp");
      else reject("fell asleep");
    }, 5000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    let getReady = true;
    setTimeout(() => {
      if (getReady) resolve("Get Ready");
      else reject("Unprepare");
    }, 3000);
  });
}

function task3() {
  return new Promise((resolve, reject) => {
    let reachedSchool = true;
    setTimeout(() => {
      if (reachedSchool) resolve("Reach School");
      else reject("Didn't reach school");
    }, 1000);
  });
}

function task4() {
  return new Promise((resolve, reject) => {
    let readyForSleep = true;
    setTimeout(() => {
      if (readyForSleep) resolve("ready to sleep");
      else reject("didn't ready");
    }, 500);
  });
}


task1().then(value=>{
  console.log(value);
  return task2();
})
.then(value=>{
  console.log(value);
  return task3();
})
.then(value=>{
  console.log(value);
  return task4();
})
.then(value=>{
  console.log(value);
})
.catch(error=>{
  console.log(error);
})

// ----------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>
// Promise.all -->  allows you to run multiple promises in parallel 
//                  and wait until all of them are resolved.

// Promise.all([task1(),task2(),task3(),task4()]).then(value=>{
// console.log(value);
// }).catch(error=>{
//   console.log(error)
// })

// ----------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>
// Promise.race --> returns the result of the first promise 
//                  that settles (fulfilled or rejected).

// Promise.race([task1(),task2(),task3(),task4()]).then(value=>{
// console.log(value);
// }).catch(error=>{
//   console.log(error)
// })

// ------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                            <<----- Async/Await ---->>>
//                  "async and await make promises easier to write"

// async --> makes a function return a Promise

// await --> makes a function wait for a Promise

// Allows you write asynchronous code in a synchronous manner

// Example ----------->>>>>>>
// async function allChoresResult() {
//   try{
//     let result1 = await task1();
//   console.log(result1);
//   let result2 = await task2();
//   console.log(result2);
//   let result3 = await task3();
//   console.log(result3);
//   let result4 = await task4();
//   console.log(result4);
//   }
//   catch(error){
//     console.error(error);
//   }
// }

// -------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// for Promise.all ------------>>>>>>>>>>>>
// async function allChoresResult() {
//   try{
//     let result = await Promise.all([task1(),task2(),task3(),task4()]);
//   console.log(result);
//   }
//   catch(error){
//     console.error(error);
//   }
// }
// allChoresResult();

// -------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// for Promise.race ------------>>>>>>>>>>>>
// async function allChoresResult() {
//   try {
//     let result = await Promise.race([task1(), task2(), task3(), task4()]);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// allChoresResult();

