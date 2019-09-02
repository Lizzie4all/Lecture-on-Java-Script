//console.log("Hello UjHub");

//var Salutation = "welcome to Ujhub University of Jos.";
//console.log (Salutation);
//Salutation = 100;
//console.log (Salutation);
var student = ["Elizabeth",
20,
true
];

//student.forEach((value)=>{
//console.log(value);
//});

var age = student.filter((value)=> value == 20);
console.log(age);
var ages =[20, 25, 30,18,14,13,22,45,50,10];
var validAges = ages.filter((age)=> age > 18);
console.log(validAges);

var me = {
    name: "Emmanuel ELizabeth John",
    age: 25,
    department: "CSC",
    level: 300,
    grade: [65, 60, 75, 80,85,90,95,100]
};

console.log (me.name);
console.log (me.grade);
console.log (me.grade[0]);

var students = [
   { name: "Emmanuel ELizabeth John",
    age: 25,
    department: "CSC",
    level: 300,
    grade: [65, 60, 75, 80,85,90,95,100]
},
{ name: "Odezogu Edwin Nnaemeka",
age: 29,
department: "Eng",
level: 500,
grade: [66, 70, 75,80,85,90,95,100]
},
{ name: "Emmanuel Nathan Joe",
age: 19,
department: "Doctor",
level: 100,
grade: [70, 74, 75, 80,85,90,95,100]
},
{ name: "Sunday Joesph Bassey",
age: 29,
department: "Physic",
level: 400,
grade: [65, 60, 75, 80,85,90,95,100]
},
{ name: "Ekeng Ruth Nsa",
age: 21,
department: "Accounting",
level: 300,
grade: [68, 72, 75, 80,85,90,95,100]
}
];

var studentA = students.filter( (student)=> student.age > 18);
console.log(studentA);

var studentA = students.filter((student)=> student.name.includes("Emmanuel"));
console.log(studentA);

studentA.forEach(s=>{
    console.log(s.name);
});