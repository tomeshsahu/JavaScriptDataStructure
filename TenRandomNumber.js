
for(let i=1;i<=10;i++)
{
    var a=Math.floor((Math.random()+1)*100);
    
let temp;
for(let j=0;j<a.length;j++)
{
    for(let k=j+1;k<a.length;k++)
    {
        if(a[j]>a[k])
        {
            temp=a[j];
            a[j]=a[k];
            a[k]=temp;   
        }
    }



console.log(a);
}
}







