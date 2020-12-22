var f, i, n, d, brojac;
d = 0;
brojac = 0;
n = prompt("unesi broj");
f = 0;
for (i = 1; i <= n; i++) {
  if (d == 0) {
    f += i;
    brojac++;
    if (brojac == 2) {
      d = 1;
      brojac = 0;
    }
  } else if (d == 1) {
    f -= i;
    d = 2;
  } else {
    f *= i;
    d = 0;
  }
}
alert("resenje je" + f);
