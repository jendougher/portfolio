
$(document).ready(function() {
    
  
$('.js--scroll-to-about').click(function () {
   $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
     });  
    
$('.js--scroll-to-tools').click(function () {
   $('html, body').animate({scrollTop: $('.js--section-tools').offset().top}, 1000);
     });  
    
$('.js--scroll-to-projects').click(function () {
   $('html, body').animate({scrollTop: $('.js--section-projects').offset().top}, 1000);
     });  
    
$('.js--scroll-to-form').click(function () {
   $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
     });
    
    
    
    
    
    
   
  $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%' 
    });


   
  $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%' 
    });


   
  $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%' 
    });


   
  $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '50%' 
    });


   
  $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-6').addClass('animated fadeIn');
    }, {
        offset: '50%' 
    });

   
  $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-7').addClass('animated fadeIn');
    }, {
        offset: '50%' 
    });




});

    


