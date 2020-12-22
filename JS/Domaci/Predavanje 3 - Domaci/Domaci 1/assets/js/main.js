var n,i,j,f;
n = prompt("Unesi broj");
f = "";
for (i=n;i>0;i--) {
    for (j=1;j<=i;j++) {
        f += '* ';
        }
        f+='\n'
}
alert (f);