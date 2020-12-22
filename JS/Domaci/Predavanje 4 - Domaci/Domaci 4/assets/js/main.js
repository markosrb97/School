var a=[8,4,1,1,2,1,3,1,1,1,4,1,1,2,8],n=a.length,k=0,brojac=0,d;
for(i=0;i<=n-1;i++){
    if(a[i] !=1) {
        a[k]=a[i];
        k++;
        brojac=0;
        d=0;
    }
    else if (a[i]==1) {
        brojac++;
        d=1;
    }
    if(brojac !=1) {
        a[k]=brojac;
        a[k]=a[i];
        k++;
        a[k]=1;
        a[k]=a[i];
    }
    else if(brojac ==1){
        a[k]=1;
        a[k]=a[i];
        k++;
    }
}
console.log(a);

