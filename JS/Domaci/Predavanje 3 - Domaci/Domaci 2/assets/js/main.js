var n,i,j,f;
n = prompt("Unesi broj");
f = "";
for (i=n;i>0;i--) {

    for(j=n;j>0;j--) {
        if(i==n || i==1) {
            f+="*";
        }
        else if (j==n || j==1) {
            f+="*";
        }
        else {
            f+=" ";
        }
    }
    f+="\n";
}
alert(f);