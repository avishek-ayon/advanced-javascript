/**const nums=[1,1,2,3,4,8];
for(let i=0;i< nums.length;i++)
{
    //console.log(nums[i]);
    if(nums[i]>4)
    {
        break;
    }
    console.log(nums[i]);
}*/

//continue

const nums=[1,1,7,3,4,8];
for(let i=0;i< nums.length;i++)
{
    //console.log(nums[i]);
    if(nums[i]>4)
    {
        continue;
    }
    console.log(nums[i]);
}


function doSomething(x, y = 4){

    console.log(y);
    
    }
    
     
    
    doSomething(3,2);