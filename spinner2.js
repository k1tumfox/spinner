let animate = ['| ', '\r/ ', '\r-- ', '\r\\ ', '\r| '];
let delay = 50;
animate.forEach(ele => {
  setTimeout(() => {
    process.stdin.write(ele);
  }, delay);
  delay += 100;
});

setTimeout(() => {
  process.stdout.write('\n');
}, 550);

//can't feed an array into process.stdout.write?..

// for (ele of animate) {
//   setTimeout(() => {
//     process.stdout.write(ele);  
//   }, delay);
//   delay += 100;
// }



//PREVIOUS
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);