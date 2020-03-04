const Student=[
    {id:2,name:"avishek"},
    {id:3,name:"ayon"},
    {id:4,name:"ami"},
    {id:5,name:"anirban"}

]
// const output=[];

// for(let i=0;i<Student.length;i++)
// {
//     const give= Student[i];
//     output.push(give);
// }
// console.log(output);

// const names=Student.map(s=>s.name)
// console.log(names);

const ids=Student.map(s=>s.id)
console.log(ids);


// const names=Student.filter(s=>s.id>2)
// console.log(names);

const names=Student.find(s=>s.id>2)
console.log(names);