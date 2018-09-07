$(document).ready(function() {

/*
   $('button').css('margin', '10px 0 0 30px');
   $('ul').css('color', '#FFF000');
   
    $('button').click(function(){

 
        $('li').slideToggle(500);

            $('li').siblings().animate({
                   
                   marginLeft: '420px',
                   width: '200px',
                   height: '50px',
                   opacity: .5


            },500, function(){

               $('li').css({
               	            color: '#ca133e',
               	            background: '#DDD'

               	        });

               $('button').css({

               	color: '#ca133e',
                border: '2px solid #ca133e'

               });

            });

   for (var i = 0; i < $('li').length; i++) {

   	console.log(i);

   }

      console.log($('li').eq(i));

            $('li:eq(i)').css({

               	width: '500px'

               });

    });

   
   
   // console.log($('li').length);


*/




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


/*End JQUERY*/

});