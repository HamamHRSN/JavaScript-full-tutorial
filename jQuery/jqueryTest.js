/* First Ex */
/*
$(document).ready(function (){

    $("button").click(function(){
         $("p").hide(1000, function(){

           $("span").show();

         });
    });
});
*/
/*
$(document).ready(function (){

    $("button").click(function(){
         $("p").toggle("slow", function(){

           $("span").toggle();

         });
    });
});
*/
/*¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤*/
/* 2 Ex */
/*
$(document).ready(function (){

    $("button").click(function(){
         $("div").fadeToggle("fast", function(){ $("span").fadeIn(2000);});
    });
});
*/
/*
$(document).ready(function (){

    $("button").click(function(){
         $("div").fadeIn("fast", function(){ $("span").show();});
    });
});
*/
/*
$(document).ready(function (){

    $("button").click(function(){
         $("div").fadeTo(3000,0.3);
    });
});
*/
/*¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤*/
/* 3 Ex */
/*
$(document).ready(function (){

    $(".open").click(function(){
        $(".box").slideToggle(2000);
    });
});
*/
/*
$(document).ready(function (){

    $(".open").click(function(){
        $(".box").slideUp(2000);
    });
});
*/
/*
$(document).ready(function (){

    $(".open").click(function(){
        $(".box").slideDown(2000);
    });
});
*/
/*¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤*/
/* 4 Ex */
/*
$(document).ready(function(){
     $(".box").animate({
           top:"0"
     }, 3000 ,function(){
          $(".head").slideDown(3000, function(){
            $(".head").css("color","#F00");
          });
     });
     $("h2").animate({
           opacity:".5"
     }, 10000, function(){
       $(".head").css("borderRadius","10px");
       $("p").show("slow");
     });
     $("p").animate({
         borderColor:"#F00"
     }, 8000, function(){
       $(".bottom").fadeIn("slow");
       $("p").css("color","#F00");
     });
     $(".box").animate({
           borderRadius:"10px"
     }, 10000 ,function(){
          $(".bottom").slideDown(3000, function(){
            $(".bottom").css("color","#F00");
          });
     });
});
*/
/*¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤*/
/* 5 Ex */
/*
$(document).ready(function (){
   $("div").animate({
    width:"+=200px",
    height:"200px",
    opacity:"0.5"
  },2000);
  $("div").animate({
   width:"-=200px",
   height:"20px",
   opacity:"1",

 },2000,function(){
   $(this).css("color","#ca133e");
   $(this).css("border","3px solid #ca133e");
 });
 $("button").click(function(){
   $("div").stop();
 });
});
*/
/*¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤*/
/* 6 Ex */
/*
$(document).ready(function (){

    $("span").click(function(){
        $("input").after("<input type='text' name='fild2'/>");
        $("span").hide();
    });
});
*/
/*
$(document).ready(function (){

  $("<p>Hello Paragraph</p>").appendTo("div");

});
*/
/*
$(document).ready(function (){

    $(".custom").bind("myCustomEvent",function(event, name, age){
        $(this).text("Hello " + name + " Your Age Is: " + age);
    });
    $("button").click(function () {
      $(".custom").trigger("myCustomEvent", ["Hamam","34"]);
    });
});
*/
/*Here Start Jquery*/
/*$(document).ready(function(){

  $(".custom-design").bind("myCustomDesign", function(event, myHeight, myWidth) {
    $(this).height(myHeight).width(myWidth);
  });

 $("a").click(function(){
   $(".custom-design").trigger("myCustomDesign",["400px","400px"]);
   $(".custom-design").css("color","#F00");
 })

});*/ /*Here End Jquery*/

/*
$(document).ready(function (){

   $("input").on("keyup", function() {
        $("div h3").text($(this).val());
   });

   $("textarea").on("change", function() {
        $("div p").text($(this).val());
   });

   $("select").on("change", function() {
        $("div").css("background", $(this).val());
   });
   $("select").on("change", function() {
        $("div").text("You have choose " + $(this).val());
   });

});
*/
/*
$(document).ready(function (){

$(window).on("resize", function(){

  var wid = $(window).width(),
      hei = $(window).height();

  console.log(wid,hei);
});

});
*/
/*
$(document).ready(function (){

  $("section").height($(window).height() - 300);

$(window).on("resize", function(){

  $("section").height($(window).height() - 300);

  var wid = $(window).width(),
      hei = $(window).height();

  console.log(wid,hei);

if (wid < 768) {
  $("div").addClass("hidden");
} else {
  $("div").removeClass("hidden");
}

});

});
*/
/*Very Good For Responsev*/
/*
$(document).ready(function (){

  $("section").width($(window).width());

$(window).on("resize", function(){

  $("section").width($(window).width());

  var wid = $(window).width(),
      hei = $(window).height();

  console.log(wid,hei);

if (wid < 768) {
  $("div").removeClass("hidden");
} else {
  $("div").addClass("hidden");
}

});

});
*/
/*
$(document).ready(function (){

$(window).on("scroll", function() {

   var scrollGoUp = $(window).scrollTop();

    console.log(scrollGoUp);

   if (scrollGoUp > 300) {

      $(".goUp").fadeIn();

   }else {

     $(".goUp").fadeOut();

   }

});

});
*/
/*============================*/
/* Mouse Move Sizis In Screen */
/*
$(document).ready(function (){

  $("html").mousemove(function(event) {

      $("span").text("X-Axis: " + event.pageX + " Y-Axis: " + event.pageY);

  });

});
*/
/*============================*/
/*
$(document).ready(function (){

  $("html").click(function(event) {

      $(".circle").show().offset({
        left : event.pageX,
        top : event.pageY
      });

  });

});
*/

/*
$(document).ready(function (){


  $("form").submit(function(event) {

    event.preventDefault();

  });

});
*/
/*
$(document).ready(function (){

  $("form").submit(function(event) {

if ( $("input:first").val() === "confirm") {

  $("span").text("Your Word Is Correct... 'Thanks' ").show("slow");

  return;

}

  $("span").text("Your Word Is Not Correct... 'Please Try Again'").show().delay(5000).fadeOut(5000);

  event.preventDefault();

  });

});
*/
/*
$(document).ready(function () {

      $("button").on("click", function () {

           $("#left").clone(true).appendTo(".right");
           $("#right").clone(true).appendTo(".left");

      });

      $("span").on("click", function () {

           $(this).css("color", "#F00");

      });


});
*/
