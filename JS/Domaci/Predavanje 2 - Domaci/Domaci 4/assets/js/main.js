var n, m, c;
n = prompt("Unesi br");
m = 1;
while (n > 0) {
  c = n % 10;
  if (c == 0) {
    c = 1;
  }
  m *= c;
  n /= 10;
  n = Math.floor(n);
}
alert(m);
