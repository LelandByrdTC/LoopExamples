let base = parseInt(
  prompt("What number do you want to a multiplication table of?")
);
let range = parseInt(prompt("What number should I stop at?"));

if (!base) {
  base = 1;
}

let i = 1;

while (i <= range) {
  console.log(`${base} x ${i} = ${base * i}`);
  i++;
}