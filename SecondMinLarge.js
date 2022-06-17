let a=[3,5,6,8,2,1,9,7];

let temp;
for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {

        
    if(a[i]>a[j])
    {
        temp=a[i];
        a[i]=a[j];
        a[j]=temp;
    }
}
}
console.log("Second Smallest Number= "+a[1]);
console.log("Second Largest Number= "+a[6]);


