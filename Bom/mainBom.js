///*global console, window*/


//=================================================================================================================//
// Bom EX. For Window Object   //==============

//=============================//
//=============================//
/*
    
   -window Object Is The Browser Window  
   -window Object Supported By All Browsers  
   -window Object Has Properties & Method Not Supported In All Browsers
   -Window Is The Default Object Of Browser
   -All Global Js Objects Are Member Of Window Object
   		Ex: When I write In Console  
								   alert('Hello');
								   Is Same 
								   Window.alert('Hello');

*/
//=============================//
//=============================//

/*
console.log(alert('Hello'));
console.log(window.alert('Hello'));
*/

// console.log(window.document.title);

/*
window.document.title = 'New Title';
console.log(window.document.title);
*/

/*
window.document.getElementById('o');
console.log(window.document.getElementById('o'));
*/

/*
window.print();
*/

//=================================================================================================================//
// Bom EX. For Window Methods - Alert, Prompt, Confirm   //==============

//=============================//
//=============================//
/*
    
	alert('Text');
	
	alert('Text1 /n Text2 /n Text3');
     

*/
//=============================//
//=============================//

// alert('Hello');
	
// alert('Mr. \n Hamam \n Hamou');

// alert('Mr. \nHamam \nHamou');

// confirm('Are You Sure You Want To Do This Action');

// console.log(confirm('Are You Sure You Want To Do This Action'));

/*
var ask = window.confirm('Are You Sure You Want To Open \n Google');

if (ask === true) {
	
	// window.console.log('ok');
	
	window.location.href = 'https://www.google.com'
	
} else {
	
	// window.console.log('cancel');
	
       window.console.log('Sorry You Choose To Not Open Google');
}
*/

// window.prompt('What Is Your Name?', 'My Name Is:');

// window.console.log(window.prompt('What Is Your Name?', 'My Name Is:'));

//=================================================================================================================//
// Bom EX. For  Window Methods - SetTimeOut  ,  ClearTimeOut  //==============

//=============================//
//=============================//
/*
    
     setTimeout(Function, Millisecond, param1, param2, param3);
	 
	 clearTimeout(Id Or Number Of SetTimeOut);

*/
//=============================//
//=============================//

/*
setTimeout(function () {
	
	'use strict';
	
	window.console.log('Hello After 3 Seconds');
	
}, 3000);
*/

/*
function writeMsg() {
	
	'use strict';
	
	window.console.log('Hello After 3 Seconds');
	
}

setTimeout(writeMsg, 3000);
*/

/*
function writeMsg() {
	
	'use strict';
	
	window.console.log('Hello After 3 Seconds');
	
}

var myTime = setTimeout(writeMsg, 3000);

window.console.log(myTime);
*/

/*
var myButton = document.getElementById('click');

function writeMsg() {
	
	'use strict';
	
	window.console.log('Hello After 3 Seconds');
	
}

var myTime = setTimeout(writeMsg, 3000);

window.console.log(myTime);

myButton.onclick = function () {

	'use strict';
	
	clearTimeout(myTime);
	
};
*/

//=================================================================================================================//
// Bom EX. For Window Methods -  setInterval , clearInterval  //==============

//=============================//
//=============================//
/*
    
     setInterval(Function, Millisecond, param1, param2, param3);
	 
	 clearInterval(Id Or Number Of SetInterval);

*/
//=============================//
//=============================//

/*
var myButton = document.getElementById('click');

function writeMsg() {
	
	'use strict';
	
	window.console.log('Hello Every 2 Seconds');
	
}

var myTime = setInterval(writeMsg, 2000);

// window.console.log(myTime);

myButton.onclick = function () {

	'use strict';
	
	clearInterval(myTime);
	
};
*/

/*
var myDiv = document.getElementById('show'),
	
	myTime;

function cuntDown() {
	
	'use strict';
	
	if (myDiv.textContent <= 0) {
		
		myDiv.textContent = 'Done...';
		
		clearInterval(myTime);
		
	} else {
		
		myDiv.textContent = myDiv.textContent - 1;
		
	}
	
	
}

var myTime = setInterval(cuntDown, 1000);
*/



//=================================================================================================================//
// Bom EX. For Window Methods -  Open   //==============

//=============================//
//=============================//
/*
    
     window.open();
	 
     window.open(Url, Name Or Attribute, Specification, History Replace);
	 
	 
	 -- URL:  "https://www.WebName.com"
	 -- Name Or Attribute:
	 Name: "Any Name To Be Referar"   , Attribut: "_blunk"  OR  "_self"  OR  "_top" 
	 -- Specification: 
	 Width In Pixels [ Only Number Without Px ] And Use Comma (,) If I write Much 
	  
	  "width=000,height=000,left=000,top=000,menubar=no(Or yes),status=yes(OR no)"
	 
	 -- History Replace  
	 
	 "true"  Or "false"
	 

*/
//=============================//
//=============================//

/*
document.getElementById('open').onclick = function () {

	'use strict';
	
	window.open("", "", "", "");
	
};
*/

/*
document.getElementById('open').onclick = function () {

	'use strict';
	
	window.open("https://www.google.com", "", "", "");
	
};
*/

/*
document.getElementById('open').onclick = function () {

	'use strict';
	
	window.open("https://www.google.com", "hamam", "", "");
	
};
*/

/*
document.getElementById('open').onclick = function () {

	'use strict';
	
	window.open("https://www.google.com", "_blank", "", "");
	
};
*/

/*
document.getElementById('open').onclick = function () {

	'use strict';
	
	window.open("https://www.google.com", "_self", "", "");
	
};
*/

/*
document.getElementById('open').onclick = function () {

	'use strict';
	
	window.open("https://www.google.com", "_top", "", "");
	
};
*/

/*
document.getElementById('open').onclick = function () {

	'use strict';
	
	window.open("https://www.google.com", "_blank", "width=400", "");
	
};
*/

/*
document.getElementById('open').onclick = function () {

	'use strict';
	
	window.open("https://www.google.com", "_blank", "width=400,height=400,left=400,top=400,menubar=yes,status=yes", "true");
	
};
*/

//=================================================================================================================//
// Bom EX. For Window Methods - scrollBy , scrollTo   //==============

//=============================//
//=============================//
/*
    
	scrollBy(X, Y) // Number Only In Pixels
	
	scrollX   // Horizontal  - Numbers In  [+]Right     [-]Left
	
	scrollY   // Vertical    - Numbers In  [+]Down      [-]Top
     
	scrollTo(X, Y) // Number Only In Pixels 

*/
//=============================//
//=============================//

/*
document.getElementById('scroll').onclick = function () {

	'use strict';
	
	window.scrollBy(200, 150);
	
	window.console.log('Window Scrolled Left ' + window.scrollX);
	
	window.console.log('Window Scrolled Top ' + window.scrollY);
	
};
*/

/*
document.getElementById('scroll').onclick = function () {

	'use strict';
	
	window.scrollBy(-200, -150);
	
	window.console.log('Window Scrolled Left ' + window.scrollX);
	
	window.console.log('Window Scrolled Top ' + window.scrollY);
	
};
*/

/*
document.getElementById('scroll').onclick = function () {

	'use strict';
	
	window.scrollTo(200, 150);
	
	window.console.log('Window Scrolled Left ' + window.scrollX);
	
	window.console.log('Window Scrolled Top ' + window.scrollY);
	
};
*/



//=================================================================================================================//
// Bom EX. For Window Methods - Stop , Close , Focus   //==============

//=============================//
//=============================//
/*
    
     window.stop();
     window.close();
     window.focus();

*/
//=============================//
//=============================//

// Witing In Console Not Here //

// window.stop();

// var myXWindow = window.open('http://www.google.com', 'Google', 'width=300,height=300');

      // myXWindow.close();

      // myXWindow.focus();


//=================================================================================================================//
// Bom EX. For  Window Properties - [inner, outer]Height & [inner, outer]Width  //==============

//=============================//
//=============================//
/*
    
	Window.innerHeight;
	Window.outerHeight;
	Window.innerWidth;
	Window.outerWidth;
     

*/
//=============================//
//=============================//

/*
var innerH = Window.innerHeight;

console.log(innerH);
*/

/*
window.console.log(Window.innerHeight);
window.console.log(Window.outerHeight);
window.console.log(Window.innerWidth);
window.console.log(Window.outerWidth);
*/



//=================================================================================================================//
// Bom EX. For Window Properties - pageXOffset & pageYOffset   //==============

//=============================//
//=============================//
/*
    
	window.pageXOffset     ==    scrollX
	
	window.pageYOffset     ==    scrollY
     

*/
//=============================//
//=============================//


// window.console.log(window.pageXOffset);

// window.console.log(window.pageYOffset);


//=================================================================================================================//
// Bom EX. For  window Location Proerties ( href )  //==============

//=============================//
//=============================//
/*
    window.location.href;
	
	location.href
	-absolute URL
	-Page WithIn The Current Web Page
	-Hash Id WithIn The Page
	-Protocol [FTP, Mail, File]
	-Redirect To Main Page 
     

*/
//=============================//
//=============================//

// window.console.log(window.location.href);

// window.console.log(window.location.href = 'http://www.google.com');

// window.console.log(window.location.href = 'indexDom.html');

// window.console.log(window.location.href = '#hamam');

// window.console.log(window.location.href = 'mailto:hamamhamou.rs@gmail.com');

//=================================================================================================================//
// Bom EX. For Window Location Proerties  Hash , Host   //==============

//=============================//
//=============================//
/*
    
    location.host;
	
    location.hostname;
	
    location.hash; 

*/
//=============================//
//=============================//



// window.console.log(window.location.host);

// console.log(location.pathname);

// window.console.log(window.location.hash);

/*
if (window.location.hash.indexOf('chat') > -1) {
	
	window.console.log('Congratz You Are Comming From Chat Link');
}
*/


//=================================================================================================================//
// Bom EX. For  Window Location Proerties - Protocol, Search, Pathname  //==============

//=============================//
//=============================//
/*
    
	location.protocol;
	
	location.search;
	
	location.pathname;
     

*/
//=============================//
//=============================//

// console.log(location.protocol);

// console.log(location.protocol = 'https');
// console.log(location.protocol = 'http');
// console.log(location.protocol = 'mailto');
// console.log(location.protocol = 'ftp');


// console.log(location.search);

// console.log(location.pathname);



//=================================================================================================================//
// Bom EX. For Location Methods - Reload, Replace, Assign    //==============

//=============================//
//=============================//
/*
    
	location.reload();
	
	location.reload(false);    // Default
	location.reload(true);
	
	location.assign('URL');
	
	location.replace('URL');
     

*/
//=============================//
//=============================//


// location.reload();

// location.reload(false);    

// location.reload(true);

// location.assign('http://www.google.com');
	
// location.replace('http://www.google.com');

//=================================================================================================================//
// Bom EX. For History Methods - Back , Forword , Go   //==============

//=============================//
//=============================//
/*
    
     history.length;
     history.back();
     history.forword();
     history.go(Number In - Or +);
     history.go(URL);

*/
//=============================//
//=============================//

// history.length;

// history.back();

// history.forword();

// history.go(-2);

// history.go(2);

// history.go('http://www.google.com');

//=================================================================================================================//
// Bom EX. For Navigator Properties   //==============

/*

window.console.log(navigator.appCodeName);
window.console.log(navigator.appName);
window.console.log(navigator.appVersion);
window.console.log(navigator.platform);
window.console.log(navigator.cookieEnabled);
window.console.log(navigator.language);
window.console.log(navigator.online);
window.console.log(navigator.product);
//window.console.log(navigator.geolocation);

*/




//=================================================================================================================//
// Bom EX. For Window Screen  //==============

//=============================//
//=============================//
/*
    
     screen.width
     screen.height
	 screen.availHeight
	 screen.availWidth
	 screen.colorDepth
	 screen.pixelDepth

*/
//=============================//
//=============================//

/*
window.console.log('Screen Width Is ' + screen.width);
window.console.log('Screen Height Is ' + screen.height);
window.console.log('Screen Availble Height Is ' + screen.availHeight);
window.console.log('Screen Availble Width Is ' + screen.availWidth);
window.console.log('Screen Color Depth Is ' + screen.colorDepth);
window.console.log('Screen Pixel Depth Is ' + screen.pixelDepth);
*/


//=================================================================================================================//
// Bom EX. For Cookies  //==============

//=============================//
//=============================//
/*
    
     For Reading Cookies:   document.cookie;
	 For Adding Cookies:  document.cookie = "Name=Value; expires=Date; Path=/";
	 
	 
	 to find more script search in google for : florian/cookies.js
	 

*/
//=============================//
//=============================//

// console.log(document.cookie);

// document.cookie = "favColor=#F00";
// console.log(document.cookie);

// ---- document.cookie = "Name=Value; expires=Date; Path="; ---- //
// document.cookie = "favFont=Droid; Sun Jan 07 2018 12:10:24 GMT+0100; path=/";
// console.log(document.cookie);


//=================================================================================================================//
//==============================================//    The End    //================================================//
//=================================================================================================================//