var a=[11,10,11,10,12,10],i,max=null,secondMax=null,n=a.length,brojac=0;
for (i=0;i<=n-1;i++) {
    if(a[i]>=max){
    max=a[i];
    }
}
for (i=0;i<=n-1;i++) {
    if(a[i]>=secondMax && a[i]<max ) {
        secondMax=a[i];
    }
}
for (i=0;i<=n-1;i++) {
    if (a[i] == secondMax) {
        brojac++;
    }
}
if (secondMax==null) {
    console.log("Nema drugog najveceg broja")
}
else {
console.log("Drugi najveci broj je " + secondMax + " i ponavlja se " + brojac)
}

/*
var a=[50,50,50],i,secondMax=0,max=0;
//max = Math.max.apply(null, a);
//secondMax = Math.min.apply(null, a);

for (i=0;i<=a.length-1;i++){
    if(a[i] > max){
        max = a[i];
    }
    if (a[i] < secondMax){
        secondMax = a[i];
    }
}
console.log("Sanity test: Array max is " + max + "\n\n");

for (i=0;i<=a.length-1;i++){
    if(a[i] > secondMax && a[i] < max){
        secondMax = a[i];
    }
}
if (max == secondMax){
    console.log("Arrray elements are all number " + max);
}
else{
    console.log("Greatest array int is " + max + " and the second greatest is " + secondMax);
}
*/