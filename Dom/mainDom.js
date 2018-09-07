// /*jslint plusplus: true evil: true */
// /*global console, makeStrong*/


//=================================================================================================================//
// First EX. How To Create Element In HTML //==============

/*
var myP = document.createElement('P'),
    
    myPText = document.createTextNode('This Paragraph Created By Javascript');

myP.appendChild(myPText);

document.body.appendChild(myP);
*/

//=================================================================================================================//
// EX. For  Find Element By [ID , Class, Tag]   //==============


//=====================================================//
//=====================================================//
/*

[1] - document.getElementById()
[2] - document.getElementsByTagName()
[3] - document.getElementsByClassName()      // Not Copaitble With IE 8
[3] - document.querySelectorAll()            // Not Copaitble With IE 8

*/
//=====================================================//
//=====================================================//

//=================================//
// [1] - document.getElementById() //
/*
var myDiv = document.getElementById('test');


myDiv.innerHTML = "Changed By Javascript";
*/

//=================================//
// document.getElementsByTagName() //
/*
var myElement = document.getElementsByTagName('div');

console.log(myElement.length);
*/

/*
var myElement = document.getElementsByTagName('p');

myElement[0].innerHTML = "Changed By Javascript";
*/

/*
var myElement = document.getElementsByTagName('p');

myElement[1].innerHTML = "Changed By Javascript";
*/

//===================================//
// document.getElementsByClassName() //

/*
var myElement = document.getElementsByClassName('test');

myElement[0].innerHTML = "Changed By Javascript";
*/

/*
var myElement = document.getElementsByClassName('test');

myElement[2].innerHTML = "Changed By Javascript";
*/

//=============================//
// document.querySelectorAll() //

/*
var myElement = document.querySelectorAll('.test');

myElement[0].innerHTML = "Changed By Javascript";
*/

/*
var myElement = document.querySelectorAll('.test');

myElement[2].innerHTML = "Changed By Javascript";
*/

/*
var myElement = document.querySelectorAll('div.test');

myElement[1].innerHTML = "Changed By Javascript";
*/

/*
var myElement = document.querySelectorAll('#ex');

myElement[0].innerHTML = "Changed By Javascript";
*/

//=================================================================================================================//
// EX. For  Find Element By Object Collection    //============== Oop

//=============================//
//=============================//
/*
    
   1- document.title
   2- document.images
   3- document.forms
   4- document.body
   5- document.anchors
   6- document.links

*/
//=============================//
//=============================//

//================//
// document.title //
/*
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.title;
*/

//================//
// document.images //
/*
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.images.length;
*/

/*
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.images[0].src;
*/

/*
var myDiv = document.getElementById('show'),
    
    i;

for (i = 0; i < document.images.length; i++) {
    
    document.write(document.images[i].src);
}
*/

/*
var myDiv = document.getElementById('show'),
    
    i;

for (i = 0; i < document.images.length; i = i + 1) {
    
    document.write(document.images[i].src + '<br>');
}
*/

//================//
// document.forms //
/*
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.forms.length ;
*/

/*
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.forms[0].x2.value;
*/

/*
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.forms[0].x1.type;
*/

/*
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.forms[1].z1.value;
*/

//================//
// document.body //
/*
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.body.innerHTML;
*/

/*
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.body.innerText;
*/

/*
var myDiv = document.getElementById('show');

myDiv.innerText = document.body.innerText;
*/

//-------------------------------------------------------------// 
// To Print Every Thing Inside HTML Even With TAGS and Comment //
/*
var myDiv = document.getElementById('show');

myDiv.innerText = document.body.innerHTML;
*/
//------------------------------------------//

/*
var myDiv = document.getElementById('show');

myDiv.innerText = document.body.innerText;

if (document.body.innerText.indexOf("HAMAM") > -1) {
    
    console.log("Yes This String Is Exsist");
}
*/

//==================//
// document.anchors //
/*
var myDiv = document.getElementById('show');

myDiv.innerText = document.anchors.length;
*/

//==================//
// document.links //
/*
var myDiv = document.getElementById('show');

myDiv.innerText = document.links.length;
*/


//=================================================================================================================//
// EX. For   Set / Get Element Content    //==============


//=============================//
//=============================//
/*
    
 - innerText  // Not Stander
 - outerText  // Not Stander
 
 
 
 1-  innerHTML
 2-  outerHTML
 3-  textContent
 
 
 // Get HTML Content: 
                    Element.innerHTML
                    
 // Get Text Content: 
                    Element.textContent

*/
//=============================//
//=============================//

// innerHTML //
//-----------//
// Get //
/*
var myDiv = document.getElementById('main');

console.log(myDiv.innerHTML);
*/

// Set //
/*
var myDiv = document.getElementById('main');

myDiv.innerHTML = "This Is Change From Js";
*/

/*
var myDiv = document.getElementById('main');

myDiv.innerHTML = "This Is Change From Js<span>Text</span>";
*/

//------------------------------------------//

// textContent // 
//-------------//

// Get //
/*
var myDiv = document.getElementById('main');

console.log(myDiv.textContent);
*/

// Set //
/*
var myDiv = document.getElementById('main');

myDiv.textContent = "This Is Change From Js";
*/

/*
var myDiv = document.getElementById('main');

myDiv.textContent = "This Is Change From Js<span>Text</span>";
*/

//=================================================================================================================//
// EX. For  Set / Get Element Attribute Value   //==============

//=============================//
//=============================//
/*
    
   Element.Attribute     // Direct Method

*/
//=============================//
//=============================//

/*
var myDiv = document.querySelector('div');

console.log(myDiv);

myDiv.id = 'id-from-js';
myDiv.className = 'class-from-js';
*/


/*
var myImage = document.querySelector('img');

myImage.src;

console.log(myImage);
*/


/*
var myImage = document.querySelector('img');

myImage.src = 'http://placehold.it/100/100';

myImage.alt = 'Photo';

myImage.title = 'My Title';

console.log(myImage);
*/


//=============================//
//=============================//
/*
    
   Element.getAttribute('Atribute Name');     
   Element.setAttribute('Atribute Name', Attribute Value);     

*/
//=============================//
//=============================//

// getAttribute('Atribute Name') //
/*
var myImage = document.querySelector('img');

console.log(myImage.getAttribute('alt'));
*/


// setAttribute('Atribute Name', Attribute Value) //
/*
var myImage = document.querySelector('img');

myImage.setAttribute('alt', 'hamam');
*/

/*
var myImage = document.querySelector('img');

myImage.setAttribute('src', 'http://placehold.it/100/100');
*/

/*
var myImage = document.querySelector('img');

myImage.setAttribute('title', 'Hamam');
*/

//=================================================================================================================//
// EX. For  Has & Remove Attribute   //==============

//=============================//
//=============================//
/*
    
   hasAttribute('Attribute Name');   
   removeAttribute('Attribute Name');   

*/
//=============================//
//=============================//

// hasAttribute('Attribute Name') //

/*
var myImage = document.querySelector('img');

if (myImage.hasAttribute('alt')) {
    
    console.log('Yes This Element Has This Attribute');
} else {
    
    console.log('No This Element Has Not This Attribute');
}
*/

/*
var myImage = document.querySelector('img');

if (myImage.hasAttribute('alt')) {
    
    if (myImage.alt === "") {
        
        myImage.setAttribute('alt', 'Default Alternate Text');
    }
} 
*/

// removeAttribute('Attribute Name') //

/*
var myImage = document.querySelector('img');

if (myImage.hasAttribute('alt')) {
    
    myImage.removeAttribute('alt');
    
} 
*/

/*
var myImage = document.querySelector('img');

if (myImage.hasAttribute('alt')) {
    
    if (myImage.alt === "") {
        
        myImage.removeAttribute('alt');
    }
} 
*/

//=====================================================================================================================//
// EX. For Element ClassList [Item, Contains, Length]    //==============  Element.classList    // Not Supported In IE 9


//=============================//
//=============================//
/*
    
     Element.classList.length;
     Element.classList.contains('Class Attribute Value');
     Element.classList.item('Class Attribute Value');

*/
//=============================//
//=============================//

// Element.classList //
/*
var myDiv = document.getElementById('main');

console.log(myDiv.classList);
*/

// Length //
/*
var myDiv = document.getElementById('main');

console.log(myDiv.classList.length);
*/

// contains('Attribute Name') //
/*
var myDiv = document.getElementById('main');

if(myDiv.classList.contains('hamam')) {
    
    console.log('Yes This Div Contain Class Call hamam');
} else {
    
    console.log('No This Div Not Contain Class Call hamam');
}
*/

// item('Attribute Name Index Number') //
/*
var myDiv = document.getElementById('main');

console.log(myDiv.classList.item(0));
*/

/*
var myDiv = document.getElementById('main');

console.log(myDiv.classList.item(myDiv.classList.length - 1));
*/

//=================================================================================================================//
// EX. For  Element ClassList [Add, Remove, Toggle]    //==============


//=============================//
//=============================//
/*
    
     Element.classList.add('Class Value1', 'Class Attribute Value2', 'Class Attribute Value3');
     Element.classList.remove('Class Attribute Value1', 'Class Attribute Value2','Class Attribute Value3');
     Element.classList.toggle('Class Attribute Value');
     

*/
//=============================//
//=============================//




// Add //
/*
var myDiv = document.getElementById('main');

myDiv.className = 'test';
*/

/*
var myDiv = document.getElementById('main');

myDiv.className += ' test';
*/

/*
var myDiv = document.getElementById('main'),
    
    myButton = document.querySelector('button');

myButton.onclick = function () {
    
    "use strict";
      
  myDiv.classList.add('js');   
    
};
*/

// Remove //
/*
var myDiv = document.getElementById('main'),
    
    myButton = document.querySelector('button');

myButton.onclick = function () {
    
    "use strict";
      
  myDiv.classList.remove('hamam');   
    
};
*/

/*
var myDiv = document.getElementById('main'),
    
    myButton = document.querySelector('button');

myButton.onclick = function () {
    
    "use strict";
      
  myDiv.classList.remove('show','cool','hamam');   
    
};
*/


// Toggle //
/*
var myDiv = document.getElementById('main'),
    
    myButton = document.querySelector('button');

myButton.onclick = function () {
    
    "use strict";
      
  myDiv.classList.toggle('hamam');   
    
};
*/

/*
var myDiv = document.getElementById('ourtext'),
    
    myButton = document.querySelector('button');

myButton.onclick = function () {
    
    "use strict";
      
  myDiv.classList.toggle('hidden');   
    
};
*/

//=================================================================================================================//
// EX. For Element Children  |  Children , ChildNodes     //==============


//=============================//
//=============================//
/*
    
    // To Bring The Tags Element In Side Perant //
    //------------------------------------------//
    
     Element.childElementCount;   ===  Element.children.length;
     
     Element.children;      Element.children[Index Num];
     
    
    
     // To Bring The Text In Side Children //
     //------------------------------------//
     
     Element.childNodes; 
     Element.childNodes[Index Num]; 

*/
//=============================//
//=============================//

// Element.childElementCount //
/*
var myDiv = document.getElementById('main');

console.log(myDiv.childElementCount);
*/

/*
var myDiv = document.getElementById('main');

console.log(myDiv.children.length);
*/

// Element.children //
/*
var myDiv = document.getElementById('main');

console.log(myDiv.children);
*/

/*
var myDiv = document.getElementById('main');

console.log(myDiv.children[0]);
*/

/*
var myDiv = document.getElementById('main');

console.log(myDiv.children[1].textContent);
*/


// Ex From Me Hamam Have Small Wrong But I like //
/*
var myDiv = document.getElementById('main');

console.log(myDiv.children[1].classList.add('hamam'));

if (myDiv.children[1].hasAttribute('hamam')) {
    
    console.log('Yes');
} else {
    
    console.log('No');
}
*/

// Element.childNodes //

/*
var myDiv = document.getElementById('main');

console.log(myDiv.childNodes.length);
*/

/*
var myDiv = document.getElementById('main');

console.log(myDiv.childNodes);
*/

/*
var myDiv = document.getElementById('main');

console.log(myDiv.childNodes[0]);
*/

//=================================================================================================================//
// EX. For  Element Children  |  [ First / Last ] Children , [ First / Last ] ElementChild     //==============

//=============================//
//=============================//
/*
    
   Element.firstChild;  ===  Element.childNode[0];
                                                          //  Any Thing Text Element Comment What Is Comming In Your Way
   Element.lastChild;
   
   //-----------------------------------//
   
   Element.firstElementChild;
                                           // Exsact Element Not Any Thing Else
   Element.lastElementChild;

*/
//=============================//
//=============================//

/*
var myDiv = document.getElementById('main');

console.log(myDiv.firstChild);
*/

/*
var myDiv = document.getElementById('main');

console.log(myDiv.childNodes[0]);
*/

/*
var myDiv = document.getElementById('main');

console.log(myDiv.lastChild);
*/

/*
var myDiv = document.getElementById('main');

console.log(myDiv.firstElementChild);
*/

/*
var myDiv = document.getElementById('main');

console.log(myDiv.lastElementChild);
*/



//=================================================================================================================//
// EX. For   Element Children  |  AppendChild   //==============


//=============================//
//=============================//
/*
    
     Element.appendChild(Element OR Text);
     
     // With Create I Can Use Append In Wonderfull Way  By Useing 
     
    - Element = document.createTextNode('Text....');
    
    - Element = document.createElement('Element Tag Name');

*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main'),
    
    myNewElement = document.createElement('div');


myMainDiv.appendChild(myNewElement);
*/

/*
var myMainDiv = document.getElementById('main'),
    
    // Create Div Element
    
    myNewElement = document.createElement('div'),
    
    // Create Text Node
    
    myText = document.createTextNode('Hello From Javascript');
    
// Append Text To The New Element

myNewElement.appendChild(myText);

// Append The New Element To My Main Div

myMainDiv.appendChild(myNewElement);
*/

/*
var myMainDiv = document.getElementById('main'),
    
    // Create Div Element
    
    myNewElement = document.createElement('div'),
    
    // Create Another Paragraph
    
    myNewP = document.createElement('p'),
    
    
    // Create Text Node In Div
    
    myTextInDiv = document.createTextNode('Hello From Javascript In Div Child'),

// Create Text Node In Paragraph
    
    myTextInP = document.createTextNode('Hello From Javascript In Paragraph Child');
    
// Append Text To The New Element Div 

myNewElement.appendChild(myTextInDiv);

// Append Text To The New Element P

myNewP.appendChild(myTextInP);

// Append The New Element Div To My Main Div

myMainDiv.appendChild(myNewElement);

// Append The New Paragraph To My Main Div

myMainDiv.appendChild(myNewP);
*/

/*
var myDivContainer = document.getElementById('container'),
    
    
    myFirstChildH1 = document.createElement('h1'),
    
    
    myFirstChildD = document.createElement('div'),
    
    
    myFirstChildP = document.createElement('p'),
    
    
    textOnFirstChildH1 = document.createTextNode('Hello In First Child Header'),
    
    
    textOnFirstChildD = document.createTextNode('Hello In First Child Div'),
    
    
    textOnFirstChildP = document.createTextNode('Hello In First Child P');


myFirstChildH1.appendChild(textOnFirstChildH1);


myFirstChildD.appendChild(textOnFirstChildD);


myFirstChildP.appendChild(textOnFirstChildP);


myDivContainer.appendChild(myFirstChildH1);


myDivContainer.appendChild(myFirstChildD);


myDivContainer.appendChild(myFirstChildP);


if (myFirstChildD !== myFirstChildD.hasAttribute) {
    
    
    myFirstChildD.setAttribute('class', 'hamam');
}
*/


//=================================================================================================================//
// EX. For   Element Children  |  InsertBefore    //==============


//=============================//
//=============================//
/*
    
ElementContainer.insertBefore(NewElement , Place To But);


ElementContainer.insertBefore(NewElement , ElementContainer.firstElementChild);

ElementContainer.insertBefore(NewElement , ElementContainer.lastElementChild);

ElementContainer.insertBefore(NewElement , ElementContainer.childNodes[Index Element Number]);

*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main'),
    
    // Create Div Element
    
    myNewElement = document.createElement('div'),
    
    // Create Text Node
    
    myText = document.createTextNode('Hello From Javascript');
    
// Append Text To The New Element

myNewElement.appendChild(myText);

// Append The New Element To My Main Div

myMainDiv.insertBefore(myNewElement , myMainDiv.firstElementChild);
*/


/*
var myMainDiv = document.getElementById('main'),
    
    // Create Div Element
    
    myNewElement = document.createElement('div'),
    
    // Create Text Node
    
    myText = document.createTextNode('Hello From Javascript');
    
// Append Text To The New Element

myNewElement.appendChild(myText);

// Append The New Element To My Main Div

myMainDiv.insertBefore(myNewElement , myMainDiv.childNodes[2]);  // Because Nodes Child Counting Space Allso
*/

//=================================================================================================================//
// EX. For   Element Children  |   RemoveChild   //==============


//=============================//
//=============================//
/*
    
     ElementFather.removeChild(ElementFather.Place Of Item);

*/
//=============================//
//=============================//
/*
var myMainDiv = document.getElementById('main');

myMainDiv.removeChild(myMainDiv.firstElementChild);
*/

/*
var myMainDiv = document.getElementById('main');

myMainDiv.removeChild(myMainDiv.lastElementChild);
*/

/*
var myMainDiv = document.getElementById('main');

myMainDiv.removeChild(myMainDiv.childNodes[1]);
*/

/*
var myMainDiv = document.getElementById('main');

myMainDiv.removeChild(myMainDiv.firstChild);
*/

/*
var myMainDiv = document.getElementById('main');

// myMainDiv.removeChild(myMainDiv.firstChild);

console.log(myMainDiv.childNodes);
*/


//=================================================================================================================//
// EX. For  Node [Name , Value , Type]    //==============


//=============================//
//=============================//
/*
    
           // nodeName  //
		  
		  -ElementFather.Place.nodeName
		  
		  -ElementFather.childNodes[Index Num].nodeName
		  
		   // nodeValue  //
		  
		  -ElementFather.Exact Place.nodeValue
		  
		  -ElementFather.childNodes[Index Num].childNodes[Index Num].nodeValue
		  
		   // nodeType  //
		  
		  -ElementFather.Exact Place.nodeType
		  
		  -ElementFather.childNodes[Index Num].childNodes[Index Num].nodeType

*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[1].nodeName);
*/

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes);
*/

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[1].nodeValue);
*/

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[1].firstChild.nodeValue);
*/

/*
var myMainDiv = document.getElementById('main');

// myMainDiv = The Main Parent Div
// childNodes[1] =  <p>This Is Our HTML P</p>
// childNodes[0] =  First Child Of Paragraph <p>This Is Our HTML P</p> Is :( This Is Our HTML P )

console.log(myMainDiv.childNodes[1].childNodes[0].nodeValue);
*/

/*
var myMainDiv = document.getElementById('main');

// myMainDiv = The Main Parent Div
// childNodes[1] =  <p>This Is Our HTML P</p>
// childNodes[0] =  First Child Of Paragraph <p>This Is Our HTML P</p> Is :( This Is Our HTML P )

console.log(myMainDiv.childNodes[1].childNodes[0].nodeType);
*/

/*
var myMainDiv = document.getElementById('main');

// myMainDiv = The Main Parent Div
// childNodes[3] =  <div>This Is Our HTML Div</div>
// childNodes[0] =  First Child Of <div>This Is Our HTML Div</div> Is :( This Is Our HTML Div )

console.log(myMainDiv.childNodes[3].childNodes[0].className);
*/

//=================================================================================================================//
// EX. For  CloneNode    //==============


//=============================//
//=============================//
/*
    cloneNode();
	
    cloneNode(false);     //Default
    cloneNode(true);


*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main'),
	
	myNewDiv = document.getElementById('new'),
	
	myCopy = myMainDiv.firstElementChild.cloneNode();

myNewDiv.appendChild(myCopy);
*/

/*
var myMainDiv = document.getElementById('main'),

    myNewDiv = document.getElementById('new'),

    myCopy = myMainDiv.firstElementChild.cloneNode(false);

myNewDiv.appendChild(myCopy);  
*/

/*
var myMainDiv = document.getElementById('main'),

    myNewDiv = document.getElementById('new'),
	 
	 // Clone The Node And Save In Variable

    myCopy = myMainDiv.firstElementChild.cloneNode(true);
	
	 // Insert This Copy Inside The New Element

myNewDiv.appendChild(myCopy);
*/



//=================================================================================================================//
// EX. For  ParentNode , ParentElement    //==============


//=============================//
//=============================//
/*
    
     Element.parentNode
	 
     Element.parentElement

*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main'),
	
	myButton =myMainDiv.firstElementChild;

// console.log(myButton); //

// console.log(myButton.parentNode);

myButton.onclick = function () {

	"use strict";
	
	this.parentNode.style.display = 'None';
	
};
*/

/*
var myMainDiv = document.getElementById('main'),
	
	myButton =myMainDiv.firstElementChild;

// console.log(myButton); //

// console.log(myButton.parentNode);

myButton.onclick = function () {

	"use strict";
	
	this.parentElement.style.display = 'None';
	
};

// console.log(myButton.parentNode);
// console.log(myButton.parentElement);
*/

/*
var myMainDiv = document.getElementById('main'),
	
	myButton =myMainDiv.firstElementChild;

myButton.onclick = function () {

	"use strict";
	
	this.parentElement.style.display = 'None';
	
};

console.log(myMainDiv.parentElement.tagName);

if (myMainDiv.parentElement.tagName === 'BODY') {
	
	console.log('This Elemen Has No Parent Olny Body');
	
}
*/

//=================================================================================================================//
// EX. For  Next , Previous [ Sibling ]    //==============


//=============================//
//=============================//
/*
    
	.nextSibling
	
	.nextElementSibling
	
	
	.previousSibling
	
	.previousElementSibling


*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes);
*/

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[1].nextSibling);
*/

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[1].nextElementSibling);
*/

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[1].nextElementSibling.textContent);
*/

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[1].nextElementSibling.textContent = 'Changed');
*/

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[2].previousSibling);
*/

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.childNodes[3].previousElementSibling.textContent = 'Changed');
*/


//=================================================================================================================//
// EX. For Focus , Blur     //==============



//=============================//
//=============================//
/*
    
   .focus();
   
   .blur();
   
*/
//=============================//
//=============================//

/*
var myForm = document.getElementById('main');

window.onload = function () {
	
"use strict";
	
	document.getElementById('myInput').focus();
	
};
*/

/*
var myForm = document.getElementById('main');

window.onload = function () {
	
"use strict";
	
	document.getElementById('myInput').focus();
	
};

document.querySelector('button').onclick = function () {
	
"use strict";

	document.getElementById('myInput').blur();
	
};
*/

/*
var myForm = document.getElementById('main');

window.onload = function () {
	
"use strict";
	
	document.getElementById('myInput').focus();
	
};

document.getElementById('myInput').onclick = function () {
	
"use strict";

	document.getElementById('myInput').blur();
	
};
*/


//=================================================================================================================//
// EX. For  Click    //==============



//=============================//
//=============================//
/*
    
     .click();

*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main'),
	
	
	myButton = myMainDiv.firstElementChild;

// console.log(myButton);

myButton.onclick = function () {

	"use strict";
	
	this.parentElement.style.display = 'none';
		
};

window.onload =  function () {

	"use strict";

	myButton.click();	
	
};
*/

/*
var myMainDiv = document.getElementById('main'),
	
	
	myButton = myMainDiv.firstElementChild;

myButton.onclick = function () {

	"use strict";
	
	this.parentElement.style.display = 'none';
		
};

window.onload =  function () {

	"use strict";

	setTimeout(function  () {
		
		myButton.click();
		
	}, 2000);	
	
};


//=================================================================================================================//
// EX. For AddEventListener   //==============


//=============================//
//=============================//
/*

     .addEventListener();
	 
     .removeEventListener();

*/
//=============================//
//=============================//

/*
var myMainButton = document.getElementById('main'),

    myPower = document.getElementById('power');

myMainButton.onclick = function () {
   
	"use strict";
	
	document.getElementById('monster1').style.display = 'none';
	
};

myPower.onclick = function () {
   
	"use strict";
	
	myMainButton.addEventListener('click', function () {
		
		document.getElementById('monster2').style.display = 'none';
		
	});
	
};
*/

/*
function makePower() {
	
	"use strict";
		
		document.getElementById('monster2').style.display = 'none';
		
	}

var myMainButton = document.getElementById('main'),

    myPower = document.getElementById('power');

myMainButton.onclick = function () {
   
	"use strict";
	
	document.getElementById('monster1').style.display = 'none';
	
};

myPower.onclick = function () {
   
	"use strict";
	
	myMainButton.addEventListener('click', makePower);
	
};
*/

//=================================================================================================================//
// EX. For  Contains    //==============



//=============================//
//=============================//
/*
    
   .contains();
   
   ElementFather.contains(Element I Search For);

*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main'),
	
	myChild = document.getElementById('myChild');

console.log(myMainDiv.contains(myChild));
*/

/*
var myMainDiv = document.getElementById('main'),
	
	myChild = document.getElementById('myChild');

if (myMainDiv.contains(myChild)) {
	
	// console.log('Good');
	
	myChild.textContent = 'Changed By Javascript';
	
}
*/

//=================================================================================================================//
// EX. For  Client [ Height , Width ]   //==============


//=============================//
//=============================//
/*
    
        (Viewble Area , Include Padding , No Border , No Margin , No scroll)
		
		.clientHeight
	
        .clientWidth   

*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.clientHeight + 'px');
*/

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.clientWidth + 'px');
*/

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.clientHeight + 'px');

console.log(myMainDiv.clientWidth + 'px');
*/

//=================================================================================================================//
// EX. For  Scroll [ Height , Width ]    //==============


//=============================//
//=============================//
/*
    
	(All Area Include Invisible Area , Include Padding , No Border , No Margin , No scroll)
		
		.scrollHeight
	
        .scrollWidth


*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.clientHeight + 'px');

console.log(myMainDiv.clientWidth + 'px');

console.log(myMainDiv.scrollHeight + 'px');

console.log(myMainDiv.scrollWidth + 'px');
*/

//=================================================================================================================//
// EX. For Offset [ Height , Width ]    //==============


//=============================//
//=============================//
/*
    
		(Viewble Area , Include Padding , Include Border , Include scroll , No Margin)

				.offsetHeight

				.offsetWidth 

*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main');

console.log(myMainDiv.clientHeight + 'px');

console.log(myMainDiv.clientWidth + 'px');

console.log(myMainDiv.scrollHeight + 'px');

console.log(myMainDiv.scrollWidth + 'px');

console.log(myMainDiv.offsetHeight + 'px');

console.log(myMainDiv.offsetWidth + 'px');
*/

//=================================================================================================================//
// EX. For  Scroll [ Top , Left ]    //==============


//=============================//
//=============================//
/*
    
	.scrollTop
	
	.scrollLeft


*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main');

myMainDiv.onclick = function () {

	"use strict";
	
	document.body.scrollTop += 100;
	
	console.log(document.body.scrollTop);
	
	
	if (document.body.scrollTop >= 1000) {
		
		this.classList.add('active');
	}
	
};
*/

/*
var myMainDiv = document.getElementById('main');

myMainDiv.onclick = function () {
	
	'use strict';
	
	document.body.scrollTop += 100;
	
	console.log(document.body.scrollLeft);
	
if (document.body.scrollLeft >= 1000) {
		
		this.classList.add('active');
	}
	
};
*/




//=================================================================================================================//
// EX. For  Client [ Top , Left ]    //==============


//=============================//
//=============================//
/*
    
      .clientTop
	  
      .clientLeft

*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main');

console.log('Left Border Width In Px = ' + myMainDiv.clientLeft + 'px');

console.log('Top Border Width In Px = ' + myMainDiv.clientTop + 'px');
*/


//=================================================================================================================//
// EX. For  Style    //==============


//=============================//
//=============================//
/*
    
     Element.Style.Property = "Value";

*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main');

myMainDiv.style.backgroundColor = '#FF0000';
myMainDiv.style.padding = '10px';
myMainDiv.style.color = '#FFF';
myMainDiv.style.fontWeight = '900';
myMainDiv.style.fontSize = '60px;';
//myMainDiv.style.border = '10px solid #000';
myMainDiv.style.borderBottom = '10px solid #00F';
myMainDiv.style.borderTop = '10px solid #080';
*/

//=================================================================================================================//
// EX. For Document [ InputEncoding , LastModified ,  URL  ]  //==============


//=============================//
//=============================//
/*
    
	document.inputEncoding
	
	document.lastModified
	
	document.URL


*/
//=============================//
//=============================//

/*
var myMainDiv = document.getElementById('main');

console.log(document.inputEncoding);

console.log(document.lastModified);

console.log(document.URL);
*/

//=================================================================================================================//
// EX. For  Document   Create [ Element , Text ,  Comment ]    //==============


//=============================//
//=============================//
/*
    
	document.createElement('Element Type');
	
	document.createTextNode('Text....');
	
	document.createComment('Text.....');


*/
//=============================//
//=============================//

/*
// Create The Main Element

var myElement = document.createElement('div');

// Append To Body 

document.body.appendChild(myElement);

// Create Text Node

var MyText = document.createTextNode('This Is Div Created With Javascript');

// Create Comment 

var myComment = document.createComment('This Is Comment Created In Js');

// Add The Comment To My Element

myElement.appendChild(myComment);

// Append Text To Div I Have Been Created

myElement.appendChild(MyText);
*/


/*
// Create The Main Element

var myElement = document.createElement('div');

// Append To Body 

document.body.appendChild(myElement);

// Create Text Node

var MyText = document.createTextNode('This Is Div Created With Javascript');

// Create Comment 

var myComment = document.createComment('This Text Created With Javascript');

// Add The Comment To My Element

myElement.appendChild(myComment);

// Add The Text To My Element

myElement.appendChild(MyText);
*/

/*
// Create The Main Element

var myElement = document.createElement('div');

// Append To Body 

document.body.appendChild(myElement);

// Create Text Node

var MyText = document.createTextNode('This Is Div Created With Javascript');

// Create Start Comment 

var myStartComment = document.createComment('Start Text Created With Javascript');

// Create End Comment 

var myEndComment = document.createComment('End Text Created With Javascript');

// Add The Start Comment To My Element

myElement.appendChild(myStartComment);

// Add The Text To My Element

myElement.appendChild(MyText);

// Add The End Comment To My Element

myElement.appendChild(myEndComment);
*/

//------------------------------------------------------------------------------//
//------------------------------------------------------------------------------//
/* Home Work To Create Templet From Just (Js) Div With UL And Li By Useing Loop */
//------------------------------------------------------------------------------//
//------------------------------------------------------------------------------//


//=================================================================================================================//
// EX. For  Create Attribute    //==============


//=============================//
//=============================//
/*
    
   document.createAttribute('Type Attribute');
   
   myAttr.value = 'Name It';
   
   myElement.setAttributeNode(myAttr); 

*/
//=============================//
//=============================//

/*
var myElement = document.getElementById('main'),
	
	// Create The Attribute 
	
	myAttr = document.createAttribute('class');

// Change Attribute Value

myAttr.value = 'custom';

// Add This Attribute To Element

myElement.setAttributeNode(myAttr);
*/

/*
var myElement = document.getElementById('main'),
	
	// Create The Attribute 
	
	myAttr = document.createAttribute('class'),
	
	// Create Another Attribute
	
	mySecondAttr = document.createAttribute('title');

// Change Attribute Value

myAttr.value = 'custom';

// Change Second Attribute Value

mySecondAttr.value = 'hamam';

// Add This Attribute To Element

myElement.setAttributeNode(myAttr);

// Add This Attribute To Element

myElement.setAttributeNode(mySecondAttr);
*/



//=================================================================================================================//
// EX. For  Events | How To    //==============


//=============================//
//=============================//
/*
    
   first way To Write The Function Name In Button In HTML
   
   Second Way Is To Use Button In Function
   
   Third Way Is To Use Button With Name Of Function Efter Function
   
   Fourth Use Button Without Variable

*/
//=============================//
//=============================//

/*
var myDiv = document.getElementById('main');

function changeMe() {
	
	'use strict';
	
	myDiv.style.color = 'red';
	
}
*/

/*
var myDiv = document.getElementById('main'),
	
	myButton = document.querySelector('button');

myButton.onclick = function () {
	
	'use strict';
	
	myDiv.style.color = 'red';
	
};
*/

/*
var myDiv = document.getElementById('main'),
	
	myButton = document.querySelector('button');

function changeMe() {
	
	'use strict';
	
	myDiv.style.color = 'red';
	
};

myButton.onclick = changeMe;
*/

/*
var myDiv = document.getElementById('main');

function changeMe() {
	
	'use strict';
	
	myDiv.style.color = 'red';
	
};

document.querySelector('button').onclick = changeMe;
*/

//=================================================================================================================//
// EX. For  Events [onLoad , onscroll, onresize]    //==============


//=============================//
//=============================//
/*
    
    Window.onload
	
	Window.onscroll
	
	Window.onresize

*/
//=============================//
//=============================//

/*
var myElement = document.getElementById('main');

window.onload = function () {
	
	'use strict';
	
	console.log('Dom Is Ready');
		
}
*/

/*
// First Keep Big Height For Body To Try  body {height: 4000px} //
var myElement = document.getElementById('main');

window.onscroll = function () {
	
	'use strict';
	
	console.log('You Are Scrolling Now');
		
}
*/

/*
var myElement = document.getElementById('main');

window.onresize = function () {
	
	'use strict';
	
	console.log('You Are Resizing Now');
		
}
*/

//=================================================================================================================//
// EX. For  Events [onfocus , onblur, onsubmit]    //==============


//=============================//
//=============================//
/*
    
	Element.onfocus
	
	Element.onblur
	
	Form.onsubmit


    preventDefault();    // To Stop Doing Submit


*/
//=============================//
//=============================//

/*
var myElement = document.getElementById('main'),
	
    myNote = document.getElementById('notice'),
	
	myInput = document.getElementById('input');

myInput.onfocus = function () {

	'use strict';
	
	myNote.textContent = 'Please Dont Forget To Write A Strong Password';	
	
};

myInput.onblur = function () {

	'use strict';
	
	myNote.textContent = '';
	
	// console.log(myInput.value.length);
	
	if (myInput.value.length < 10) {
		
		myNote.textContent = 'Sorry Yor Password Must Be At Least 10 Character';
		
	}
	
};
*/

/*
var myElement = document.getElementById('main'),
	
    myNote = document.getElementById('notice'),
	
	myInput = document.getElementById('input');

myElement.onsubmit = function (e) {

	'use strict';
	
	e.preventDefault();
	
	// myNote.textContent = 'Test';
	
};
*/

//=================================================================================================================//
// EX. For  Events [onclick , onmouse]    //==============


//=============================//
//=============================//
/*
    
    Element.onclick
	
    Element.ondbclick
	
    Element.oncontextmenu
	
    Element.onmouseenter
	
    Element.onmouseleave

*/
//=============================//
//=============================//

/*
var myElement = document.getElementById('main'),
	
    myNote = document.getElementById('notice');

myElement.onclick = function () {

	'use strict';
	
	myNote.textContent = 'You Clicked On The Element';
	
};
*/

/*
var myElement = document.getElementById('main'),
	
    myNote = document.getElementById('notice');

myElement.ondblclick = function () {

	'use strict';
	
	myNote.textContent = 'You Clicked On The Element Efter Double Click';
	
};
*/

/*
var myElement = document.getElementById('main'),
	
    myNote = document.getElementById('notice');

myElement.oncontextmenu = function (e) {

	'use strict';
	
	e.preventDefault();
	
	myNote.textContent = 'You Cannot Right Click On Mouse If You Click Here';
	
};
*/

/*
var myElement = document.getElementById('main'),
	
    myNote = document.getElementById('notice');

window.oncontextmenu = function (e) {

	'use strict';
	
	e.preventDefault();
	
	myNote.textContent = 'You Cannot Right Click On Mouse If You Click Here';
	
};
*/

/*
var myElement = document.getElementById('main'),
	
    myNote = document.getElementById('notice');

myElement.oncontextmenu = function () {

	'use strict';
	
	myNote.textContent = 'You Right Click On Mouse';
	
};
*/

/*
var myElement = document.getElementById('main'),
	
    myNote = document.getElementById('notice');

myElement.onmouseenter = function () {

	'use strict';
	
	myNote.textContent = 'You Hoverd On The Element';
	
};
*/

/*
var myElement = document.getElementById('main'),
	
    myNote = document.getElementById('notice');

myElement.onmouseleave = function () {

	'use strict';
	
	myNote.textContent = 'You Leave The Element';
	
};
*/

/*
var myElement = document.getElementById('main'),
	
    myNote = document.getElementById('notice');

myElement.onmouseenter = function () {

	'use strict';
	
	myNote.textContent = 'You Hoverd On The Element';
	
};

myElement.onmouseleave = function () {

	'use strict';
	
	myNote.textContent = 'You Leave The Element';
	
};
*/

//=================================================================================================================//
// EX. For  OnKey [Down , Press , Up]    //==============


//=============================//
//=============================//
/*
    
    Element.onkeyup
	
    Element.onkeypress
	
    Element.onkeydown

*/
//=============================//
//=============================//

/*
var myElement = document.getElementById('main'),
	
	myInput = document.getElementById('input'),
	
    myNote = document.getElementById('notice');

myInput.onkeyup = function () {

	'use strict';
	
	
	myNote.textContent = this.value;
	
	
};
*/

//=================================================================================================================//
// EX. For  To Satrt Making Pure Js    //==============


/*
console.log(document.childNodes);

console.log(document.childNodes[0]);
console.log(document.childNodes[1]);
*/

/*
console.log(document.head.childNodes);
console.log(document.head.childNodes[0]);
console.log(document.head.childNodes[1]);
console.log(document.head.childNodes[2]);
console.log(document.head.childNodes[3]);
console.log(document.head.childNodes[4]);
console.log(document.head.childNodes[5]);
console.log(document.head.childNodes[6]);
console.log(document.head.childNodes[7]);

console.log(document.head.firstElementChild);
console.log(document.head.lastElementChild);
*/

/*
console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[2]);
console.log(document.body.childNodes[3]);
console.log(document.body.childNodes[4]);
console.log(document.body.childNodes[5]);
console.log(document.body.childNodes[6]);
console.log(document.body.childNodes[7]);
console.log(document.body.childNodes[8]);
console.log(document.body.childNodes[9]);
console.log(document.body.childNodes[10]);
console.log(document.body.childNodes[11]);

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
*/

//=================================================================================================================//
//==============================================//    The End    //================================================//
//=================================================================================================================//