// Normal Promise in JavaScript!

let data = new Promise((resolve, reject)=>{
        setTimeout(() => {    // Initilize of Asynchronus function
          resolve("Resolve Promise!");
       }, 1000);     
});
data.then((item)=>{
     console.log("Then block", item);
}).catch((err)=>{
  console.log("Catch block", err);
});

// Initilization of catch block...

let data1 = new Promise((resolve, reject) => {
  setTimeout(() => {    // Initilize of Asynchronus function
    reject("Resolve Promise!");
  }, 1000);
});
data1.then((item) => {
  console.log("Then block", item);
}).catch((err) => {
  console.log("Catch block", err);
});

// 2. Finally Method Promise...

let data2 = new Promise((resolve, reject) => {
  setTimeout(() => {    // Initilize of Asynchronus function
    resolve("Resolve Promise!");
  }, 1000);
});
data2.finally((item) => {
  console.log("Then block", item);
}).catch((err) => {
  console.log("Catch block", err);
});

// 3. Promise.all method...

let data3 = Promise.all([
  new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("2 second block");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1 second block");
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3 second block");
    }, 3000)
  })
]);
data3.then((item)=>{
   console.log("then block", item);
}).catch((err)=>{
   console.log("catch block", err);
});

// 4. Promise.allSettled method...

let data4 = Promise.allSettled([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("2 second block");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1 second block");
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3 second block");
    }, 3000)
  })
]);
data4.then((item) => {
  console.log("then block", item);
}).catch((err) => {
  console.log("catch block", err);
});

// 5. Promise.race method...

let data5 = Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("2 second block");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1 second block");
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3 second block");
    }, 3000)
  })
]);
data5.then((item) => {
  console.log("then block", item);
}).catch((err) => {
  console.log("catch block", err);
});

// How to define fetch 'URL' ...

let data6 = fetch('https://dummyapi.online/api/movies/1');
data6.then((item)=>{
   return item.json();
}).then((last)=>{
     console.log(last);
});