var n, brojac, max, c;
n = prompt("Unesi br");
max = 0;
while (n > 0) {
  c = n % 10;
  if (c > max) {
    max = c;
    brojac = 1;
  } else if (c == max) {
    brojac++;
  }
  n /= 10;
  n = Math.floor(n);
}

alert("Najveci broj u nizu je " + max + " i ponavlja se " + brojac + " puta");
