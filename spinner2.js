const blinker = (anim, delay) => {
  setTimeout(() => {
    process.stdout.write(`\r${anim}   `); 
  }, delay);
};
blinker('|', 100);
blinker('/', 300);
blinker('-', 500);
blinker('\\', 700);
blinker('|', 900);
