var hamam = [
              {
            "personNumber" :"19840107-1298",
                "firstName"    :"Hamam",
                "lastName"     :"Hamou",
                "dateOfBurth"  :"1984-01-07",
                "contry"       :"Syria",
                "statusM"      :"Marrege",
                "graduate"     :["Busniess Adminstration", "Telesales Marketing"]
                      
              }
            ]
console.log(hamam);
/*
var myButton = document.getElementById('zar'),

    myInfo = document.getElementById('info');


    myButton.onclick = function () {


    }
*/

/*
// Ex. For Object In Javascript

var car = {
	"name" : "saphira",
	"model" : "Honda"
}


document.write("<h1>" + car.name + "</h1>");



// Ex. For Array In Javascript

var favCar = ["Honda","Mercedes"];

document.write("<h2>" + favCar[0] + "</h2>");
*/

/*
// Ex. For Using Object And Array Together

var cars = [
             {
             	"name" : "Honda",
             	"model": "2018"
             },
             {
             	"name" : "Mercedes",
             	"model" : "2000"
             }
           ]

document.write("<h1>" + cars[0].name + "</h1>");
*/

/*
// The Way To Recive The Information From File JSON
// use json direct on load
var xReq = new XMLHttpRequest();
xReq.open('GET','personal.json');  // open excipting tow Parameter (GET Or Post) And Dir Of The File

xReq.onload = function(){

    var xData = xReq.responseText;
	  //document.write(xReq.responseText);
    document.write(xData);

};
xReq.send();
*/

// use json and ajax by button function
var myButton = document.getElementById('zar'),

    myInfo = document.getElementById('info');
var pageNum = 1;  // to use Incement To The Page File 

var xReq = new XMLHttpRequest();  
// function build id Json To Bring Request From File By Using New Object 

xReq.open('GET','cars-' + pageNum + '.json');  // use cimy column to Incres page number  
// open excipting tow Parameter (GET Or Post) And Dir Of The File

myButton.addEventListener('click', function() {   // To Use Button In Calls
    
    xReq.onload = function(){

// Make Variable xData To Use Function JSON.parse() To Have The Information In Cubles By 
// Useing The Function resposeText in My Requestes
   var xData = JSON.parse(xReq.responseText);

             // document.write(xData[0].name);

             // info.innerHTML = xData[0].name + xData[0].model;
   addHtml(xData);  // Makeing Function Down 

};
pageNum++;
xReq.send();


if (pageNum > 3) {

	myButton.classList.add("hide");   
// use class in css File hide To stop the button function if is larger Than Page File Number

    myButton.style.backgroundColor = '#eee';
    myButton.style.color = 'lightGray';
}

});

function  addHtml(data){  // Function To Add Data In HTML          
	var htmlText = "";         
	for (var i = 0; i < data.length; i++) {             
          htmlText += "<p class='red'>" + data[i].name + " is a: " + data[i].model +
 " <br> that has 4x4 cars like: "; 
 for (var j = 0; j < data[i].type.four.length; j++) {
 	
 	if (j == 0) {
 		htmlText += data[i].type.four[j];
 	} else {
 		htmlText += " and " + data[i].type.four[j];
 	       }
 }
 htmlText += " <br> and Salon cars like: ";
 for (var j = 0; j < data[i].type.salon.length; j++) {
 	
 	if (j == 0) {
 		htmlText += data[i].type.salon[j];
 	} else {
 		htmlText += " and " + data[i].type.salon[j];
 	       }
 }
 htmlText += "<br> Which was made in the year: " + data[i].year + " . ";
 htmlText += "<hr></p>"; 
	}         

	info.insertAdjacentHTML('beforeend', htmlText); // exccipting Where I add And What adding
	// Build in Function To Add Info In info HTML 


}

