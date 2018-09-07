/*jslint plusplus: true evil: true */
/*global console, alert, prompt*/


 //Sytax// 
/*
// document.write("<p>Hello From test.js External File</p>");
// alert("Hello From Head");  Going To Stop Every THing I write becouse Of Alert in Head
// document.getElementById("test").innerHTML = "Helow Java Script From Js File";
*/

//=================================================================================================================//
// Ex. For variable And Assignment Operator // ==============

/*
var x = 100,
    y = 50,
    z = 200;

document.getElementById("test").innerHTML = (z + y);
*/
//========================//
/*
var mainPrice = 500,
    
    mySmallDiscount = 50,
    
    myMediumDiscount = 100,
    
    myBigDiscount = 250;
    
document.getElementById("price").innerHTML = mainPrice;

document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount;

document.getElementById("product2").innerHTML = mainPrice * myMediumDiscount;

document.getElementById("product3").innerHTML = mainPrice + myBigDiscount;
*/




//=================================================================================================================//
// Ex. For If Condition Trou & False // ==============

/*
var hasDiscount = false; // check if the product has discount or no 

if (hasDiscount === true) {
    
    var mainPrice = 350;
} else {
    
    var mainPrice = 450;
}

document.getElementById("price").innerHTML = mainPrice;
*/



//=================================================================================================================//
// Ex. For If Condition // ==============

/*
var yourAge = prompt("What Is Your Age?");

if (yourAge < 18) {
    
    document.getElementById("test").innerHTML = "Sorry Your Age Is: " + yourAge + " You Are Not Allowed Here";
    
} else if (yourAge == 18) {
    
    document.getElementById("test").innerHTML = "Nice Your Age Is: " + yourAge + " You Are Welcome To Start With Us ";
    
} else {
    
    document.getElementById("test").innerHTML = "Hello Your Age Is: " + yourAge + " You Are Not Allowed Here";
    
}
*/

//========================//

/*
var myPrice = 40;

if (myPrice > 50) {
    
    alert("Sorry The Price Is " + myPrice + " All I Have Is 50");
} else {
    
    alert("Good The Price Is " + myPrice + " And I Have 50");
}
*/

//=================================================================================================================//
// Ex. For  Conditional Operators // ============== ( < , > , == , === , <= , >= , ! , != , !== , && , || )

/*
var z = 50;

if (z >= 10) { // Try Them Here
    
    alert("Good");
    
} else {
    
    alert("Bad");
}
*/


//=================================================================================================================//
// Ex. For  Function // ============== ********************************** Function  ********************************

/*
function sayHi() {
    
    "use strict";
    
    alert("Hello From Inside Function");
    
    
}
sayHi();
*/

//========================//

/*
function sayHi() { //I Call The Function From HTML // <button onclick="sayHi()">Button To Call Function</button> //
    
    "use strict";
    
    
    alert("Hello From Inside Function");
    
    
}
*/

//========================//

/*
function sayHi() {
    
    "use strict";
    
    var myName = "OMAR";
    
    if (myName === "HAMAM") {
        
        alert("Hello " + myName + " From Inside Function");
        
        
    } else {
        
        alert("Hello " + myName + " From Inside Function There Is WRONG On Name");
        
    }
 
}
sayHi();
*/    

// Tell Here Basic Function 
//========================//

//====  Here Start Return Function  ====//
/*
function myInfo() {
    
    "use strict";
    
    var myName = "HAMAM",
        
        myAge = 34;
    
    return myName;  // And I Can Use Arthmatic Operators In Return On Ex Down //
    
    
}

var myFunction = myInfo();

document.getElementById("test").innerHTML = myFunction;
*/

//========================//

/*
function myInfo() {
    
    "use strict";
    
    var myName = "HAMAM",
        
        myAge = 34;
    
    return 30 + 34;  // And I Can Use Arthmatic Operators In Return //
    
    
}

var myFunction = myInfo();

document.getElementById("test").innerHTML = myFunction;
*/

//========================//

/*
function myAgeInDays() {    // Calcolate Age Function In Days // 
    
    "use strict";
    
    var myAge = 34;
    
    return myAge * 365;  
    
    
}

var ageCalc = myAgeInDays();

document.getElementById("test").innerHTML = "Your Age In Days = " + ageCalc + " Days";
*/

//========================//
//========================//

/*
function myAgeInHours() {    // Calcolate Age Function In Hours // 
    
    "use strict";
    
    var myAge = 34;
    
    return myAge * 365 * 24;  
    
}

document.getElementById("test").innerHTML = "Your Age In Days = " + myAgeInHours() + " Days";
*/

//========================//

/*
function myAgeInHours() {    // Calcolate Age Function In Hours  Ways2 // 
    
    "use strict";
    
    var myAge = 34;
    
    return myAge * 365 * 24;  
    
}

var ageCalcH = myAgeInHours();

document.getElementById("test").innerHTML = "Your Age In Days = " + ageCalcH + " Days";
*/

//========================//

/*
function myAgeInDays(myAge) {    // Calcolate Age Function In Days With (((Parameters)))  // ----------------
    
    "use strict";
    
    return myAge * 365;     
    
}

var ageCalcD = myAgeInDays(34);

document.getElementById("test").innerHTML = "Your Age In Days = " + ageCalcD + " Days";

*/

//========================//

/*
function myInfo(myName, myAge, myCountry, MyStatus) {    // info Function In Days With (((Parameters)))  // ----------------
    
    "use strict";
    
    return "<br>" + myName + "<br>" + myAge + "<br>" + myCountry + "<br>" + MyStatus;     
    
}

var allInfo = myInfo("HAMAM" , 34 , "Syria" , "Marridg" );

document.getElementById("test").innerHTML = "My All Info " + allInfo;
*/

//========================//

/*
function sayHello(theName) {    // Function With (((Parameters)))   And Input // ----------------//////
    
    "use strict";
    
    return "Hello " + theName + " How Are You Today";     
    
}

var theName = prompt("Add Your Name"); 

document.getElementById("test").innerHTML = sayHello(theName);
*/

//========================//

/*
function sayHello(firstName , secondName) {    //  Function With (((Parameters)))  // ----------------
    
    "use strict";
    
    return "Hello " + firstName + " " + secondName + " How Are You Today";     
    
}

document.getElementById("test").innerHTML = sayHello("HAMAM", "HAMOU");
*/

//========================//

/*
function makeDiscount(productPrice) {    //  Function With (((Parameters))) And Arthmatic // ----------------
    
    "use strict";
    
    return productPrice - 100;                           
    
}

document.getElementById("test").innerHTML = makeDiscount(1000);
*/

//========================//

/*
function makeDiscount(price) {    //  Function With (((Parameters))) And Arthmatic2 // ----------------
    
    "use strict";
    
    var discount = 200;
    
    return price - discount;                           
    
}

document.getElementById("test").innerHTML = makeDiscount(500);
*/

//========================//

/*
function calcDays(age) {    //  Function With (((Parameters))) And Arthmatic3 // ----------------
    
    "use strict";
    
    var year = 365;
    
    return age * year;                           
    
}

// var dynamicAge = prompt("What Is Your Age ?");

document.getElementById("test").innerHTML = calcDays(prompt("What Is Your Age ?"));  // Bettar If I Use Prompt In Variabel 
*/

//========================//

/*
function calcNumber(a , b , c) {    //  Function With (((Parameters))) And Arthmatic4 // ----------------
    
    "use strict";
    
    return (a + b) / c;                           
    
}

document.getElementById("test").innerHTML = calcNumber(10,350,10);
*/

//=================================================================================================================//
// Ex. For  Function Advanced And Self Invoke // ==============

// Self Invoke // //==============//
// # Syntax # //
/*
(function sayWelcome() {
    "use strict";
    
    alert("welcome To My Website");
    
})();
*/

//========================//

/*
function convertUsdToSverige(amount) { // Extcaing krona To Dollar //=====// 
    
    "use strict";
    
    var result = amount * 8.17;
    
    return alert(result);
    
}
convertUsdToSverige(100);
*/

//========================//

/*
(function convertUsdToSverige() { // Ex. Price comming From Database 100 // 
    
    "use strict";
    
    var amount = document.getElementById("price").innerHTML;   // 100
    
    alert(amount * 8.17);
    
} ());
*/

//========================//

/*
function convertUsdToSverige() { // Ex. Price comming From Database 100 // 
    
    "use strict";
    
    var amount = document.getElementById("dollar").value;   // Value Is Comming From Input //
    
    console.log(amount);
    
} 
*/

//========================//

/*
function convertUsdToSverige() { // Ex. Price comming From Database 100 // 
    
    "use strict";
    
    var amount = document.getElementById("dollar").value,   // Value Is Comming From Input //
    
        result = amount * 8.17;
    
    console.log(amount + "$ Is Worth " + result + " Krona");
      
} 
*/

//========================//

/*
function convertUsdToSverige() { // Ex. Price comming From Database 100 // 
    
    "use strict";
    
    var amount = document.getElementById("dollar").value,   // Value Is Comming From Input //
    
        result = amount * 8.17,
        
        massageJs = document.getElementById("massage");


    
    massageJs.innerHTML = amount + "$ Is Worth " + result + " Krona";
    
}
*/

//========================//

/*
function convertUsdToSverige() { // Ex. Price comming From Database 100 // 
    
    "use strict";
    
    var amount = document.getElementById("dollar").value,   // Value Is Comming From Input //
    
        result = amount * 8.17,
        
        massageJs = document.getElementById("massage");
    
    
    if (amount === "") { // "" This Mean Embty Value //
        
             massageJs.innerHTML = "This Field Can't Be Embty";
        
        } else if (isNaN(amount)) {
            
            
             massageJs.innerHTML = "This Field Accept Numbers Only";
            
            
        } else if (amount === "0") {
            
            
             massageJs.innerHTML = "The Value Must Not Be Zero (0)";
            
            
        } else if (amount < 0) {
            
            
             massageJs.innerHTML = "The Value Must Be Larger Than Zero (0) Not Negative Number";
            
            
        } else if (amount > 1000000000) {
            
            
             massageJs.innerHTML = "The Value Must Be Not Larger Than 1Meliar";
            
            
        } else {
            
             massageJs.innerHTML = amount + "$ Is Worth " + result + " Krona";
            
        }
      
}
*/


//=================================================================================================================//
// Ex. For   Switch , Case , Break // ==============


// Syntax //
/*        
switch (Expression) {

case x:
    Code To Exceute;
    break;
    
    
case x:
    Code To Exceute;
    break;
    
    
case x:
    Code To Exceute;
    break;
    
    
case x:
    Code To Exceute;
    break;


default:
    Code To Exceute;
    break;
    
}
*/

//========================//

/*
var season = prompt("What Is The Best Season For You");


switch (season) {
        
        
    case "Winter":  // Must I Write First Letter Capital // 
        
        alert("Winter Is Cold");
        
        break;
    
    case "Summar":  // Must I Write First Letter Capital // 
        
        alert("Summar Is Hot");
        
        break;    
        
    case "Autumn":  // Must I Write First Letter Capital // 
        
        alert("Autumn Is Hard");
        
        break; 
        
    case "Spring":  // Must I Write First Letter Capital // 
        
        alert("Spring Is Wonderfull");
        
        break; 
        
    default:   
        
        alert("You Didn't Write Any Season Try Your Favoret");
        
        break; 
        
}
*/

//========================//

/*
var color = prompt("What Is The Best Color For You");

switch (color) {
        
        
    case "Red":  // Must I Write First Letter Capital // 
        
        alert("Red Is Same Your Blud");
        
        break;
    
    case "Blue":  // Must I Write First Letter Capital // 
        
        alert("Blue Is Same Skay");
        
        break;    
        
    case "Yellow":  // Must I Write First Letter Capital // 
        
        alert("Yellow Is Same Sun");
        
        break; 
        
    case "Black":  // Must I Write First Letter Capital // 
    case "Wihet":  // Must I Write First Letter Capital // 
    case "Brwon":  // Must I Write First Letter Capital //
        
        alert("Black And Wihet Is Basic Color");
        
        break; 
        
    default:   
        
        alert("You Didn't Write Any Color Try Your Favoret");
        
        break; 
        
}
*/



//=================================================================================================================//
// Ex. For Scope (Global and Local)  // ============== Part 1

/*
var myName = "HAMAM";  // Global Scope //

console.log(myName);   // Show Global Scope "HAMAM"//   // Show 1 In Log //

function myNameFunc() {
    
    "use strict";
    
    var myName = "HAMOU"; // Local Scope //
    
    console.log(myName);  // Show Local Scope "HAMOU" //
    
}

console.log(myName);   // Show Global Scope "HAMAM"//   // Show 2 In Log //


myNameFunc();                                           // Func Show 3 In Log //


console.log(myName);   // Show Global Scope "HAMAM"//   // Show 4 In Log //
*/

//========================//

/*
var myName = "HAMAM";  // Global Scope //

console.log(myName);   // Show Global Scope "HAMAM"//   // Show 1 In Log //

function myNameFunc() {
    
    "use strict";
    
    // If I Write The Same Name Of The Global Var But Without (Var) Will Change The Value Of The Global Var Just Inside The Function  //
    myName = "HAMOU"; 
    
    console.log(myName);  // Show Global Scope But Change The Value To "HAMOU" //
    
}


myNameFunc();  
*/

//========================//
// Func Show 2 In Log With A New Value  //


/*
var x = 1;

function changeXto2() {
    "use strict";
    
     x = 2;
    
    
}

function changeXto3() {
    "use strict";
    
    var x = 3;
    
    
}

console.log(x);

changeXto2();

console.log(x);

changeXto3();

console.log(x);
*/

//========================//
// Ex. For Scope (Global and Local)  // ============== Part 2

/*
var x = 1;


function testFunc() {
    
    "use strict";
    
    // var x = 5;  // Local Scop //
    x = 5;  //Change value Of Global Scop In Side Function Cuz: Without Var//
    
    var calc = x + 2; //  7
    
    console.log(calc); 
    
}

testFunc();

console.log(x + 2);
*/

//========================//

/*
var x = 1;

// Scope A
// X Is Accessed From EveryWhere

function testParent() {
    
    "use strict";
    
// Scope B
// X Is Accessed From EveryWhere In Side Parent Function Even InSide Child To  
    
     var x = 5;   
    
    
    function testChild() {
        
// Scope C
// X Is Accessed Just In Side Child Func // // Even I Cant In Parent Func Su Just Child //
        
        var x = 100;
        var calc = x + 2;
        
        console.log(calc); // up Here //


    }
    
    return testChild();
    
   // console.log(calc);  // Will Not Read Calc Because It Writting In Chaild Not In Parent Func So Should I Writed In Chaild Func Up //
    
}

testParent();

console.log(x + 2);
*/

//========================//

/*
function testParent() { //Parent
    
   "use strict";
    
       function testChild() {  //Child
        
           
               function testGrand() { //Grand

                     var myName = "Hamam"; // Try It With The Var In Side All Function One By One 
                   
                     console.log(myName); // Try It With The Var In Side All Function One By One 


               } //Grand
           


       } //Child
    
    
} //Parent
testParent();
*/

//=================================================================================================================//
// Ex. For  Events Explain + onload, onclick, ondblclick // ==============

// <div id="test">This Is Test</div> In HTML

/*
function changeTextHtml() {
    
    document.getElementById("test").innerHTML = "Text From JavaScript";
    
}

// Use The Function In Button In HTML With Events OnClick // //<button onclick="changeTextHtml()">Change</button> //

// I Can Use More Than One Events On One Button
*/

//=================================================================================================================//
// Ex. For Events Explain + onkeydown, onkeyup , onkeypress  // ==============

/*
var myInput = document.getElementById("input"),
    
    myDiv = document.getElementById("div");

//console.log(myInput);

//console.log(myDiv);

function calcUsd() {
    "use strict";
    
    
   myDiv.innerHTML = myInput.value * 8.17;
       
}
*/

//========================//
// Element.Event = Function

/*
var myInput = document.getElementById("input"),
    
    myDiv = document.getElementById("div"),
    
    myButton = document.getElementById("button");

// Element.Event = Function () { // Code }

myButton.onclick = function () {
    "use strict";
    
    
   myDiv.innerHTML = myInput.value * 8.17;
       
};
*/

//========================//
// Element.Event = Function // Without Button .

/*
var myInput = document.getElementById("input"),
    
    myDiv = document.getElementById("div");

myInput.onkeyup = function () {
    
    "use strict";
    
   myDiv.innerHTML = myInput.value * 8.17;
       
};
*/

/*
var myInput = document.getElementById("input"),
    
    myDiv = document.getElementById("div");

myInput.onkeydown = function () {
    
    "use strict";
    
   myDiv.innerHTML = myInput.value * 8.17;
       
};
*/

/*
var myInput = document.getElementById("input"),
    
    myDiv = document.getElementById("div");

myInput.onkeypress = function () {
    
    "use strict";
    
   myDiv.innerHTML = myInput.value * 8.17;
       
};
*/


//=================================================================================================================//
// Ex. For  onmouseover, onmouseout, onchange // ============== Events

// onmouseover, onmouseout // 
//========================//
/*
var myDiv = document.getElementById("div");

myDiv.onmouseover = function () {
  
    "use strict";
    
    myDiv.innerHTML = "You Hover On Me";
    
};
*/
//========================//
/*
var myDiv = document.getElementById("div");

myDiv.onmouseout = function () {
  
    "use strict";
    
    myDiv.innerHTML = "You Hover On Me";
    
};
*/
//========================//
// onchange // 
//==========//

/*
var myInput = document.getElementById("input"),
    
    myDiv = document.getElementById("div"),
    
    myCurrency = document.getElementById("currency");


myCurrency.onchange = function () {
  
    "use strict";
    
    myDiv.innerHTML = "Worth " + myInput.value * myCurrency.value + " In Svenska Krona";
    
};
*/




//=================================================================================================================//
// Ex. For Array   // ============== Array Intro

//1- Constracted Array
//========================//
/*
var friendOne = "Tarek",
    
    friendTwo = "Omar",
    
    friendThree = "Khaled",
    
    friendFour = "Salma",
    
    friendFive = "Rouaa";

var friends = new Array();

friends[0] = "Tarek";
friends[1] = "Omar";
friends[2] = "Kaled";
friends[3] = "Salma";
friends[4] = "Rouaa";


console.log(friends);
*/


/*
var friendOne = "Tarek",
    
    friendTwo = "Omar",
    
    friendThree = "Khaled",
    
    friendFour = "Salma",
    
    friendFive = "Rouaa";


var friends = new Array("Tarek", "Omar", "Khaled", "Salma", "Rouaa");

console.log(friends);
*/


/*
var friendOne = "Tarek",
    
    friendTwo = "Omar",
    
    friendThree = "Khaled",
    
    friendFour = "Salma",
    
    friendFive = "Rouaa";

var friends = new Array(
    
                             "Tarek", 
                             
                             "Omar", 
    
                             "Khaled", 
              
                             "Salma",
             
                             "Rouaa"

                       );

console.log(friends);
*/

//2- Literal Array
//========================//

/*
var friendOne = "Tarek",
    
    friendTwo = "Omar",
    
    friendThree = "Khaled",
    
    friendFour = "Salma",
    
    friendFive = "Rouaa";

var friends =  [];

friends[0] = "Tarek";

friends[1] = "Omar";

friends[2] = "Kaled";

friends[3] = "Salma";

friends[4] = "Rouaa";

console.log(friends);
*/

//========================================================================//



// ********************* Array ************************ //

//========================================================================///////////////////////////////////
//  ( The Best And Right Way) Literal Way // ***************** All Elements
//========================================================================//////////////////////////////////


// /////////////////////////////////////////////////////////////////////
// Syntax // Start Nummber In Array From Zero 0

// var arrayName = ["Element1", "Element2", "Element3", "Element4"];
// /////////////////////////////////////////////////////////////////////

/*
var friendOne = "Tarek",
    
    friendTwo = "Omar",
    
    friendThree = "Khaled",
    
    friendFour = "Salma",
    
    friendFive = "Rouaa";

var friends =  ["Tarek", "Omar", "Khaled", "Salma", "Rouaa"];

console.log(friends);
*/


// Call Special Element //

/*
var friendOne = "Tarek",
    
    friendTwo = "Omar",
    
    friendThree = "Khaled",
    
    friendFour = "Salma",
    
    friendFive = "Rouaa";

var friends =  ["Tarek", "Omar", "Khaled", "Salma", "Rouaa"];

console.log(friends[0]);
*/

//========================================================================//
// Check // isArray()


// Try Not Array Variable //
/* 
var friends =  ["Tarek", "Omar", "Khaled", "Salma", "Rouaa"];

if (Array.isArray(friendOne)) {
    
    console.log("Good This Is Array");
    
} else {
    
    console.log("No This Is Not Array");
    
}
*/


// Try Array Variable //

/*
var friends =  ["Tarek", "Omar", "Khaled", "Salma", "Rouaa"];

if (Array.isArray(friends)) {
    
    console.log("Good This Is Array");
    
} else {
    
    console.log("No This Is Not Array");
    
}
*/

// Check // constructor
//========================//

/*
var friends =  ["Tarek", "Omar", "Khaled", "Salma", "Rouaa"];

if (friends.constructor === Array) {
    
    console.log("Good This Is Array");
    
} else {
    
    console.log("No This Is Not Array");
    
}
*/


//=================================================================================================================//
// Ex. For  Array - Get/Set    Array Length// ==============


// Length In Index // Get
/*
var myVariable = "Hello Javascript";

console.log(myVariable.length);
*/


// Length In Array // Get
/*
var friends =  ["Tarek", "Omar", "Khaled", "Salma", "Rouaa"];

console.log(friends.length);
*/


// Length In Array // Set
/*
var friends =  ["Tarek", "Omar", "Khaled", "Salma", "Rouaa"];

console.log(friends.length);

friends.length = 2;

console.log(friends);
*/


//=================================================================================================================//
// Ex. For Array - Convert To String  // ============== toString(); , toLocaleString(); , Join();

// toString(); //
/*
var friends = [ 
                "Tarek", 
                "Omar", 
                "Khaled",
                "Salma", 
                "Rouaa"
               ];

console.log(friends);  // Just To Check The Deferant Before And After Converting

friends = friends.toString();

console.log(friends);
*/

// toLocaleString(); //
/*
var friends = [ 
                "Tarek", 
                "Omar", 
                "Khaled",
                "Salma", 
                "Rouaa"
               ];

friends = friends.toLocaleString();

console.log(friends);
*/

//Deferant Between toString(); And toLocaleString(); ===== With Date //
//===================================================================//

// toString(); ===== With Date //
/*
var myDate = new Date(),
    
    myString = myDate.toString();

console.log(myDate);

console.log(myString);
*/


// toLocaleString(); ===== With Date //
/*
var myDate = new Date(),
    
    myString = myDate.toLocaleString();

console.log(myDate);

console.log(myString);
*/


// join(); //
/*
var friends = [ 
                "Tarek", 
                "Omar", 
                "Khaled",
                "Salma", 
                "Rouaa"
               ];
friends = friends.join();

console.log(friends);
*/

/*
var friends = [ 
                "Tarek", 
                "Omar", 
                "Khaled",
                "Salma", 
                "Rouaa"
               ];
friends = friends.join("-");

console.log(friends);
*/

/*
var friends = [ 
                "Tarek", 
                "Omar", 
                "Khaled",
                "Salma", 
                "Rouaa"
               ];
friends = friends.join(" And ");

console.log(friends);
*/

//=================================================================================================================//
// Ex. For Array Add Items  // ============== ArrayName.length , ArrayName.push, ArrayName.unshift, ArrayName.splice

// By Chacking a Number Of The Array And Knowing The Count to Add New Item (Length) //
/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa"    // number[4]
               ];

console.log(friends);

console.log(friends.length); // 5 Items Before Adding

friends[5] = "Hamam";    // Adding New Item

console.log(friends);

console.log(friends.length); // 6  Items After Adding
*/


// Here To Use The Length To Add New Items By Useing This Function (ArrayName.Length) //
/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa"    // number[4]
               ];

console.log(friends);

console.log(friends.length); // 5 Items Before Adding

friends[friends.length] = "Hamam";    // Adding New Item

console.log(friends);

console.log(friends.length); // 6  Items After Adding
*/

// Adding By Useing posh //     // Adding As Last Item //
/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa"    // number[4]
               ];

console.log(friends);

friends.push("Hamam");

console.log(friends);
*/

/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa"    // number[4]
               ];

console.log(friends);

console.log(friends.length); // 5 Items Before Adding

friends.push("Hamam");

console.log(friends);

console.log(friends.length); // 6  Items After Adding
*/


// Adding By Useing unshift //   // Adding As First Item //
/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa"    // number[4]
               ];

console.log(friends);

console.log(friends.length); // 5 Items Before Adding

friends.unshift("Hamam");

console.log(friends);

console.log(friends.length); // 6  Items After Adding
*/


// Adding By Useing splice //   // Syntax:   arrayName.splice(index, How many, Item1, Item2, Item3) //
/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa"    // number[4]
               ];

console.log(friends);

console.log(friends.length); // 5 Items Before Adding

friends.splice(3,2);

console.log(friends);

console.log(friends.length);
*/

/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

console.log(friends.length); // 5 Items Before Adding

friends.splice(3,2);

console.log(friends);

console.log(friends.length);
*/

/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

console.log(friends.length); // 5 Items Before Adding

friends.splice(3,0,"Ziad","Talia");

console.log(friends);

console.log(friends.length);
*/

//=================================================================================================================//
// Ex. For Array Remove Items // ============== splice, pop, shift

/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

console.log(friends.length); // 5 Items Before Adding

friends.splice(2,4);

console.log(friends);

console.log(friends.length);
*/

// pop(); //  Will Remove Last Item Always 
/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

console.log(friends.length); // 5 Items Before Adding

friends.pop();

console.log(friends);

console.log(friends.length);
*/

//  To Show The Last Items i Remove it By pop I use Variable  
/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

var lastItem = friends.pop();

console.log(lastItem);

console.log(friends.length);

console.log(friends);

friends.pop();

console.log(friends);

console.log(friends.length);
*/

// shift(); //  Will Remove first Item Always 
/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

friends.shift();

console.log(friends);
*/

//=================================================================================================================//
// Ex. For Array Sort Items  // ============== sort, reverse
/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

friends.sort();

console.log(friends);
*/

/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

friends.reverse();

console.log(friends);
*/

/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

friends.sort();

console.log(friends);

friends.reverse();

console.log(friends);
*/

//=================================================================================================================//
// Ex. For Array Combine And Slice // ============== slice(); , concat();


// Slice // slice();
/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

var mySlicedArray = friends.slice(2,5);

console.log(mySlicedArray);
*/

/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

var mySlicedArray = friends.slice(-5,-2);

console.log(mySlicedArray);
*/


// Combine // concat();

/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

var workFriends = [
    
    "Emad",
    "Mohamad",
    "Osama"
];

var allFriends = friends.concat(workFriends);

console.log(allFriends);
*/

/*
var friends = [ 
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

console.log(friends);

var workFriends = [
    
    "Emad",
    "Mohamad",
    "Osama"
];

var scoolFriends = [
    
    "Rami",
    "Angsom",
    "mosa"
];

var allFriends = friends.concat(workFriends,scoolFriends);

console.log(allFriends);
*/

//=================================================================================================================//
// Ex. For Array Search // ============== indexOf(); , 

// indexOf(); //
/*
var friends = [            // Index //
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

var specialFriends = friends.indexOf("Hamam");

console.log(specialFriends);

console.log(friends[5]);
*/

/*
var friends = [            // Index //
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

var specialFriends = friends.indexOf("Hamam");

console.log(specialFriends);

console.log(friends[specialFriends]);
*/


// Useing The Search To Keep Value Inner Html // <div id="all"></div> and <div id="special"></div> //
//=================================================================================================//

// Syntax: Syntax: indexOf("Value To Search");
/*
var friends = [            // Index //
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

var specialFriends = friends.indexOf("Hamam");

console.log(specialFriends);

console.log(friends[specialFriends]);

document.getElementById("all").innerHTML = "My Friends Are: " + friends;

document.getElementById("special").innerHTML = "My Special Friends Are: " + "<span style='color: #F00'>" + friends[specialFriends] + "</span>";
*/

// Way To Start Searching From // Syntax: indexOf("Value To Search", Starting Index); 
/*
var friends = [            // Index //
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

var specialFriends = friends.indexOf("Hamam", 3);

console.log(specialFriends);

console.log(friends[specialFriends]);

document.getElementById("all").innerHTML = "My Friends Are: " + friends;

document.getElementById("special").innerHTML = "My Special Friends Are: " + "<span style='color: #F00'>" + friends[specialFriends] + "</span>";
*/


// if there is more than item in array in same name of searching will choese just one and will be the first item in way of the searching //
/*
var friends = [            // Index //
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Hamam",
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

var specialFriends = friends.indexOf("Hamam", 1);

console.log(specialFriends);

console.log(friends[specialFriends]);

document.getElementById("all").innerHTML = "My Friends Are: " + friends;

document.getElementById("special").innerHTML = "My Special Friends Are: " + "<span style='color: #F00'>" + friends[specialFriends] + "</span>";
*/


// To search from The last To The first //
/*
var friends = [            // Index //
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

var specialFriends = friends.lastIndexOf("Hamam");

console.log(specialFriends);

console.log(friends[specialFriends]);

document.getElementById("all").innerHTML = "My Friends Are: " + friends;

document.getElementById("special").innerHTML = "My Special Friends Are: " + "<span style='color: #F00'>" + friends[specialFriends] + "</span>";
*/

/*
var friends = [            // Index //
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

var specialFriends = friends.lastIndexOf("Hamam", 5); // if i Use less Than 5 Will give me undefiend because starting from end and hamam is index No4

console.log(specialFriends);

console.log(friends[specialFriends]);

document.getElementById("all").innerHTML = "My Friends Are: " + friends;

document.getElementById("special").innerHTML = "My Special Friends Are: " + "<span style='color: #F00'>" + friends[specialFriends] + "</span>";
*/


// if there is more than item in array in same name of searching will choese just one and will be the first item in way of the searching // 
/*
var friends = [ "Hamam",   // Index //
                "Tarek",   // number[0]
                "Omar",    // number[1]
                "Khaled",  // number[2]
                "Salma",   // number[3]
                "Rouaa",   // number[4]
                "Hamam",   // number[5]
                "Alaa"     // number[6]
               ];

var specialFriends = friends.lastIndexOf("Hamam");

console.log(specialFriends);

console.log(friends[specialFriends]);

document.getElementById("all").innerHTML = "My Friends Are: " + friends;

document.getElementById("special").innerHTML = "My Special Friends Are: " + "<span style='color: #F00'>" + friends[specialFriends] + "</span>";
*/

//=================================================================================================================//
//=================================================================================================================//
// Ex. For All Array Methods // ============== 
//=================================================================================================================//
//=================================================================================================================//

// Check If The Variable Is Array Or Not By Useing isArray(); And If Condition

//-------------------//
// String // Ex

/*
var myMsg = "Welcome To Hamam Hamou Web For Investment";

if (Array.isArray(myMsg)) {
    
    console.log("Good Yes This Is Array");
    
} else {
    
    console.log("Bad No This Is Not Array");
    
}
*/

//-------------------//
// Array // Ex

/*
var myMsg = [
    
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
    
];

if (Array.isArray(myMsg)) {
    
    console.log("Good Yes This Is Array");
    
} else {
    
    console.log("Bad No This Is Not Array");
    
}
*/

//-------------------//
// Length //
// Notes: Length always counting Normal From 1 ....

// Check The Length On Index //
/*
var myMsg = "Welcome To Hamam Hamou Web For Investment";

console.log(myMsg.length);
*/

//-------------------//
// Check The Length On Array //
/*
var myMsg = [
    
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
    
];
console.log(myMsg.length);
*/

//-------------------//
// To Set The Array How I Want //
/*
var myMsg = [
    
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
    
];
console.log(myMsg.length);

myMsg.length = 2;

console.log(myMsg.length);
*/

// Convert Array To String //
//-------------------//
// toString() //
/*
var myMsg = [
    
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
    
];

console.log(myMsg);

console.log(myMsg.toString());
*/

//-------------------//
// toLocaleString() //

/*
var myMsg = [
    
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
    
];

console.log(myMsg);

console.log(myMsg.toLocaleString());
*/

//---------------------------------------------------------------//
//Deferant Between toString() And toLocaleString();// Ex With Date 
/*
var myDate = new Date();

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toLocaleString());
*/

//-------------------//
// toString() With Date //
/*
var myDate = new Date(),

    myString = myDate.toString();

console.log(myDate);

console.log(myString);
*/

//-------------------//
// toLocaleString() With Date //
/*
var myDate = new Date(),

    myString = myDate.toLocaleString();

console.log(myDate);

console.log(myString);
*/

//-------------------//
// join(); //
/*
var myMsg = [
    
    "Msg 1",
    "Msg 2",
    "Msg 3",
    "Msg 4"
    
];

console.log(myMsg.join(" & "));
*/

//-------------------//
// Adding In Array //
//-------------------//

// Adding By Counting Then Use The Next Number // Count In Array Start From : 0 // 

/*
var myMsg = [
    
    "Msg 1", // Index [0]
    "Msg 2", // Index [1]
    "Msg 3", // Index [2]
    "Msg 4"  // Index [3]
    
];

console.log(myMsg);

myMsg[4] = "Msg 5";

console.log(myMsg);
*/

//-------------------//
// Adding In Array Useing Length // Counting By Length Will Keep The Next Also becouse length counting 1 more than index 
//If I Dont Know The count Or Last Item In Array
/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4"  // Index [3] // In Length [4]
    
];

console.log(myMsg);

myMsg[myMsg.length] = "Msg 5";

console.log(myMsg);
*/

//-------------------//
// Adding In Array Useing Push // Useing Push Adding As Last Item In Array 
/*
var myMsg = [
    
    "Msg 1", // Index [0]
    "Msg 2", // Index [1]
    "Msg 3", // Index [2]
    "Msg 4"  // Index [3]
    
];

console.log(myMsg);

myMsg.push("Msg 5");

console.log(myMsg);
*/

//-------------------//
// Adding In Array Useing unshift // Useing unshift Adding As First Item In Array 
/*
var myMsg = [
    
    "Msg 1", // Index [0]
    "Msg 2", // Index [1]
    "Msg 3", // Index [2]
    "Msg 4"  // Index [3]
    
];

console.log(myMsg);

myMsg.unshift("Msg 5");

console.log(myMsg);
*/

//-------------------//
// Adding In Array Useing splice // Useing splice To Add Item In  Every Place I Diside It In Array 
//Syntax//
// splice(Number To Start Efter , Number Items I Wanna Remove  , "Item I Wanna Add't 1" , "Item I Wanna Add't 2" , "Item I Wanna Add't 3");
/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4"  // Index [3] // In Length [4]
    
];

console.log(myMsg);

myMsg.splice(4 , 0 , "Msg 5" , "Msg 6");

console.log(myMsg);
*/

//-------------------//
// Remove From Array //
//-------------------//

// Remove Useing splice // 
/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg);

myMsg.splice(4 , 2);

console.log(myMsg);
*/

//-------------------//
// Remove Useing pop // // Useing pop To Remove Last Item In Array
/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg);

myMsg.pop();

console.log(myMsg);
*/


// To Show The Item I Remove It //
/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg);

console.log(myMsg.pop());

console.log(myMsg);
*/


//-------------------//
// Remove Useing shift // // Useing shift To Remove First Item In Array
/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg);

myMsg.shift();

console.log(myMsg);
*/

// To Show The Item I Remove It //
/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg);

console.log(myMsg.shift());

console.log(myMsg);
*/

//-------------------//
// Sort // // Useing Sort To Organies Item In Array By AlfaBet And From Front
/*
var myMsg = [
    
    "Msg 6", // Index [5] // In Length [6]
    "Msg 1", // Index [0] // In Length [1]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg);

myMsg.sort();

console.log(myMsg);
*/

// Reverse // // Useing Reverse To Organies Item In Array But From Back
/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg);

myMsg.reverse();

console.log(myMsg);
*/

//-------------------//
// Ex. To Use Both // // Sort And Reverse
/*
var myMsg = [
    
    "Msg 6", // Index [5] // In Length [6]
    "Msg 1", // Index [0] // In Length [1]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg);

myMsg.sort();

console.log(myMsg);

myMsg.reverse();

console.log(myMsg);
*/

//-------------------//
// Slice And Combine //
//-------------------//


// Useing Slice To Cut The Array  // Counting From 0 In Starting
// Syntax: slice( Number Starting From Efter't , Number Ending To{Optional}) //

/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg);

console.log(myMsg.slice(2));
*/

/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg);

console.log(myMsg.slice(2, 5));
*/

// To Slice From Back In Array // Using Minus Number (-No) And Counting From -1 Because There Is No -0
/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg);

console.log(myMsg.slice(-3, -1));
*/

//-------------------//
// Combine // Cocatenate 2 Arrays in 1

// Useing concat() //
/*
var myFirstArray = [
    
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4"
    
];

console.log(myFirstArray);

var mySecondArray = [
    
    "Item One",
    "Item Two",
    "Item Three",
    "Item Four"
    
];

console.log(mySecondArray);

var newArray = myFirstArray.concat(mySecondArray);

console.log(newArray);
*/

//-------------------//
// Search In Array //


// indexOf() // From Front In Array
/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg.indexOf("Msg 3"));
*/

// lastIndexOf() // From Back In Array
/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg.lastIndexOf("Msg 3"));
*/

/*
var myMsg = [
    
    "Msg 1", // Index [0] // In Length [1]
    "Msg 2", // Index [1] // In Length [2]
    "Msg 3", // Index [2] // In Length [3]
    "Msg 4", // Index [3] // In Length [4]
    "Msg 5", // Index [4] // In Length [5]
    "Msg 6", // Index [5] // In Length [6]
    "Msg 7"  // Index [6] // In Length [7]
    
];

console.log(myMsg.lastIndexOf("Msg 3" , 3));
*/

//=================================================================================================================//
// Ex. For Strings Methods // ============== typeof() , Length, // Convert : toString(), String()


// typeof() // To Know Type Of The Items
// Syntax: typeof(Item I Want To Use); //
/*
var myString = "I Love Java Script";

console.log(myString);

console.log(typeof (myString));
*/

//-------------------//
// Length // To Know How many Item In The String
// Syntax: Item I Want To Use.length(); //
/*
var myString = "I Love Java Script";

console.log(myString);

console.log(myString.length);
*/

//-------------------//
// Convert // To Convert Number To  String

// toString() // Syntax: Item I Want To Converted.toString(); //
/*
var myNumber = 100;

console.log(typeof(myNumber));

console.log(myNumber);

var myNewNumber = myNumber.toString();

console.log(myNewNumber);

console.log(typeof(myNewNumber));
*/

// String() // Syntax:  String(Item I Want To Converted); //
/*
var myNumber = 100;

console.log(typeof(myNumber));

console.log(myNumber);

var myNewNumber = String(myNumber);

console.log(myNewNumber);

console.log(typeof(myNewNumber));
*/

//=================================================================================================================//
// Ex. For Locate A String  (Search) // ============== indexOf() , lastIndexOf()

// indexOf() //
//Syntax: Item Iwant To Search In . indexOf("Value I Search For", Starting Position{Optional}); //
/*
var myString = "I'm In Love With Javascript",

      myWord = myString.indexOf("Love");

console.log(myWord);
*/

/*
var myString = "I'm In Love With Javascript And In Love With php",

myWord = myString.indexOf("Love" , 11);

console.log(myWord);
*/

// lastIndexOf() //
/*
var myString = "I'm In Love With Javascript And In Love With php",

myWord = myString.lastIndexOf("Love" , 39);

console.log(myWord);
*/

// search() //
/*
var myString = "I'm In Love With Javascript And In Love With php",

myWord = myString.search("Love");

console.log(myWord);
*/

// search() // With ( i ) For Sensitive Letter
/*
var myString = "I'm In Love With Javascript And In Love With php",

myWord = myString.search(/loVe/i);

console.log(myWord);
*/

//=================================================================================================================//
// Ex. For Split And Extract String  // ============== split() , Slice()

// Split // Syntax: Item To Splitted . Split ( Seprator , Limit);

// split Without Param //
/*
var myMainString = "I Love Javascript And JSON",
    
    mySplittedString = myMainString.split();

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySplittedString);

console.log(typeof (mySplittedString));
*/

// split Without Param Just "" Without Space// Will Split Letter Lettrs
/*
var myMainString = "I Love Javascript And JSON",
    
    mySplittedString = myMainString.split("");

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySplittedString);

console.log(typeof (mySplittedString));
*/

// split Without Param Just "a" just letter// Will Split Letter And Replaced in Coma ( , )
/*
var myMainString = "I Love Javascript And JSON",
    
    mySplittedString = myMainString.split("a");

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySplittedString);

console.log(typeof (mySplittedString));
*/

// split Without Param Just " " With Space// Will But ( , ) In Evry Space
/*
var myMainString = "I Love Javascript And JSON",
    
    mySplittedString = myMainString.split(" ");

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySplittedString);

console.log(typeof (mySplittedString));
*/

//-------------------//
// Slice // Syntax: Item To Sliced . Slice ( Start , End);
/*
var myMainString = "I Love Javascript And JSON",
    
    mySlicedString = myMainString.slice();

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySlicedString);

console.log(typeof (mySlicedString));
*/

/*
var myMainString = "I Love Javascript And JSON",
    
    mySlicedString = myMainString.slice(7);

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySlicedString);

console.log(typeof (mySlicedString));
*/

/*
var myMainString = "I Love Javascript And JSON",
    
    mySlicedString = myMainString.slice(7,11);

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySlicedString);

console.log(typeof (mySlicedString));
*/

// Last Letters // Using minus ( - No) 
/*
var myMainString = "I Love Javascript And JSON",
    
    mySlicedString = myMainString.slice(-3);

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySlicedString);

console.log(typeof (mySlicedString));
*/

//-------------------//
// Substr // Syntax: Items To Substr . supstr( Start , Length);

/*
var myMainString = "I Love Javascript And JSON",
    
    mySubstrString = myMainString.substr(7);

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySubstrString);

console.log(typeof (mySubstrString));
*/

/*
var myMainString = "I Love Javascript And JSON",
    
    mySubstrString = myMainString.substr(7,1); // Try split in Same value to see deferant // sblit(7,1);

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySubstrString);

console.log(typeof (mySubstrString));
*/

//-------------------//
// Substring // Syntax: Items To Substring . supstring( Start , End);
// if Start Larger Than Ind Will Suap Between them // because is programing to count from front
/*
var myMainString = "I Love Javascript And JSON",
    
    mySubString = myMainString.substring(7);

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySubString);

console.log(typeof (mySubString));
*/

/*
var myMainString = "I Love Javascript And JSON",
    
    mySubString = myMainString.substring(7 , 17);

console.log(myMainString);

console.log(typeof (myMainString));

console.log(mySubString);

console.log(typeof (mySubString));
*/

//=================================================================================================================//
// Ex. For Find And Replace  // ============== CharAt() , charCodeAt() ,  replace()

// CharAt() // Syntax: Item I Want To Find In . charAt(Number Of The Value); //

/*
// if i have No Number Inside charAt() will Give Me First Letters Because Is Count From Zero //
var myString = "I Love Javascript Too Much",
    
    myChar = myString.charAt();

console.log(myString);

console.log(myChar);
*/

/*
// if i have Number Inside charAt() will Give Me Exact Letters ( Count From Zero ) //
var myString = "I Love Javascript Too Much",
    
    myChar = myString.charAt(2);

console.log(myString);

console.log(myChar);
*/

// To Get Last Item By Using (Length - 1) Because Length Count From One So Is Always Is Biger In One 
/*
var myString = "I Love Javascript Too Much",
    
    myChar = myString.charAt(myString.length - 1);

console.log(myString);

console.log(myChar);
*/

/*
var myString = "I Love Javascript Too Much",
    
    myChar = myString.charAt(myString.length - 3);

console.log(myString);

console.log(myChar);
*/

//-------------------//
// charCodeAt() // Syntax: Item I Want To Find In . charCodeAt(Number Of The Value Or(letter) in Item ); //
/*
// To Bring The Uni Code Of The Letter // By Web unicode In Google //
var myString = "I Love Javascript Too Much",
    
    myUniCode = myString.charCodeAt(2);

console.log(myString);

console.log(myUniCode);
*/


//-------------------//
// replace() //  Syntax: Item I Want To replace In . replace(Value , New Value); //

// To Replace Item In Place Of Item //
/*
var myString = "I Love Javascript Too Much",
    
    myReplace = myString.replace("Javascript", "php");

console.log(myString);

console.log(myReplace);
*/

// To Replace Item In Place Of Item  Useing Regular Exprition// ( / Sensitive /i ) , ( / Global  /g ) 
// In This Example Without Regular Exprition Will Choes The First Word He Find It //
/*
var myString = "I Love Javascript Too Much Javascript Is Very Fun",
    
    myReplace = myString.replace("Javascript", "php");

console.log(myString);

console.log(myReplace);
*/


// Always When I Use Exprition Remove "" //
// By Useing Exprition // Global:   /  /g 
/*
var myString = "I Love Javascript Too Much Javascript Is Very Fun",
    
    myReplace = myString.replace(/Javascript/g, "php");

console.log(myString);

console.log(myReplace);
*/

/*
// By Useing Both Exprition // Global:   /  /g  And Sensitive:   /  /i  By:  /   /gi 
var myString = "I Love JavaScript Too Much JavaScriPt Is Very Fun",
    
    myReplace = myString.replace(/Javascript/gi, "php");

console.log(myString);

console.log(myReplace);
*/

//=================================================================================================================//
// Ex. For  Concatenate // ============== string.fromCharCode() ,  concat();

// string.fromCharCode() // Syntax: string.fromCharCode(Num1,Num2,Num3,Num4); //

/*
// To Bring The Uni Code Number Of The Letter // By Web unicode In Google //
var MyMsg = String.fromCharCode(72, 65, 77, 65, 77);

console.log(MyMsg);
*/


// concat(); // Syntax: concat(String, String, String, String); //
// Using "space" , To Mack Space Between Word And I can Write Santins From Me WithOut Variable

/*
var MyMsg1 = "I Love",
    
    MyMsg2 = "Javascript",
    
    MyMsg3 = "Very Much";

    allMsg = MyMsg1.concat(" " ,  MyMsg2, " " , MyMsg3);


console.log(allMsg);
*/

/*
var MyMsg1 = "I Love",
    
    MyMsg2 = "Javascript",
    
    MyMsg3 = "Very Much";

    allMsg = MyMsg1.concat(" " ,  MyMsg2, " " , MyMsg3 ,  " And PHP Also");


console.log(allMsg);
*/

/*
 var allMsg = "Hello I love".concat(" " , "Javascript"  ,  " And PHP Also");

console.log(allMsg);
*/



//=================================================================================================================//
// Ex. For Convert Letters  // ============== toLowerCase() ,  toUpperCase()

// toLowerCase() // 
/*
var  myString = "I Love Js",
    
    mySmallString = myString.toLowerCase();

console.log(mySmallString);

console.log("HELLO HAMAM".toLowerCase());
*/


// toUpperCase() // 
/*
var  myString = "I Love Js",
    
    myCapitalString = myString.toUpperCase();

console.log(myCapitalString);

console.log("hello hamam".toUpperCase());
*/

//=================================================================================================================//
// Ex. For Tirm And Link And All Referance  // ============== trim() , link() 

// trim() //
/*
var myString = "        Hello Iam Hamam Hamou          ";

console.log(myString);

var myNewString = myString.trim();

console.log(myNewString);
*/

// link() //
/*
var myString = "Google";

console.log(myString.link("http://www.google.com"));
*/

/*
var myString = "Google";

console.log("Go To Google By This Link => " + myString.link( "http://www.google.com"));
*/

//=================================================================================================================//
// Ex. For Chain  // ==============

/*
var myNumber = 120,
    
    myString = myNumber.toString();

console.log(myNumber);

console.log(myString);

var myNewNumberS = myString.replace(2, 3);

console.log(myNewNumberS);


var myLastNumberS = myNewNumberS.split("");

console.log(myLastNumberS);
*/

// To Use Chain Is To Make The Code Shorter And Write All Methods Together //
/*
var myNumber = 120,
    
    myString = myNumber.toString().replace(2, 3).split("");

console.log(myNumber);

console.log(myString);
*/

/*
var myNumber = 1200000,
    
    myString = myNumber.toString().replace(0, 1).split("");

console.log(myNumber);

console.log(myString);
*/

/*
var myNumber = 1200000,
    
    myString = myNumber.toString().replace(/0/g, 1).split("");

console.log(myNumber);

console.log(myString);
*/

//=================================================================================================================//
// Ex. For String Methods Practice  // ==============
// Sceap // " ' ' " , " \"  \"  " , \\  \\ , \\\"   \\\"
/*
var myString = "I Love Programming Languages";

console.log(myString);
*/

/*
var myString = "I Love 'Programming' Languages";

console.log(myString);
*/

/*
var myString = "I Love \"Programming\" Languages";

console.log(myString);
*/

/*
var myString = "I Love \\Programming\\ Languages";

console.log(myString);
*/

/*
var myString = "I Love \\\"Programming\\\" Languages";

console.log(myString);
*/

//-------------------//
// Length // 

/*
var myString = "I Love Programming Languages";

console.log(myString.length);
*/

//-------------------//
// Convert Number To String // 

// toString() //             //And Useing typeof() 
/*
var myNumber = 120,
    
    myString = myNumber.toString();

console.log(typeof(myNumber));

console.log(typeof(myString));
*/

// String() //             //And Useing typeof() 
/*
var myNumber = 120,
    
    myString = String(myNumber);

console.log(typeof(myNumber));

console.log(typeof(myString));
*/

//-------------------//
// Search //

// indexOf() //
/*
var myString = "I Love Programming Languages",
    
    mySearch = myString.indexOf("Love" , 1);

console.log(myString);

console.log(mySearch);
*/

// lastIndexOf() //
/*
var myString = "I Love Programming Languages",
    
    mySearch = myString.lastIndexOf("L" , 10);

console.log(myString);

console.log(mySearch);
*/

// search() //
/*
var myString = "I Love Programming Languages",
    
    mySearch = myString.lastIndexOf("Languages");

console.log(myString);

console.log(mySearch);
*/


//-------------------//
// split() //

/*
var myString = "I Love Programming Languages",
    
    mySplit = myString.split("");

console.log(myString);

console.log(mySplit);
*/

/*
var myString = "I Love Programming Languages",
    
    mySplit = myString.split(" ");

console.log(myString);

console.log(mySplit);
*/

/*
var myString = "I Love Programming Languages",
    
    mySplit = myString.split("o");

console.log(myString);

console.log(mySplit);
*/

/*
var myString = "I Love Programming Languages",
    
    mySplit = myString.split("", 4);

console.log(myString);

console.log(mySplit);
*/

/*
var myString = "I Love Programming Languages",
    
    mySplit = myString.split(" " , 2);

console.log(myString);

console.log(mySplit);
*/


//-------------------//
// slice // 

/*
var myString = "I Love Programming Languages",
    
    mySlice = myString.slice(2);

console.log(myString);

console.log(mySlice);
*/

/*
var myString = "I Love Programming Languages",
    
    mySlice = myString.slice(2, 10);

console.log(myString);

console.log(mySlice);
*/

/*
var myString = "I Love Programming Languages",
    
    mySlice = myString.slice(-2);

console.log(myString);

console.log(mySlice);
*/


//-------------------//
// substr //

/*
var myString = "I Love Programming Languages",
    
    mySubstr = myString.substr(2);

console.log(myString);

console.log(mySubstr);
*/

/*
var myString = "I Love Programming Languages",
    
    mySubstr = myString.substr(2 , 10);

console.log(myString);

console.log(mySubstr);
*/

/*
var myString = "I Love Programming Languages",
    
    mySubstr = myString.substr(-20);

console.log(myString);

console.log(mySubstr);
*/

// substring //
/*
var myString = "I Love Programming Languages",
    
    mySubString = myString.substring(2 , 10);

console.log(myString);

console.log(mySubString);
*/

/*
var myString = "I Love Programming Languages",
    
    mySubString = myString.substring(10, 2);

console.log(myString);

console.log(mySubString);
*/


//-------------------//
// Find And Replace //


// charAt //

/*
var myString = "I Love Programming Languages",
    
    myChar = myString.charAt(4);

console.log(myString);

console.log(myChar);
*/

// charCodeAt //
/*
var myString = "I Love Programming Languages",
    
    myCharUni = myString.charCodeAt(4);

console.log(myString);

console.log(myCharUni);
*/

// replace //
/*
var myString = "I Love Programming Languages",
    
    myReplace = myString.replace("Love","Like");

console.log(myString);

console.log(myReplace);
*/

/*
var myString = "I Love Programming Languages",
    
    myReplace = myString.replace("L","X");

console.log(myString);

console.log(myReplace);
*/

//-------------------//
// concat //

/*
var myString = "I Love Programming Languages",
    
    myCon = myString.concat(" Too Much");

console.log(myString);

console.log(myCon);
*/

//-------------------//
// toLowerCase //      //Useing Chain Also 

/*
var myString = "I Love Programming Languages",
    
    mySmall = myString.concat(" Too Much").toLowerCase();

console.log(myString);

console.log(mySmall);
*/

// toUpperCase //

/*
var myString = "i love you",
    
    myCapital = myString.toUpperCase();

console.log(myCapital);
*/


//-------------------//
// Chain //

/*
var myString = "I Love Programming Languages",
    
    myChain = myString.concat(" Too Much").toUpperCase().split(" ");

console.log(myString);

console.log(myChain);
*/

//-------------------//
// trim //

/*
var myString = "       I Love Programming Languages             ",
    
    myTrim = myString.trim();

console.log(myString);

console.log(myTrim);
*/


//-------------------//
// link // 

/*
var myWeb = "Facebook",
    
    myLink = myWeb.link("http://www.facebook.com");

console.log(myLink);
*/

//=================================================================================================================//
// Ex. For  Loop - For // ==============


// ================================ // *******************************************************
// ================================ // ///////////////////////////////////////////////////////
// ========================================================================================== // 
// ========================================================================================== //
/* 
For Loop Syntax: 

for ( Initialization; Condition; Final Expression ) {
  
  // Statement

}

// Initialization: Executed Before The Loop Once 
// Condition: Define The Condation To Run The Loop
// Final Expression: Executed Everytime The Code Run 

*/
// ========================================================================================== // 
// ========================================================================================== // 
// ================================ // ////////////////////////////////////////////////////////
// ================================ // ********************************************************

/*
var i;

for (i = 1; i <= 10; i++) {
    
    console.log(i);
    
}
*/

/*
var i;

for (i = 1; i <= 10; i = i + 1) {
    
    console.log(i);
    
}
*/

/*
var i;

for (i = 1; i <= 10; i += 1) {
    
    console.log(i);
    
}
*/

/*
var i;

for (i = 20; i > 1; i--) {
    
    console.log(i);
    
}
*/

/*
var i;

for (i = 1; i < 10; i = i + 2) {
    
    console.log(i);
    
}
*/

//-------------------//

/*
var friends = ["Hamam", "Rouaa", "Salma", "Khaled"];

var i;

for (i = 0; i < friends.length; i++) {
    
    console.log(i);
    
}
*/

/*
var friends = ["Hamam", "Rouaa", "Salma", "Khaled", "Omar"];

console.log(friends[1]);

console.log(friends.length);

var i;

for (i = 0; i < friends.length; i++) {
    
    console.log(friends[i]);
    
}
*/


//=================================================================================================================//
// Ex. For  Loop - For In // ==============

// Example About Object //
/*
var myCar = {
    
    color: "white", 
    type: "BMW", 
    price: "100.000", 
    model: "2017" 
 
};

console.log(myCar.type);
*/

/*
var myCar = {
    
    color: "white", 
    type: "BMW", 
    price: "100.000", 
    model: "2017" 
 
};

console.log(myCar["type"]);
*/


// ================================ // *******************************************************
// ================================ // ///////////////////////////////////////////////////////
// ========================================================================================== // 
// ========================================================================================== // 
/*
  ( For/In )   Loop   Syntax:
  
  for ( Variable In Object ){
  
        if (Object.hasOwnProperty(Variable)) {
        
            // Statement 
        
        
    }
  
  }

*/
// ========================================================================================== // 
// ========================================================================================== // 
// ================================ // ////////////////////////////////////////////////////////
// ================================ // ********************************************************
//----------------------//
//     hasOwnProperty()              // Using For Object 
//----------------------//



// Before Useing Variable Out For Loop //
/*
var myCar = {
    
    color: "white", 
    type: "BMW", 
    price: "100.000", 
    model: "2017" 
 
};

// console.log(myCar.type);

for (var property in myCar) {
    
    console.log(myCar[property]);
    
}
*/


//----------------------//
// Useing Variable Out For Loop //
// To Print Key And Value // With Out (If Condition And hasOwnProperty() Function)
/*
var myCar = {
    
    color: "white",
    type: "BMW",
    price: "100.000",
    model: "2017" 
 
};

var property;

for (property in myCar) {
    
    console.log(property + " : " + myCar[property]);
    
}
*/

//----------------------//
// To Print Key And Value // With (If Condition And hasOwnProperty() Function)
/*
var myCar = {
    
    color: "white",
    type: "BMW",
    price: "100.000",
    model: "2017" 
 
};

var property;

for (property in myCar) {
    
    if (myCar.hasOwnProperty(property)) {
        
            console.log(property + " : " + myCar[property]);
        
        
    }

    
}
*/
//=================================================================================================================//
// Ex. For Advanced For Loop   // ==============

// Removeing First Condition  And Use It In Variable //
/*
var i = 0;

for (; i <= 10; i++) {
    
    console.log(i);
    
}
*/

// Removeing First and Second Condition  And Use The First In Variable And The Second In If , Break //
/*
var i = 0;

for (;; i++) {
    
    if (i > 10) break;
    
    console.log(i);
    
}
*/

// Removeing First and Second and Third Condition  And Use The First In Variable And The Second In If , Break And Third Move It To Statment Inside For//
/*
var i = 0;

for (;;) {
    
    if (i > 10) break;
    
    console.log(i);
    
    i++;
    
}
*/
// Using For Loop With Function //
/*
function generateYears(Start, End) {
    
    "use strict";
    
    var years; 
    
    document.write("<select>");
    
    for (years = Start; years <= End; years++) {
        
        // console.log(years);
        
        document.write("<option value='years'>" + years + "</option>");
        
    }
    
    
    document.write("</select>");
    
}
generateYears(1900, 2017);
*/

/*
function generateYears(Start, End) {
    
    "use strict";
    
    var years; 
    
    document.write("<select>");
    
    for (years = Start; years <= End; years++) {
        
        // console.log(years);
        
        document.write("<option value='" + years + "'>" + years + "</option>");
        
    }
    
    
    document.write("</select>");
    
}
generateYears(1900, 2017);

generateYears(2000, 2018);
*/

/*
function generateYears(Start, End) {
    
    "use strict";
    
    var years; 
    
    document.write("<select>");
    
    for (years = Start; years <= End; years++) {
        
        // console.log(years);
        
        document.write("<option value='" + years + "'>" + years + "</option>");
        
    }
    
    
    document.write("</select>");
    
}
generateYears(1984, 2017); // Hamam

generateYears(1991, 2018); // Rouaa

generateYears(2013, 2018); // Salma
*/      

//=================================================================================================================//
// Ex. For While , Do   // ==============


// ========================================================================================== // 
// ========================================================================================== // 
// ================================ // ////////////////////////////////////////////////////////
// ================================ // ********************************************************
/*
  
While  Syntax: 

                While ( Condition ) {
                
                     // Statement 
                
                }

*/
// ================================ // ********************************************************
// ================================ // ////////////////////////////////////////////////////////
// ========================================================================================== // 
// ========================================================================================== // 

// Ex For While Counter //
/*
var i = 0;

while (i <= 10) {
    
    console.log(i);
    
    i++;
}
*/

// Ex For Same Function Of For Useing While //
/*
function generateYears(Start, End) {
    
    "use strict";
    
    var years = Start; 
    
    document.write("<select>");
    
    while (years <= End) {
        
        // console.log(years);
        
        document.write("<option value='" + years + "'>" + years + "</option>");
        
        years++
        
    }
    
    
    document.write("</select>");
    
}
generateYears(1984, 2017); // Hamam

generateYears(1991, 2018); // Rouaa

generateYears(2013, 2018); // Salma
*/

// ========================================================================================== // 
// ========================================================================================== // 
// ================================ // ////////////////////////////////////////////////////////
// ================================ // ********************************************************
/*
  
Do / While  Syntax: 

               do {
               
               
                   // Statmement 
               
               
               } While ( Condition ) 

*/
// ================================ // ********************************************************
// ================================ // ////////////////////////////////////////////////////////
// ========================================================================================== // 
// ========================================================================================== // 

// Ex For Do While //
/*
var i = 0;

 do {
    
    console.log(i);
    
    i++;
} while (i <= 10);
*/

/*
function generateYears(Start, End) {
    
    "use strict";
    
    var years = Start; 
    
    document.write("<select>");
    
    do {
        
        // console.log(years);
        
        document.write("<option value='" + years + "'>" + years + "</option>");
        
        years++
        
    } while (years <= End);
    
    
    document.write("</select>");
    
}
generateYears(1984, 2017); // Hamam

generateYears(1991, 2018); // Rouaa

generateYears(2013, 2018); // Salma
*/



//=================================================================================================================//
// Ex. For Loop Control  // ============== Break , Continue

// Using Break To Stop The Loop On Exact Number With If Condition //
/*
var i;

for (i = 1; i < 10; i++) {
    
    if (i === 4) {
        
        break;
    }
    
    console.log(i);
    
}
*/

// Using Continue To Jump Up Number I chose To Be Not Exist On Loop //
/*
var i;

for (i = 1; i < 10; i++) {
    
    if (i === 4) {
        
        continue;
    }
    
    console.log(i);
    
}
*/

// Make Two Loop Together //
// with plus
/*
var i , x;

for (i = 1; i < 10; i++) {
    
   for (x = 15; x < 20; x++) {
       
       console.log(i + x);
       
   }
    
    
}
*/

// Using Lable To Name The Item If It Was Barent Or Child Be Using ( LableName: ) 

// With Concatenate 
/*
var i , x;

mainLoop:

for (i = 1; i < 10; i++) {
    
    childLoop:
    
   for (x = 15; x < 20; x++) {
       
       console.log(i + "=>" + x);
       
   }
    
    
}
*/

// With break and continue
/*
var i , x;

MainLoop:

for (i = 1; i < 10; i++) {
    
    ChildLoop:
    
   for (x = 15; x < 20; x++) {
       
           if (x === 17) {
        
               // break ChildLoop;
               // Or 
               break MainLoop;
               
    }
       
       console.log(i + "=>" + x);
       
   }
    
    
}
*/
//-------------------------//
/*
var i , x;

MainLoop:

for (i = 1; i < 10; i++) {
    
    ChildLoop:
    
   for (x = 15; x < 20; x++) {
       
           if (x === 17) {
        
                continue ChildLoop;
               // Or 
               //continue MainLoop;
               
    }
       
       console.log(i + "=>" + x);
       
   }
    
    
}
*/


//=================================================================================================================//
// Ex. For Loop Practice  // ==============

/*
var i;

for (i = 0; i < 10; i++) {
    
    console.log(i);
    
}
*/

/*
var i = 0;

for (;;) {
    
    if (i > 10) {
        
        break;
    
    }
    
    console.log(i);
    
    i++;
}
*/  

// One Number More Because Incriment Before Console //
/*
 var i = 0;

for (;;) {
    
    if (i > 10) {
        
        break;
    
    }
    
        i++;
    
    console.log(i);

}   
*/

// Using Loop In Object //
/*
var myCar = {
    
    name:"BMW",
    color:"Black",
    model:"2017",
    type:"4x4",
    Power:"8 Celander"
    
};

// console.log(myCar.name);

var prop;

for (prop in myCar) {
    
    if (myCar.hasOwnProperty(prop)) {
        
        console.log(myCar[prop]);
        
    }
       
    
}
*/

// While Loop
/*
var i = 0;


while (i <= 10) {
    
    console.log(i);
    
    i++;
    
}
*/

// Do , While Loop
/*
var i = 0;


do {
    
    console.log(i);
    
    i++;
    
} while (i <= 10);
*/

// Two Loop With Lable And Controling Loop
/*
var i, x;

MainLoop:

for (i = 0; i < 10; i++) {
    
    ChailLoop:
    
    for (x = 11; x < 20; x++) {
        
        if (x === 13) {
            
            
            break MainLoop;
          // OR // break ChailLoop;
        }
        
        console.log(i + "=>" + x);
        
    }
    
}
*/

/*
var i, x;

MainLoop:

for (i = 0; i < 10; i++) {
    
    ChailLoop:
    
    for (x = 11; x < 20; x++) {
        
        if (x === 13) {
            
            continue ChailLoop;
          // OR //  continue MainLoop;
           
        }
        
        console.log(i + "=>" + x);
        
    }
    
}
*/

//=================================================================================================================//
// Ex. For Math // ============== ceil , floor , round , min , max

//=============================//
//=============================//
/*

   Syntax: 
   
   Math.ceil(x);
   
*/
//=============================//
//=============================//


/*
var x = Math.ceil(4.2);

console.log(x);
*/

/*
var x = Math.ceil(-4.5);

console.log(x);
*/

/*
var x = Math.ceil(10 - 1.9);

console.log(x);
*/


//=============================//
//=============================//
/*

   Syntax: 
   
   Math.floor(x);
   
*/
//=============================//
//=============================//

/*
var x = Math.floor(4.2);

console.log(x);
*/

/*
var x = Math.floor(4.99);

console.log(x);
*/

/*
var x = Math.floor(-8.999);

console.log(x);
*/

/*
var x = Math.floor(1 + 0.9);

console.log(x);
*/

//=============================//
//=============================//
/*

   Syntax: 
   
   Math.round(x);
   
*/
//=============================//
//=============================//

/*
var x = Math.round(1.4);

console.log(x);
*/

/*
var x = Math.round(1.4999);

console.log(x);
*/

/*
var x = Math.round(1.5);

console.log(x);
*/

/*
var x = Math.round(-1.4);

console.log(x);
*/

/*
var x = Math.round(-1.6);

console.log(x);
*/

//=============================//
//=============================//
/*

   Syntax: 
   
   Math.min(val, val, val);
   
*/
//=============================//
//=============================//
/*
var x = Math.min(100, 10, 50, 1000, -90, -120, -100.50, 150.10);

console.log(x);
*/

//=============================//
//=============================//
/*

   Syntax: 
   
   Math.max(val, val, val);
   
*/
//=============================//
//=============================//

/*
var x = Math.max(100, 10, 50, 1000, -90, -120, -100.50, 150.10);

console.log(x);
*/

/*---------------------------------*/
// I Can Use All Math Function Together 

/*
var x = Math.max(100, 10, 50, 1000.20, -90, -120, -100.50, 150.10);

console.log(Math.floor(x));
*/

/*
var x = Math.max(100, 10, 50, 1000.20, -90, -120, -100.50, 150.10);

console.log(Math.ceil(x));
*/

/*
var x = Math.max(100, 10, 50, 1000.20, -90, -120, -100.50, 150.10);

console.log(Math.ceil(x) + 100);
*/

/*
var x = Math.max(100, 10, 50, 1000.20, -90, -120, -100.50, 150.10);

console.log(Math.ceil(Math.round(x) + 10.5));
*/

//=============================//
//=============================//
/*

   Syntax: 
   
   Math.random();
   
*/
//=============================//
//=============================//

/*
var x = Math.random();

console.log(x);
*/

/*
var x = Math.random();

console.log(x * 20);
*/

/*
var x = Math.random();

console.log(Math.floor(x * 20));
*/

/*
var x = Math.random();

console.log(Math.floor((x * 10) + 1));
*/

/*
var x = Math.random(),
    
    myEndPattern = 1000;

console.log(Math.floor((x * myEndPattern) + 1));
*/

/*
var x = Math.random(),
    
    myEndPattern = 1000;

console.log(Math.floor((Math.random() * myEndPattern) + 1));
*/

//=================================================================================================================//
// Ex. For  Regular Expression Intro // ==============

/*
    //=============================//
    //=============================//
    //=============================//
    Regular Expression Syntax:
    
    /Pattern/attributes
    
    //=============================//
    //=============================//
    
    // Regular Expression  //            / ... /
    
    //===========//
    
    And We Use It With :
    
    Search | Replace | Match | Split | Test 
    
    //============//
    
    Attributes List:
    
    
    [ i ] => Case Insensitive 
    [ g ] => Global Search
    [ m ] => Multi Line Search
    [...] => Brackets Use  Character
    [^..] => Use All Exssipt This Character
    [a-e] => Range Letters  From Letter To Letter 
    [0-9] => Range Number   From Number To Number
    [^0-9] => Not Range Number   All Exssipt This Number
    [A-g] => Range Letters Cabital From A to Z Then Is Start Lwoer Letters From a To g
    
    //============//
    
    Quantifiers
    
    Letter+  => /a+/ Word Contain One Letter
    Letter{number} => Word Contain Number Of Letter
    Letter{number, number} => Word Contain Number Or Number
    Letter{number,} => Word Contain At Least This Number And All Number Biger Than
    
    //=============================//
    //=============================//
    //=============================//

*/

/*
var String = "I Love Javascript So Match",
    
    Result = String.search(/L/);

console.log(Result);
*/

/*
var String = "I Love Javascript So Match Lol",
    
    Result = String.search(/l/);

console.log(Result);
*/

/*
var String = "I Love Javascript So Match",
    
    Result = String.replace(/L/, "@");

console.log(Result);
*/

/*
var String = "I Love Javascript So Match",
    
    Result = String.search(/l/i);

console.log(Result);
*/

/*
var String = "I Love Javascript And MySql So Match Lol",
    
    Result = String.replace(/l/g , "@");

console.log(Result);
*/

/*
var String = "I Love Javascript And MySql So Match Lol",
    
    Result = String.replace(/l/gi , "@");

console.log(Result);
*/

//====== [...] ========//
/*
var String = "I Love Javascript And MySql So Match Lol",
    
    Result = String.replace(/[a]/gi , "@");

console.log(Result);
*/

/*
var String = "I Love Javascript And MySql So Match Lol",
    
    Result = String.replace(/[^a]/gi , "@");

console.log(Result);
*/

/*
var String = "I Love Javascript And MySql So Match Lol",
    
    Result = String.replace(/[a-e]/gi , "@");

console.log(Result);
*/

/*
var String = "I Love Javascript And MySql So Match Lol",
    
    Result = String.replace(/[A-Z]/gi , "@");

console.log(Result);
*/

/*
var String = "I Love 7 Javascript 9 And MySql 5  and PHP 3 ",
    
    Result = String.replace(/[0-9]/ , "@");

console.log(Result);
*/


/*
var String = "I Love Javascript 50% And MySql 5%  and PHP 3% ",
    
    Result = String.replace(/[0-9]/gi , "@");

console.log(Result);
*/

/*
var String = "I Love Javascript 50% And MySql 5%  and PHP 3% ",
    
    Result = String.replace(/[^0-9]/gi , "@");

console.log(Result);
*/

/*
var String = "AB XYZ abc hij",
    
    Result = String.replace(/[A-g]/g , "@");

console.log(Result);
*/

/*
var String = "1234567890ABCDEFGHIJKLMNabcdefghijklmnopqrstuvwxyz",
    
    Result = String.replace(/[0-9a-z]/g , "@");

console.log(Result);
*/

//====== Quantifiers ========//

/*
var String = "I Love Jaavascript And MySql So Maatch Lol",
    
    Result = String.replace(/a+/gi , "@");

console.log(Result);
*/

/*
var String = "I Love Jaaavascript And MySql So Maatch Lol",
    
    Result = String.replace(/a{3}/gi , "@");

console.log(Result);
*/

/*
var String = "I Love Jaaavascript And MySql So Maatch Lol aaaa",
    
    Result = String.replace(/a{3,4}/gi , "@");

console.log(Result);
*/

/*
var String = "I Love Jaaavascript And MySql So Maatch Lol aaaa",
    
    Result = String.replace(/a{3,}/gi , "@");

console.log(Result);
*/

//=================================================================================================================//
// Ex. For Date , Time Intro   // ============== new Date();  

//=============================//
//=============================//
/*
   
   new Date();    // Print Current Date & Time 
   
   new Date(Millseconds);   // Print Millseconds From UTC 1 Jan 1970 00:00:00
   
   new Date("DateString");   // Can Add Date String I Choes It 
   
   new Date(7 Argument);   // (Year, Month, Day, Hour, Minutes, Seconds, Millseconds) -> INTEGAR

*/
//=============================//
//=============================//

/*
var theDate = new Date();

console.log(theDate);
*/

/*
var theDate = new Date(10000);

console.log(theDate);
*/

/*
var theDate = new Date("November 29, 2013 11:30:02");

console.log(theDate);
*/

/*
var theDate = new Date(1984,01,07,04,30,00,00);

console.log(theDate);
*/



//=================================================================================================================//
// Ex. For Date Format  // ==============

//=============================//
//=============================//
/*

     Full Format    // ("Year Months Day Hour Minut Second Millsecond")
     Long Format    // ("Year Months Day Hour Minut Second Millsecond")
     Short Fromat   //  Just Month Befor Day 
     Iso Format     // (YYYY-MM-DD hh:mm:ss TZD)
     
     
     //------------//
     
     Js Ignore Commas
     Js Months Insensitive
     [Month Day Year] OR [Year Moths Day] Any Way I Can Write 


*/
//=============================//
//=============================//

// Full Format // 
/*
var theDate = new Date("January 07, 1984 04:30:00");

console.log(theDate);
*/

// Long Format //

/*
var theDate = new Date("Jan 07 1984 04:30:00");

console.log(theDate);
*/

// Short Fromat //  Always Month Before Day Else Can I Write It Every Where

/*
var theDate = new Date("00:00:00 1984/01/05");

console.log(theDate);
*/

// Iso Format //

/*
var theDate = new Date("2017-11-10 11:06:30 +01:00");

console.log(theDate);
*/

//=================================================================================================================//
// Ex. For Date Function  // ============== GET

//=============================//
//=============================//
/*

     getDate(); // Day Of The Month 1-31
     getUTCDate(); // Day Of The Month 1-31 in UTC

     getDay(); // Day Of The Week 0-6 // Sun = 0, Mun = 1, Tus = 2, Wed = 3, Thi = 4, Fri = 5, Sat = 6
     getUTCDay(); // Day Of The Week 0-6 // Sun = 0, Mun = 1, Tus = 2, Wed = 3, Thi = 4, Fri = 5, Sat = 6 in UTC
     
     getFullYear(); // Get The Full Year  2017
     getUTCFullYear(); // Get The Full Year  2017 in UTC
     
     getHours(); // Get Hours 0-59
     getUTCHours(); // Get Hours 0-59 in UTC
     
     getMinutes(); // Get Minutes 0-59
     getUTCMinutes(); // Get Minutes 0-59  in UTC
     
     getSeconds(); // Get Seconds 0-59
     getUTCSeconds(); // Get Seconds 0-59   in UTC
     
     getMilliseconds(); // Get Milliseconds 0-999
     getUTCMilliseconds(); // Get Milliseconds 0-999   in UTC
     
     getTime(); // Number Of Milliseconds From 1970 OR Specific Date

     
     getTimezoneOffset(); // Get Def Between UTC & Your Local Time

     
*/
//=============================//
//=============================//

// getDate() //
/*
var theDate = new Date(),
    
    theDay = theDate.getDate();

console.log(theDay);
*/

/*
var theDate = new Date("Jan 07 1984"),
    
    theDay = theDate.getDate();

console.log(theDay);
*/

/*
var theDate = new Date(),
    
    theDay = theDate.getUTCDate();

console.log(theDay);
*/

// geDay() //

/*
var theDate = new Date(),
    
    theDay = theDate.getDay();

console.log(theDay);
*/

/*
var theDate = new Date("Jan 07 1984"),
    
    theDay = theDate.getDay();

console.log(theDay);
*/

/*
var theDate = new Date(),
    
    theDay = theDate.getUTCDay();

console.log(theDay);
*/


// getFullYear() //
/*
var theDate = new Date(),
    
    theDay = theDate.getFullYear();

console.log(theDay);
*/

/*
var theDate = new Date("Jan 07 1984"),
    
    theDay = theDate.getFullYear();

console.log(theDay);
*/

/*
var theDate = new Date(),
    
    theDay = theDate.getUTCFullYear();

console.log(theDay);
*/

// getHours() //

/*
var theDate = new Date(),
    
    theDay = theDate.getHours();

console.log(theDay);
*/

/*
var theDate = new Date("Jan 07 1984 11:06:30"),
    
    theDay = theDate.getHours();

console.log(theDay);
*/

/*
var theDate = new Date(),
    
    theDay = theDate.getUTCHours();

console.log(theDay);
*/

// getMinutes() //

/*
var theDate = new Date(),
    
    theDay = theDate.getMinutes();

console.log(theDay);
*/

/*
var theDate = new Date("Jan 07 1984 11:06:30"),
    
    theDay = theDate.getMinutes();

console.log(theDay);
*/

/*
var theDate = new Date(),
    
    theDay = theDate.getUTCMinutes();

console.log(theDay);
*/

// getSeconds() //

/*
var theDate = new Date(),
    
    theDay = theDate.getSeconds();

console.log(theDay);
*/

/*
var theDate = new Date("Jan 07 1984 11:06:30"),
    
    theDay = theDate.getSeconds();

console.log(theDay);
*/

/*
var theDate = new Date(),
    
    theDay = theDate.getUTCSeconds();

console.log(theDay);
*/

// getMilliseconds() //

/*
var theDate = new Date(),
    
    theDay = theDate.getMilliseconds();

console.log(theDay);
*/

/*
var theDate = new Date(),
    
    theDay = theDate.getUTCMilliseconds();

console.log(theDay);
*/

// getTime() //

/*
var theDate = new Date(),
    
    theDay = theDate.getTime();

console.log(theDay);
*/

/*
var theDate = new Date("Jan 07 1984"),
    
    theDay = theDate.getTime();

console.log(theDay);
*/


// getTimezoneOffset() //

/*
var theDate = new Date(),
    
    theDay = theDate.getTimezoneOffset();

console.log(theDay);
*/




//=================================================================================================================//
// Ex. For Date Function  // ============== SET


//=============================//
//=============================//
/*

     setDate(Day[Requier]); // Set Day Of The Month 1-31
     setUTCDate(Day[Requier]); // Set Day Of The Month 1-31 in UTC
     
     setFullYear(Year[Requier], Month[Optional], Day[Optional]); // Set The Full Year  2017
     setUTCFullYear(Year[Requier], Month[Optional], Day[Optional]); // Set The Full Year  2017 in UTC
     
     setHours(Hours[Requier], Minutes[Optional], Seconds[Optional], Milliseconds[Optional]); // Set Hours 0-59
     setUTCHours(Hours[Requier], Minutes[Optional], Seconds[Optional], Milliseconds[Optional]); // Set Hours 0-59 in UTC
     
     setMinutes(Minutes[Requier], Seconds[Optional], Milliseconds[Optional]); // Set Minutes 0-59
     setUTCMinutes(Minutes[Requier], Seconds[Optional], Milliseconds[Optional]); // Set Minutes 0-59   in UTC
     
     setSeconds(Seconds[Requier], Milliseconds[Optional]); // Set Seconds 0-59
     setUTCSeconds(Seconds[Requier], Milliseconds[Optional]); // Set Seconds 0-59    in UTC
     
     setMilliseconds(Milliseconds[Requier]); // Set Milliseconds 0-999
     setUTCMilliseconds(Milliseconds[Requier]); // Set Milliseconds 0-999    in UTC
     
     setMonth(Month[Requier], Day[Optional]); // Set Month
     setUTCMonth(Month[Requier], Day[Optional]); // Set Month    in UTC


*/
//=============================//
//=============================//

// setDate(Day[Requier]) //

// If I Write 0 Will Give Me The Last Day In Last Month
// If I Write 31 And The Month Is 30 Day Will Give Me The First Day In Next Month

/*
var theDate = new Date();
    
    theDate.setDate(0);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setDate(31);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setDate(10);

console.log(theDate);
*/

// setFullYear(Year[Requier], Month[Optional], Day[Optional]) //

/*
var theDate = new Date();
    
    theDate.setFullYear(2017);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setFullYear(2017, 0);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setFullYear(2017, 11);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setFullYear(2017, 12);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setFullYear(2017, 10, 31);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setFullYear(2017, 10, -31);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setFullYear(2017, 10, -10);

console.log(theDate);
*/

// setHours(Hours[Requier], Minutes[Optional], Seconds[Optional]) //

/*
var theDate = new Date();
    
    theDate.setHours(0);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setHours(10);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setHours(24);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setHours(10,30,10);

console.log(theDate);
*/

// setMinutes(Minutes[Requier], Seconds[Optional], Milliseconds[Optional]) //

/*
var theDate = new Date();
    
    theDate.setMinutes(0);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setMinutes(10);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setMinutes(60);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setMinutes(10,45);

console.log(theDate);
*/

// setSeconds(Seconds[Requier], Milliseconds[Optional]) // 

/*
var theDate = new Date();
    
    theDate.setSeconds(0);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setSeconds(10);

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setSeconds(60);

console.log(theDate);
*/


// setMilliseconds(Milliseconds[Requier])  //

/*
var theDate = new Date();
    
    theDate.setMilliseconds(600000); // 10 Minutes More Than Now

console.log(theDate);
*/

// setMonth(Month[Requier], Day[Optional])  //

/*
var theDate = new Date();
    
    theDate.setMonth(10); 

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setMonth(12); 

console.log(theDate);
*/

/*
var theDate = new Date();
    
    theDate.setMonth(10, 7); 

console.log(theDate);
*/

//=================================================================================================================//
// Ex. For Date Function  // ============== Now()

//=============================//
//=============================//
/*

      now()  // Colect Milliseconds From 1970 To Now
      
      parse("YYYY-MM-DD hh:mm:ss") // Colect Milliseconds From My Date  To Now
      
      toISOString() // Convert Normal Date To ISO (YYYY-MM-DD hh:mm:ss)
      
      toDateString()

*/
//=============================//
//=============================//

/*
var theDate = new Date(),
    
    now = Date.now();

console.log(now);
*/

/*
var theDate = new Date(),
    
    now = Date.now(),
    
    min = 1000 * 60,
    
    hour = min * 60,
    
    day = hour * 24,
    
    month = day * 30,
    
    year = month * 12;

console.log(Math.round(now / year));
*/


// Parse("") //

/*
var theDate = new Date(),
    
    myDate = Date.parse("07 Jan 1984 04:30:00"),
    
    min = 1000 * 60,
    
    hour = min * 60,
    
    day = hour * 24,
    
    month = day * 30,
    
    year = month * 12;

console.log(myDate / year);
*/

/*
var theDate = new Date(),
    
    myDate = Date.parse("07 Jan 1984 04:30:00"),
    
    min = 1000 * 60,
    
    hour = min * 60,
    
    day = hour * 24,
    
    month = day * 30,
    
    year = month * 12;

console.log(myDate / month);
*/


// toISOString() //

/*
var theDate = new Date(),
    
    myIso = theDate.toISOString();

console.log(myIso);
*/

// toDateString() //

/*
var theDate = new Date(),
    
    myD = theDate.toDateString();

console.log(myD);
*/


// toTimeString() //

/*
var theDate = new Date(),
    
    myT = theDate.toTimeString();

console.log(myT);
*/

//=================================================================================================================//
// Ex. For  Numbers Intro // ==============

/*
var X = 100,

    Z = X.toString();

console.log(Z);

console.log(typeof(Z));
*/

//----------------------//

/*
var X = 10,

    Z = X.toExponential();

console.log(Z);

console.log(typeof(Z));
*/

// 8 * (100)  //
/*
var X = 800,

    Z = X.toExponential();

console.log(Z);

console.log(typeof(Z));
*/

// 8 * (1000)  //
/*
var X = 8000,

    Z = X.toExponential();

console.log(Z);

console.log(typeof(Z));
*/

// 8.00 * (1000)  //
/*
var X = 8000,

    Z = X.toExponential(2);

console.log(Z);

console.log(typeof(Z));
*/

// 4.56 * 100 //
/*
var X = 456,

    Z = X.toExponential();

console.log(Z);

console.log(typeof(Z));
*/

//----------------------//


// toFixed(0) //
/*
var X = 99.56,

    Z = X.toFixed(0);

console.log(Z);

console.log(typeof(Z));
*/

// toFixed(1) //
/*
var X = 99.56,

    Z = X.toFixed(1);

console.log(Z);

console.log(typeof(Z));
*/

/*
var X = 99.5151,

    Z = X.toFixed(1);

console.log(Z);

console.log(typeof(Z));
*/

/*
var X = 99.5151,

    Z = X.toFixed(2);

console.log(Z);

console.log(typeof(Z));
*/

//---------------------------//

// parseInt() //

/*
var Z = parseInt("100px");

console.log(Z);

console.log(typeof(Z));
*/

// Wrong To Be String Befor Number//
/*
var Z = parseInt("Year 33");

console.log(Z);

console.log(typeof(Z));
*/

/*
var Z = parseInt("33 Year") / 3;

console.log(Z);

console.log(typeof(Z));
*/


/*===================================================================================================================*/