var n, f, i;
n = prompt("Unesi br");
f = 0;
for (i = 1; i <= n; i++) {
  f = f + Math.pow(i, i + 1);
}
console.log(f);
