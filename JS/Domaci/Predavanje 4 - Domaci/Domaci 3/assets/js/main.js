var a=[1,0,1,1,2,1,4,5,1,1,1,4,4,1,1,1,1,1,1],n=a.length,brojac=0,length,maxLength=0;
for(i=0;i<=n-1;i++){
    if(a[i]==1) {
        brojac++;
        length=brojac;
    }
    else {
        brojac=0;
    }
    if (length>=maxLength) {
        maxLength=length
    }

}
console.log(maxLength);