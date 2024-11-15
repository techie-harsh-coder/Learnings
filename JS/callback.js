//                       Callback in JS

// callback = a function that is passed as an argument
//                    to another function.

//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases

//                    "Hey, when you're done, call this next."

// Do these Chores in order   ->

// i) Wake up
// ii) brush your teeth
// iii) do laundary
// iv) doing dishes/washing dishes
// v) clean the kitchen
// vi) throw the trash

// Method 1 ------------------------------>>>>>>>>>>>>>>>>>>>>>>>

// This will create a callback hell/ Pyramid of Doom .....
wakeUp(() => {
  brush(() => {
    laundary(() => {
      dishes(() => {
        clean(() => {
          trash(() => {
            console.log("All tasks are completed");
          });
        });
      });
    });
  });
});

function wakeUp(callback) {
  setTimeout(() => {
    console.log("Wake Up");
    callback();
  }, 7000);
}
function brush(callback) {
  setTimeout(() => {
    console.log("brush your teeth");
    callback();
  }, 2000);
}

function laundary(callback) {
  setTimeout(() => {
    console.log("Do laundary");
    callback();
  }, 4000);
}

function dishes(callback) {
  setTimeout(() => {
    console.log("Doing Dishes");
    callback();
  }, 5000);
}

function clean(callback) {
  setTimeout(() => {
    console.log("Clean the kitchen");
    callback();
  }, 2500);
}

function trash(callback) {
  setTimeout(() => {
    console.log("Throw the trash");
    callback();
  }, 1500);
}

// ----------------------------------------------------------------------------------------------------------->>>>>>>>
// Method 2 -->

// wakeUp(brush,laundary,dishes,clean,trash);
// function wakeUp(cb1,cb2,cb3,cb4,cb5) {
//   setTimeout(() => {
//     console.log("Wake Up");
//     cb1(cb2,cb3,cb4,cb5);
//   }, 7000);
// }
// function brush(cb1,cb2,cb3,cb4) {
//   setTimeout(() => {
//     console.log("brush your teeth");
//     cb1(cb2,cb3,cb4);
//   }, 2000);
// }

// function laundary(cb1,cb2,cb3) {
//   setTimeout(() => {
//     console.log("Do laundary");
//     cb1(cb2,cb3);
//   }, 4000);
// }

// function dishes(cb1,cb2) {
//   setTimeout(() => {
//     console.log("Doing Dishes");
//     cb1(cb2);
//   }, 5000);
// }

// function clean(cb) {
//   setTimeout(() => {
//     console.log("Clean the kitchen");
//     cb();
//   }, 2500);
// }

// function trash() {
//   setTimeout(() => {
//     console.log("Throw the trash");
    
//   }, 1500);
// }
