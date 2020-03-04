function add(...arguments)
{
    let sum=0;
    const argu=([...arguments]);
    for(let i=0;i<argu.length;i++)
    {
     sum= sum + argu[i];
    }
    console.log(sum);
}

const result=add(2,3,5,7,5,10);
//console.log(result);
//console.log(result);