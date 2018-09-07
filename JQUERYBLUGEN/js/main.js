$(document).ready(function () {

/*
// bring the linke name To The console

$(".navbar li a").click(function() {

  window.console.log($(this).data('scroll'));

});
*/

// Smoothly Scroll To Element

$(".navbar li a").click(function(event) {

  event.preventDefault();

  $("html, body").animate({

    scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

  }, 1000);


});

//=======================================

// start open fixed NavBar
$('.fixed-menu .fa-gear').on('click', function() {

$(this).parent('.fixed-menu').toggleClass('is-visible');

if ($(this).parent('.fixed-menu').hasClass('is-visible')) {

    $(this).parent('.fixed-menu').animate({ left : 0  }, 500);

    $('body').animate({ paddingLeft : '235px' }, 500);


} else {

    $(this).parent('.fixed-menu').animate({ left : '-235px' }, 500);

        $('body').animate({ paddingLeft : 0 }, 500);


}

});
//==================================================

// calcolate body padding top depend on navbar hieght
// need style in css position fixed to navbar

$('body').css("paddingTop", $('.navbar').innerHeight() - 10 );

//=======================================

// add Active class on navbar links and remove from siblings brothers by Go Out To Parent
$('.navbar li a').click(function() {

     // First Way
    // $(this).addClass('active').parent().siblings().find('a').removeClass('active');

    // Second Way
    $('.navbar a').removeClass('active');
    $(this).addClass('active');
});

//=======================================

// Syng navbar Links with sections

$(window).scroll(function() {

    $('.block').each(function(){

      if ($(window).scrollTop() > $(this).offset().top ) {

           // console.log($(this).attr('id'));

           var blockID = $(this).attr('id');

           $('.navbar a').removeClass('active');

           $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');

      }

    });

var scrollToTop = $(".scroll-to-top");

    if ($(window).scrollTop() >= 1000) {
        

        if (scrollToTop.is(':hidden')) {

      scrollToTop.fadeIn(400);

                                        }

    } else {

      scrollToTop.fadeOut(400);
    }

});

// Smoothly Scroll To Element

$(".scroll-to-top").click(function(event) {

  event.preventDefault();

  $("html, body").animate({

    scrollTop: 0

  }, 1000);


});

// button show popup 
$('.show-popup').click(function (event){

   event.preventDefault();

/*
  $('.' + $(this).data('popup')).fadeIn(1000);
*/

  $($(this).data('popup')).fadeIn(1000);

});

// popup up in close 

$('.popup').click(function(event) {

  event.preventDefault();

  $($(this).data('popup')).fadeOut(400);


});

/*
// popup up i close buttom

$('#closePop').click(function(event) {

  event.preventDefault();

  $('.popup').fadeOut(400);


});
*/

// Stop Propagation

$('.popup .innerPop').click(function(event) {
  

  event.stopPropagation();



});


// Stop Propagation

$('.popup .closePop').click(function(event) {
  

  event.preventDefault();


  $(this).parentsUntil('.popup').parent().fadeOut(400);

});


// Use Tap For Closing Usin Number 27 in Keybord

$(document).keydown(function(e) {

if (e.keyCode == 27) {

  $('.popup').fadeOut();

}

});


// button with effect Prepend

$('.button-effect button').each(function () {

   $(this).prepend('<span></span>');

});


// button with effect  left

$('.button-effect.form-left').hover(function () {

    $(this).find('span').eq(0).animate({

      width: '100%'

    }, 200);

}, function () {

   $(this).find('span').eq(0).animate({

      width: 0

    }, 200);


});

// button with effect  top 

$('.button-effect.form-top').hover(function () {

    $(this).find('span').eq(0).animate({

      height: '100%'

    }, 200);

}, function () {

   $(this).find('span').eq(0).animate({

      height: 0

    }, 200);


});

// button with effect  border left

$('.border-left').hover(function () {

    $(this).find('span').eq(0).animate({

      width: '100%'

    }, 200);

}, function () {

   $(this).find('span').eq(0).animate({

      width: 0

    }, 200);


});

// button with effect  border Top

$('.border-top').hover(function () {

    $(this).find('span').eq(0).animate({

      height: '100%'

    }, 200);

}, function () {

   $(this).find('span').eq(0).animate({

      height: 0

    }, 200);


});


// Animate Progress

$('.animated-progress span').each(function () {

   $(this).animate({

    width:$(this).attr('data-progress') + '%'

   },1000, function() {


    $(this).text('Perc:' + $(this).attr('data-progress') + '%');

   });

});


// logo star here

var container = $('.logocontainer');
var logoPyaculies = $('.logoPyaculies');
container.click(function() {
  $('.logoPyaculies:before').fadeOut(400);
  $('.logoPyaculies ul li').fadeIn(400);

     $(this).animate({
       

       display: 'hidden'
    

   },1000, function() {


        display: 'block'

   });

});

// Inside the fixed minu Coloring
$('.change-colors li').on('click', function () {

     $('body').attr('data-choosed-color', $(this).data('color'));
});



var numberOfThumbnails = $('.thumnbnails').children().length,

    marginBetweenThumbnails = '.5',

    totalMarginBetweenThumbnails = (numberOfThumbnails - 1) * marginBetweenThumbnails,

    thumbnailsWidth = (100 - totalMarginBetweenThumbnails) / numberOfThumbnails;

/*console.log(thumbnailsWidth);*/

$('.thumnbnails img').css({
     
     'width': thumbnailsWidth + '%',
     'margin-right': marginBetweenThumbnails + '%'

});

// thumnbnails Gallery 

$('.thumnbnails img').on('click', function () {

    $(this).addClass('selected').siblings().removeClass('selected');

   // console.log($(this).attr('src'));

   $('.master-img  img').attr('src', $(this).attr('src'));

});

// Traversing in Img Gallery By <i>

$('.master-img .fa-chevron-right').on('click', function() {

  if ($('.thumnbnails .selected').is(':last-child')) {

      $('.thumnbnails img').eq(0).click();
  } else {

    $('.thumnbnails .selected').next().click();

  }

});

$('.master-img .fa-chevron-left').on('click', function() {

  if ($('.thumnbnails .selected').is(':first-child')) {

          $('.thumnbnails img:last-child').click();

  } else {

$('.thumnbnails .selected').prev().click();

         }

});



// Toggle Product Description
$('.products .product i').on('click', function() {

  $(this).toggleClass('fa-plus fa-minus');
   
   $(this).next('p').slideToggle();
});

// Toggle Items Description
$('.items .item i').on('click', function() {

  $(this).toggleClass('fa-plus fa-minus');
   
   $(this).next('p').slideToggle();
});


/*¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤*/

$('#menuButton').on('click', function(){


$('#menuButton').on('mouseover', function(){

  $(this).animate({ 
                  
                     borderRadius: '30px'

                   }, 500);

});

$('#menuButton').on('mouseleave', function(){

  $(this).animate({ 
             
                     borderRadius: 0


                   }, 500);

});
  $('.mainMenu').toggleClass('is-visible');

if ($('.mainMenu li').parent().hasClass('is-visible')) {

     $('.mainMenu li').slideDown(1000);

    $('.mainMenu').animate({ marginLeft : '20px' }, 500);
    
   

} else {

    $('.mainMenu li').slideUp(1000);

    $('.mainMenu').animate({ marginLeft : '-300px' }, 500);


}


  });


$('.mainMenu li').on('mouseover', function(){

  $(this).animate({ 
                  width : '+=20px',
                     borderRadius: '30px'

                   }, 500);

});

$('.mainMenu li').on('mouseleave', function(){

  $(this).animate({ 
                  width : '-=20px',
                     borderRadius: 0


                   }, 500);

});






}); /*  Here Jquery File Ends */





/*
var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c = canvas.getContext('2d');
    
    c.fillStyle ='rgba(202, 19, 62, 0.7)';
    c.fillRect(100,100,50,50);

    c.fillStyle ='blue';
    c.fillRect(500,100,50,50);

    

    c.beginPath();
    c.arc(360, 360, 60, 0, Math.PI * 2, false);
    c.strokeStyle = 'rgba(202, 19, 62, 0.7)';
    c.stroke();

    console.log(Math.PI * 2);

    c.beginPath();
    c.moveTo(50, 300);
    c.lineTo(300, 100);
    c.lineTo(400, 300);
    c.lineTo(50, 300);
    c.fillStyle ='rgba(202, 19, 62, 0.7)';
    c.stroke();
    
     c.beginPath();
    c.moveTo(300, 50);
    c.lineTo(100, 300);
    c.lineTo(300, 400);
    c.lineTo(300, 50);
    c.fillStyle ='rgba(202, 19, 62, 0.7)';
    c.stroke();
*/
    
    var canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c = canvas.getContext('2d');
/*
    c.beginPath();
    c.arc(360, 360, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'rgba(202, 19, 62, 0.7)';
    c.stroke();
*/

var mouse = {
  x:undefined,
  y:undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
  '#2C3E50',
  '#E74C3C',
  '#ECF0F1',
  '#3498DB',
  '#2980B9',
];

window.addEventListener('mousemove', function(event) {
   mouse.x = event.x;
   mouse.y = event.y;
  /*console.log(event);*/
})

window.addEventListener('resize', function() {
   
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})

function Circle(x, y, dx, dy, radius) {

   this.x = x;
   this.y = y;
   this.dx = dx;
   this.dy = dy;
   this.radius = radius;
   this.minRadius = radius;
   this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

   this.draw = function() {

    c.beginPath();
    c.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle =  this.color;
    c.fill();

   }
   
   this.update = function() {
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
         if (this.radius < maxRadius) {
         this.radius += 1;
            }
    } else if (this.radius > this.minRadius) {
         this.radius -= 1;
            }

    this.draw();
   }
   

}


var circleArray = [];

function init() {

circleArray = [];

for (var i = 0; i < 800; i++) {
  var radius = Math.random() * 3 + 1;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5);
  var dy = (Math.random() - 0.5);

  circleArray.push(new Circle(x, y, dx, dy, radius));

  
  }
     
}

 function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, innerWidth, innerHeight);

      for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }

    init();
    animate();





    /*============================================================*/




    var canvas2 = document.getElementById('canvas2');
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    c2 = canvas2.getContext('2d');
/*
    c.beginPath();
    c.arc(360, 360, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'rgba(202, 19, 62, 0.7)';
    c.stroke();
*/





var mouse2 = {
  x:undefined,
  y:undefined
}

var maxRadius2 = 50;
var minRadius2 = 5;

var colorArray2 = [
  '#ca133e',
  'rgba(202, 19, 62, 0.7)',

];

window.addEventListener('mousemove', function(event) {
   mouse2.x = event.x;
   mouse2.y = event.y;
  /*console.log(event);*/
})

window.addEventListener('resize', function() {
   
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;

    init2();
})

function Circle2(x, y, dx, dy, radius) {

   this.x = x;
   this.y = y;
   this.dx = dx;
   this.dy = dy;
   this.radius = radius;
   this.minRadius2 = radius;
   this.color = colorArray2[Math.floor(Math.random() * colorArray2.length)];

   this.draw2 = function() {

    c2.beginPath();
    c2.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c2.fillStyle =  this.color;
    c2.fill();

    c2.beginPath();
    c2.moveTo(this.x, this.y);
    c2.lineTo(this.dx, this.dy);
    c2.strokeStyle ='rgba(202, 19, 62, 0.7)';
    c2.stroke();

   }
   
   this.update = function() {
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;



    this.draw2();
   }
   

}

var circleArray2 = [];

function init2() {

circleArray2 = [];

for (var i = 0; i < 200; i++) {
  var radius = Math.random() * 3 + 1;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5);
  var dy = (Math.random() - 0.5);

  circleArray2.push(new Circle2(x, y, dx, dy, radius));

  
  }
     
}

 function animate2() {
      requestAnimationFrame(animate2);
      c2.clearRect(0, 0, innerWidth, innerHeight);

      for (var i = 0; i < circleArray2.length; i++) {
        circleArray2[i].update();
      }
    }

    init2();
    animate2();

    /*============================================================*/




    var canvas3 = document.getElementById('canvas3');
    canvas3.width = window.innerWidth  - 50;
    canvas3.height = window.innerHeight;
    var c3 = canvas3.getContext('2d');

    var mouse3 = {
  x:undefined,
  y:undefined
}

    window.addEventListener('mousemove', function(event) {
   mouse3.x = event.x;
   mouse3.y = event.y;
  /*console.log(event);*/
})

function Circle3(x, y, dx, dy, radius) {

   this.x = x;
   this.y = y;
   this.dx = dx;
   this.dy = dy;
   this.radius = radius;
   this.minRadius3 = radius;
   this.color = '#FFF000';

   this.draw3 = function() {

    c3.beginPath();
    c3.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c3.fillStyle =  this.color;
    c3.fill();
/*
    c3.beginPath();
    c3.moveTo(this.x, this.y);
    c3.lineTo(this.dx, this.dy);
    c3.strokeStyle ='rgba(202, 19, 62, 0.7)';
    c3.stroke();
*/
   }
   
   this.update = function() {
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += -this.dx;
    this.y += -this.dy;



    this.draw3();
   }
   

}

    var circleArray3 = [];

function init3() {

circleArray3 = [];

for (var i = 0; i < 100; i++) {
  var radius = Math.random() * 3 + 1;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5);
  var dy = (Math.random() - 0.5);

  circleArray3.push(new Circle3(x, y, dx, dy, radius));

  
  }
     
}

 function animate3() {
      requestAnimationFrame(animate3);
      c3.clearRect(0, 0, innerWidth, innerHeight);

      for (var i = 0; i < circleArray3.length; i++) {
        circleArray3[i].update();
      }
    }

    console.log(circleArray3.length);

    init3();
    animate3();



    /*

    window.addEventListener('resize', function() {
   
    c3.width = window.innerWidth - 50;
    //c3.height = window.innerHeight;

     console.log(c3.width, c3.height);

    if (c3.width <  700) {

      //alert('Your Canvas Is Less Than 500Px Is Now: ' + c3.width);

    }

   })
*/
     
/*
     c3.fillStyle = '#FFF000';
     c3.fillRect(1000, 100, 200, 200, 50);
 

    c3.beginPath();
    c3.moveTo(500, 300);
    c3.lineTo(300, 100);
    c3.lineTo(100, 50);
    c3.lineTo(100, 100);
    c3.strokeStyle ='#FFF000';
    c3.stroke();
*/

/*

    window.addEventListener('resize', function() {
   
    c3.width = window.innerWidth;
    c3.height = window.innerHeight;

    // console.log(c3.width, c3.height);



})


    window.addEventListener('mousemove', function(event) {
   
    c3.width = event.x;
    c3.height = event.y;

console.log(event.x, event.y);

var rand = Math.random(),

    // randomNumber = Math.ceil(rand),

    randomW = Math.floor((rand * window.innerWidth) + 1),
    randomH = Math.floor((rand * window.innerHeight) + 1);


console.log(rand);
//console.log(randomNumber);
 console.log(randomW); 
  console.log(randomH); 


for (var i = 0; i < window.innerWidth; i++) {


    c3.beginPath();
    c3.moveTo(rand * window.innerWidth, rand * window.innerHeight);
    c3.lineTo(event.x, event.y);
    c3.strokeStyle ='#FFF000';
    c3.stroke();
  
}
   



function Circle3(x, y, dx, dy, radius) {

   event.x = x;
   event.y = y;
   event.dx = dx;
   event.dy = dy;
   event.radius = radius;

if (event.x == x) {

  console.log('yes Hamam Its X now ' + x);
}
/*
  function draw3() {

    c3.beginPath();
    c3.arc( event.x, event.y, event.radius, 0, Math.PI * 2, false);
    c3.fillStyle =  '#FFF000';
    c3.fill();

    c3.beginPath();
    c3.moveTo(event.x, event.y);
    c3.lineTo(event.dx, event.dy);
    c3.strokeStyle ='rgba(202, 19, 62, 0.7)';
    c3.stroke();

   }

}
*/
/*
draw3();
*/
/*
Circle3();
var rand = Math.random(),

    // randomNumber = Math.ceil(rand),

    randomH = Math.floor((rand * 100) + 1);


console.log(rand);
//console.log(randomNumber);
*/
/*
    c3.beginPath();
    c3.moveTo(event.x, event.y);
    c3.lineTo(randomH, rand);
    c3.strokeStyle ='#FFF000';
    c3.stroke();
*/
/*
     c3.fillStyle = '#FFF000';
     c3.fillRect(100, 100, 100, 100);

     
     c3.beginPath();
     c3.fillStyle = '#F00';
     c3.arc(100, 100, 30, 0, Math.IP, false);
     c3.fill();
     
     

})
 */ 
  /*============================================================*/  