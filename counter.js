//let a = "5"
//let b = 5
//const c = a - b;
//const d = c;
//console.log(d)



//console.log(typeof[])



// let user = {name : "Haree",age:21}
// const {name}=user
// console.log(name)





// console.log("a")

// setTimeout(() => {
//     console.log("b");
// }, 0);


// Promise.resolve().then(() => {
//     console.log("c");
// });


// console.log("d");


// setTimeout(() =>{
//     console.log("e");
// }, 0);


// Promise.resolve().then(() => {
//     console.log("f");
// })

//map method
// let name = ["john", "jane", "doe"]
// const newName = name.map((name, index)=>{
//     return `index of this name ${name} = ${index}`
// })

// console.log(newName)
// console.log(name)


// filter method
// let number = [1,2,3,4,5]
// const num = number.filter((number,index)=>number%2===0)
// console.log(num)
// console.log(number)


//find and findIndex method
// let user = [{name : "Haree", age:21, email: "haree@example.com", id:1}, 
//     {name : "harish", age:22, email: "harish@example.com", id:2},
// {name : "hari", id :3},{name : "balaji", id :4},{name : "parthiban", id :5},{name : "karthik", id :6},{name : "sathish", id :7},{name : "kumar", id :8},{name : "karthikeyan", id :9},{name : "siva", id :10}];
// const u = user.find(user => user.age===21);
// console.log(u.name);
// const u1 = user.find(user => user.id===1);
// console.log(u1.email);
// const u2 = user.find(user => user.name==="harish");
// console.log(u2.age);
// const i=user.findIndex(user => user.id===7);
// console.log(i);
// const i1=user.findIndex(user => user.id===10);
// console.log(i1);
// const i2=user.findIndex(user => user.id===11);
// console.log(i2);


//reduce method
// let name = [200, 300, 500];
// let sum = ["a", "b", "c", "b"];
// const u = name.reduce((acc, n)=> acc+n, 0);
// console.log(u);
// const f = sum.reduce((acc, n)=> acc+n,);
// console.log(f);