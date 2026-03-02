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


// var date= new Date();
// var now= new Date();

// date.setDate(30);
// date.setMonth(10);
// date.setFullYear(2025);
// date.setHours(12);
// date.setMinutes(40);
// date.setSeconds(3);

// console.log("current Date and Time: " +date.toString());
// console.log(date.getTime())
// console.log(now.getTime());

// var diff=now.getTime() - date.getTime();
// console.log("Difference in milliseconds" + diff);


// var fruits= ["mango", "avacado", "apple", "pieapple", "orange", "grapes", "berry", "banana"];
// var findfruit= prompt("Enter your fruit name").toLowerCase()  ;  
//  var isFound = false;

// for(var i = 0; i < fruits.length; i++ ){
//     if(findfruit === fruits[i]){
//         alert(fruits[i] + "found on position:" +(i + 1));
//        isFound = true;
//        break;
// }
// }
// if (isFound === false){
//     alert("Fruit not found !");
// }

// var FirstName= ["blueray","upchuck","lojack","gizmo","do-rang"];
// var LastName=["rzz","burp","dogbone","droop",];
// var fullname=[];

// for(var i=0; i < FirstName.length; i++){
//     for (var j = 0; j < LastName.length; j++){
//         fullname.push(FirstName[i] + LastName[j]);
//     }

// }
// console.log(fullname);


// var fruits=["apple","mango","grapes","blue berry","papaya","watermelom","banana","stawberry"];
// var i = 0;

// do{
//     if(fruits[i] === "mango") {
//         console.log(i+ 1 + ": " + fruits[i]+ "found !!");
//     }
//   console.log(i + 1 + ": " + fruits[i]);
//    i++;


// }while(i< fruits.lenght);

// var guests=["rafay topi","siraiki","arham","abdan","godzilla"];

// function greeting(name, age){
//   alert("welcome"+name+"my age"+age);
// }

// greeting("rafay topi", 19);
// greeting("siraiki", 22)


// number geussing game

// var random= Math.floor(Math.random()* 10 ) + 1
// var userInput= Number(prompt("Guess number between 1 to 10"));

// if(userInput === random){
//     alert("Congrats you guessed the right number:" + random);
// }

// else if(userInput < random){
//     alert("Too low! the correct number is :" + random);
// }
// else if(userInput > random){
//     alert("Too high! the correct number is :" + random);
// }

// var confirmresult= confirm("Do you want to play again");
// if (confirmresult){
//     location.reload();
// }

// function tellTime(){

// var now = new Date ();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// var theSec = now.getSeconds();
// var theMilli= now.getMilliseconds();

// console.log("Current Time:" + theHr + ":" + theMin + ":"+ theSec + ":"+ theMilli)


// }
// for(i=0; i < 100; i++ ){
//     tellTime();
// }


// var dayoffwk= prompt("Entre day (eg. sat, sun, mon)");

// dayoffwk=dayoffwk.charAt(0).toUpperCase()+ dayoffwk.slice(1).toLowerCase();

// switch(dayoffwk){
//     case "Sat":
//         console.log("Sat Corporate off!");
//         break;

//     case "Sun":
//         console.log("Sun Corporate off!")
//           break;
//        case "Mon":
//         console.log("Last deadlines!")
//     break;
// default:
//     console.log("Shoot me now!")


// }

// function add(num1,num2){
// var sum= num1 + num2;
// var a= 10;
// return sum
//  console.log("This line is after return statment");
// }

// var result= add(5,20);
// var result1= add(5,25);

// alert("The result is:"+ result);
// console.log("The result is:"+ result1);



// var date= new Date();
// var now= new Date ();

// date.setDate(25);
// date.setMonth(2);
// date.setFullYear(2026);
// date.setHours(3);
// date.setMinutes(34);
// date.setSeconds(4);

// alert("Current date and time:" + date.toString())
// console.log(date.getTime())
// console.log(now.getTime());

// var diff= now.getTime() - date.getTime();
// console.log("Difference in milliseconds:" + diff);


// var demiUsers = [
// {
//     email:"rafaygaffar@gmail.com",
//     password:"rafaytopi"
// },
// {
//     email:"sameeri@gmail.com",
//     password:"sameeri"
// },
// {
//     email:"marihh@gmail.com",
//     password:"marijh"
// }

// ]
//  function checkAuth(emailId, passwordId){
//       var email=document.getElementById(emailId).Value;
//       var password=document.getElementById(passwordId).Value;
//       console.log(email);
//       console.log(password);
 
 
//      for(var i = 0 ; i < demiUsers,length; i++){
//         if(email == demiUsers[i].email && password == demiUsers[i],password){
//             alert("login successfully!");
//             break;
//         }
//      }
 
 
//     }



function toggleImage(){
    var image= document.getElementById('image')
    var button= document.getElementById('image-visibility-btn')

    if(image.className === 'hidden'){
      button.innerText = 'Make Invisible'
      image.className = 'visible'
    }
    else{
        button.innerText= 'Make visible'
        image.className= 'hidden'
    }
}

var randomImages=[
      'https://media.wired.com/photos/5ceeed5b0bdd96c34c6174a3/16:9/w_2400,h_1350,c_limit/01_Ferrari_SF90_03.jpg',

    'https://www.amalgamcollection.com/products/ferrari-sf90-stradale?srsltid=AfmBOorFpM6l2bZ1OnPlg4o2Lkci3_qQocH6CLLUXeviAVEBjI1qkKJg',

    'https://imageio.forbes.com/specials-images/imageserve/6552427075f8cabe3a24d6f1/The-Ferrari-SF90-Stradale---/0x0.jpg?height=476&width=480&fit=bounds',
]

function swapPic(){
    var image = document.getElementById('image')
    var randomIndex= Math.floor(Math.random() * randomImages.length)

    console.log('Swap Pic Called!', randomImages[randomIndex], randomIndex)
    image.src= randomImages[randomIndex]
}

function makeBig(){
 document.getElementById('box').className += "big";
}












































