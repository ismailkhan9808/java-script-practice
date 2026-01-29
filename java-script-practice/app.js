// alert ("hello 123");

// var name="practice";
 
// var sum="3 % 10";
// console.log(sum);



// sum:
// var a="10";
// a= --a + ++a + --a + a++     ;
// console.log(a);



//  9 + 10 + 9 + 9



// var valueOne= Number (prompt("Enter the fisrt value:", 0));
// var valueTwo= Number (prompt("Enter the second value:", 0));
// var calculatedValue=Number(valueOne) + Number(valueTwo);
// console.log("The value is:" + calculatedValue)
// alert("the value is:" + calculatedValue)


// var favouritefood = prompt("what is my fav food"); 

// if(favouritefood== "birayni"){
//     alert("you're right");
// }

// else{
//     alert("you're wrong");
// }



// var userEmail= prompt("Enter your Email");
// if(userEmail.endsWith("@gmail.com") ){
//     alert("Welcome back user");
// }
// else{
//     alert("Incorrect user name or password");
// }


// var fisrtName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// if(fisrtName=== ""|| lastName===""){
// alert("First name and Last name is required!");
// }
// else{
//  var fullname=fullname+""+lastName;
//  alert("Hello, "+fullname+" !Welcome to our website.");
// }




// var cities= ["karachi","hyderabad","sukkur","lahore","Pindi","islamabad","quetta","bhawalpur" ];

// cities.splice(2, 0, "sarghoda");
// cities.splice(0, 0, "heera");
// console.log(cities);

// var cities= ["karachi", "sukkur", "rawalpindi", "saeghoda", "quetta", "dera ghazi", "lahore", "islamabad", ]

// console.log ("CITY: ",cities[0]);
// console.log ("CITY: ",cities[1]);
// console.log ("CITY: ",cities[2]);
// console.log ("CITY: ",cities[3]);
// console.log ("CITY: ",cities[4]);
// console.log ("CITY: ",cities[5]);
// console.log ("CITY: ",cities[6]);
//  console.log("==================================")


var date= new Date();
var now= new Date();

date.setDate(30);
date.setMonth(10);
date.setFullYear(2025);
date.setHours(12);
date.setMinutes(40);
date.setSeconds(3);

console.log("current Date and Time: " +date.toString());
console.log(date.getTime())
console.log(now.getTime());

var diff=now.getTime() - date.getTime();
console.log("Difference in milliseconds" + diff);











































