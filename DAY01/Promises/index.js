fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
  .catch((error)=>console.log("Unable to fetch data"));
  .finaly(()=>console.log(data));
// const mPromise = new Promise((resolve, reject) => {
//   let age = 24;

//   if (age>=18) {
//     resolve("eligble for vote");
//   } else {
//     reject("not eligble for note");
//   }
// });

// // mPromise
// //   .then(result => console.log(result))
// //   .catch(error => console.log(error));
// const f1 = async () => {
//   try {
//     const result = await mPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// run();