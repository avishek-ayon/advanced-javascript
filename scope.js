const bonus=20;

// function add(num1,num2,bonus)
function add(num1,num2)
{
    const sum=num1+num2+bonus;
    //console.log(sum);
   /**  if(sum>10)
    {
        let mood="crisy";
        mood="moddy"
        console.log(mood);
    }
    console.log(mood);
    */

   if(sum>10)
   {
       var mood="crisy";
       mood="moddy"
       console.log(mood);
   }
   console.log(mood);
   console.log(day);
   var day="friday";
   

    return sum;
  
}
const result=add(3,7);
// const result=add(3,7,bonus);


console.log(result);